import React from "react";
import { Typography } from "@mui/material";

export default function Create() {
  return (
    <div>
      {/* <Typography variant="h1" color="primary" align="center">
        Hello MUI
      </Typography> */}

      {/* <Typography noWrap color="secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography> */}
      <Typography variant="h6" component="h2" gutterBottom color="primary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </Typography>
    </div>
  );
}
