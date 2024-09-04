import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

function DeleteTaskButton({ handleClick, index }) {
  return (
    <Box sx={{ "& button": { m: 0 } }}>
      <Tooltip title="Delete" placement="top-end">
        <IconButton aria-label="delete" onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default DeleteTaskButton;
