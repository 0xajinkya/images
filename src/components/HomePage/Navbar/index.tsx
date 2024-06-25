import { Box, Typography } from "@mui/material";
import { MainInput, Search } from "../../Global";
import { Dispatch, useContext } from "react";
import { HomeContext } from "../../../context";

export const Navbar = ({setQuery}: {setQuery: Dispatch<React.SetStateAction<string>>}) => {

  const handleChange = (key: string, value: string) => {
    setQuery(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          background:
            "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        variant={"headLine"}
      >
        IMAGER
      </Typography>
      <Box>
        <MainInput
          placeholder="Search for image"
          fieldName="query"
          icon={<Search />}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};
