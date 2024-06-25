import { Box, Icon, IconButton, Typography } from "@mui/material";
import { Back, MainInput, Search } from "../../Global";
import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({
  setQuery,
  query,
}: {
  query?: string;
  setQuery?: Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChange = (key: string, value: string) => {
    setQuery && setQuery(value);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!setQuery && (
          <IconButton
            sx={{
              mr: "12px",
              color: "#271F30",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          >
            <Icon>
              <Back />
            </Icon>
          </IconButton>
        )}
        <Typography
          sx={{
            display: ["none", "flex", "flex"],
            background:
              "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variant={"headLine"}
        >
          IMAGER
        </Typography>
        <Typography
          sx={{
            display: ["flex", "none", "none"],
            background:
              "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variant={"headLine"}
        >
          IM.
        </Typography>
      </Box>
      <Box>
        {setQuery && (
          <MainInput
            placeholder="Search for image"
            fieldName="query"
            icon={<Search />}
            handleChange={handleChange}
            value={query ?? ""}
          />
        )}
      </Box>
    </Box>
  );
};
