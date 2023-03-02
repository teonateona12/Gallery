import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
// import { Typography, TypographyProps } from '@material-ui/core';
import { Typography } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <Image
          src="/assets/shared/logo.svg"
          alt="My Image"
          width={113}
          height={32}
        />
        <Typography variant="body1">START SLIDESHOW</Typography>
      </Box>
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#E5E5E5",
        }}
      ></Box>
    </>
  );
}
