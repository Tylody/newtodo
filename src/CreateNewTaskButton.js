import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

function CreateNewTaskButton({ handleClick }) {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Tooltip title="Add new task" placement="bottom">
        <Button variant="contained" size="medium" onClick={handleClick}>
          +
        </Button>
      </Tooltip>
    </Box>
  );
}

export default CreateNewTaskButton;
