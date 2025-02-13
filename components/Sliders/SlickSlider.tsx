import { Box, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

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

export default function SlickSlider() {
const [slideImage, setSlideImage] = useState<any>([])
useEffect(()=>{
  setSlideImage(['Image1', 'Image 2', 'Image 3', 'Image 4'])
}, [])
// Blob {size: SIZE, type: 'image/png'}

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
    <Box sx={{ position: "relative", '& .slick-list':{maxWidth: 'calc(100% - 90px)', margin: 'auto'} }} >
      <Slider {...settings}>
        {slideImage && slideImage.map((item:any, index:any) => (
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
            <Typography component="h3" variant="h3">
              {item}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
