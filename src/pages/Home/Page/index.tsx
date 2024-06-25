import { Box, Divider } from "@mui/material";
import { useContext } from "react";
import { Images, Navbar } from "../../../components";
import { HomeContext, IAllPhotos } from "../../../context";

export const HomePage = () => {
  const { photos } = useContext(HomeContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <Navbar />
      <Divider />
      <Images images={(photos as IAllPhotos).photos} />
      
    </Box>
  );
};
