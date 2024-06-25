import { Box, Pagination } from "@mui/material";
import { IMeta } from "../../../context";
import { Dispatch } from "react";

export const Paginator = ({
  page,
  meta,
  setPage,
}: {
  page: number;
  meta: IMeta;
  setPage: Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: "20px",
      }}
    >
      {meta && (
        <Pagination
          count={meta.pages}
          onChange={(e, val) => setPage(val)}
          page={page}
          hidePrevButton
          hideNextButton
        />
      )}
    </Box>
  );
};
