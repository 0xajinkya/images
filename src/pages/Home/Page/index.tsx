import { Box, Divider } from "@mui/material";
import { useContext } from "react";
import { Images, Navbar, Paginator } from "../../../components";
import { HomeContext, IAllPhotos } from "../../../context";

export const HomePage = () => {
  const { photos, page, setQuery, prevPage, nextPage } = useContext(HomeContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <Navbar 
        setQuery={setQuery}
      />
      <Divider />
      <Images images={(photos as IAllPhotos).photos} />
      <Paginator 
        meta={(photos as IAllPhotos).meta}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
      />
    </Box>
  );
};
