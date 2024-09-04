import { Box, IconButton, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { CheckSharp } from "@mui/icons-material";

// Button that changes icon when clicked

function EditTaskButton({ handleClick, editing }) {
  let icon;
  editing ? (icon = <CheckSharp />) : (icon = <Edit />);

  let tooltipText;
  editing ? (tooltipText = "Done") : (tooltipText = "Edit");

  return (
    <Box sx={{ "& button": { m: 0 } }}>
      <Tooltip title={tooltipText} placement="top-end">
        <IconButton aria-label="edit" onClick={handleClick}>
          {icon}
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default EditTaskButton;
