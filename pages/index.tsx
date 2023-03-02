import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";
import { useState } from "react";
import data from "../data.json";
import Image from "next/image";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function Home() {
  // const [data, setData] = useState();
  console.log(data);
  return (
    <>
      <NavBar />
      <Card>
        {data.map((item) => (
          <Box
            sx={{
              padding: "24px",
              position: "relative",
            }}
          >
            <Image
              src={`/${item.images.thumbnail}`}
              alt="My Image"
              height={250}
              width={100}
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
      </Card>
    </>
  );
}
