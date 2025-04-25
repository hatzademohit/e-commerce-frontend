import { Box, Typography, IconButton, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";

// Custom Previous Button
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        "&:hover": { backgroundColor: "black" },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

// Custom Next Button
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        "&:hover": { backgroundColor: "black" },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

export interface SlickSliderProps{
  sliderData?: [];
}

const SlickSlider:React.FC<SlickSliderProps> = ({sliderData}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ position: "relative", '& .slick-list':{maxWidth: 'calc(100% - 90px)', margin: 'auto', mt: '20px'} }} >
        <Slider {...settings}>
          {sliderData && sliderData.map((item:any, index:any) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                padding: 2,
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                margin: 1,
              }}
            >
              <Image src={'/imgs/' + item.img} alt="img not found" width={300} height={200} />
              <Typography component="h4" variant="h4">
                {item.imgName}
              </Typography>
              <Typography>
                {item.imgDesc}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default SlickSlider;
