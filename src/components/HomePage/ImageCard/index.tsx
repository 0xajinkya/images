import { Box, Grid, Typography } from "@mui/material"
import { IPhoto } from "../../../context"

export const ImageCard = ({image}: {image: IPhoto}) => {
    return (
        <Grid key={image.id} item xs={12} sm={6} md={4}>
            <Box
                sx={{
                    backgroundColor: "#D2D2D2",
                    height: "350px",
                    position: "relative"
                }}
            >
            <img 
                src={image.url}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ensures the image covers the Box
                  }}
            />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    mt: "6px"
                }}
            >
            <Typography
                variant={"semiBold"}
                sx={{
                    textTransform: "capitalize"
                }}
            >
                {image.alt}
            </Typography>
            <Typography
                variant={"normal"}
            >
                {image.description}
            </Typography>
            </Box>
        </Grid>
    )
}