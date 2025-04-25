"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import InputFiled from "@/components/InputText/InputFiled";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import AlertMassage from "@/components/AlertMassage/AlertMassage";
interface LoginForm {
  username: string;
  password: string;
}

export default function Home() {
  const router = useRouter();
  const [loginState, setLoginState] = useState<any[]>([]);
  const [formInput, setFormInput] = useState<LoginForm | null>(null);
  const [alert, setAlert] = useState({
    showAlert: false,
    severity: '',
    massage: ''
  })

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginForm> = (inputData) => {
    setFormInput(inputData);
    fetch("https://fakestoreapi.com/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setLoginState(data));
  };

  useEffect(() => {
    if (formInput && loginState.length > 0) {
      const foundUser = loginState.find(
        (user: any) =>
          user.username === formInput.username &&
          user.password === formInput.password
      );
      if (foundUser) {
        setAlert({
          showAlert: true,
          severity: 'success',
          massage: 'Login successful!',
        });
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      } else {
        setAlert({
          showAlert: true,
          severity: 'warning',
          massage: 'Invalid username or password.',
        });
      }
    }
  }, [loginState, formInput, router]);

  return (
    <>
      <AlertMassage
        showAlert={alert.showAlert}
        setShowAlert={(val) => setAlert(prev => ({ ...prev, showAlert: val }))}
        severity={alert.severity as "success" | "warning" | "info"}
        massage={alert.massage}
      />
      <Typography component="section" className="login-page">
        <Box className="login-box">
          <Typography component="h3" variant="h3" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <Typography
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: "10px", display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <InputFiled
              label="Username"
              {...register("username", {
                required: { value: true, message: "Username is required" },
                minLength: { value: 3, message: "Minimum 6 characters" },
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <InputFiled
              label="Password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button type="submit">Submit</Button>
          </Typography>
        </Box>
      </Typography>
    </>
  );
}
