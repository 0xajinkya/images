import { Box, Divider } from "@mui/material";
import { useContext } from "react";
import { Images, Navbar, Paginator } from "../../../components";
import { HomeContext, IAllPhotos } from "../../../context";

export const HomePage = () => {
  const { photos, page, setQuery, setPage, query } = useContext(HomeContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <Navbar setQuery={setQuery} query={query} />
      <Divider />
      <Images images={(photos as IAllPhotos).photos} />
      <Paginator
        meta={(photos as IAllPhotos).meta}
        setPage={setPage}
        page={page}
      />
    </Box>
  );
};
