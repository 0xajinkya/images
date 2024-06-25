import { Box, Divider, Typography } from "@mui/material";
import { Navbar } from "../../../components";
import { useEffect, useState } from "react";
import { IPhoto } from "../../../context";

export const DetailPage = () => {
  const [image, setImage] = useState<IPhoto | null>();

  useEffect(() => {
    const getLocalImage = () => {
      const img = localStorage.getItem("currentImage");
      if (!img) return;
      setImage(JSON.parse(img));
    };
    getLocalImage();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        height: "100%",
      }}
    >
      <Navbar />
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: ["100%", "80%"],
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: ["40vh", "60vh"],
            position: "relative",
          }}
        >
          <img
            src={image?.url}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <Typography variant={"headLine"}>{image?.alt}</Typography>
          <Typography variant={"normal"}>{image?.description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
