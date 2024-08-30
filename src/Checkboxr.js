import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Checkboxr({completedness, onClick, display}) {
    if(completedness)
      display="X"
    if(!completedness)
      display=""
    return <Box sx={{ '& button': { m : 0.25 }}}>
        <Button variant="outlined" className="checkbox" onClick={onClick}>{display} </Button>
    </Box>
  }

export default Checkboxr;

// deprecated