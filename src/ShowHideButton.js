import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

// Button to extend & retract task descriptions

function ShowHideButton({ showDescriptions, setShowDescriptions }) {
  const [text, setText] = useState("HIDE");

  function handleClick() {
    setShowDescriptions(!showDescriptions);
    showDescriptions ? setText("SHOW") : setText("HIDE");
  }

  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Button variant="contained" size="medium" onClick={handleClick}>
        {text}
      </Button>
    </Box>
  );
}

export default ShowHideButton;
