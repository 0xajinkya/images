import { Box, Grid } from "@mui/material";
import { IAllPhotos, IPhoto } from "../../../context";
import { ImageCard } from "../ImageCard";

export const Images = ({ images }: { images: IPhoto[] }) => {
  return (
    <Box
      sx={{
        display: "grid",
        mb: "20px"
      }}
    >
      <Grid container rowSpacing={6} columnSpacing={2}>
        {images.length > 0 &&
          images.map((img, i) => <ImageCard key={i} image={img} />)}
      </Grid>
    </Box>
  );
};
