import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";
import { useState } from "react";
import data from "../data.json";
import Image from "next/image";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  // const [data, setData] = useState();
  // console.log(data);
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: { md: "wrap" },
          flexDirection: "column",
          height: { md: "2836px", xl: "1497px" },
          gap: { xs: "24px", md: "40px" },
          padding: { xs: "24px" },
        }}
      >
        {data.map((item) => (
          <Box
            sx={{
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              src={`/${item.images.thumbnail}`}
              style={{ width: "100%", height: "100%" }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "15%",
                left: "10%",
              }}
            >
              <Typography variant="h5" sx={{ color: "white" }}>
                {item.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                {item.artist.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
