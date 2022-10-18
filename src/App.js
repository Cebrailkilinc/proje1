import { Button } from "@mui/material";
import * as React from 'react';
import { Box } from "@mui/material"
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";


function App() {
  const [degree, setDegree] = useState(1)
  const [color, setColor] = useState("red")


  useEffect(() => {
    if (degree > 15) {
      setColor("red")

    } else {
      setColor("blue")
    }
  }, [degree])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} height="50vh" width="50vh">
        <Box sx={{ textAlign: "center", backgroundColor: `${color}`, display: "flex", justifyContent: "center", alignItems: "center", color: "white", borderRadius:"100%" }} height="25vh" width="25vh">
          <Typography variant="h3" gutterBottom>
            {degree}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", textAlign: "center", textJustify: "center", alignItems: 'center' }} spacing={2} height="25vh" width="25vh">
          <Button onClick={() => { setDegree(degree - 1) }} sx={{ marginRight: "15px" }} variant="outlined">-</Button>
          <Button onClick={() => { setDegree(degree + 1) }}  variant="outlined">+</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
