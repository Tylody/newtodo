import { IconButton, Box, Tooltip, PopOver } from "@mui/material";
import { Info } from "@mui/icons-material";
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function InfoButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Tooltip title="About" placement="top">
            <IconButton aria-describedby="id" onClick={handleClick}>
                <Info />
            </IconButton>
        </Tooltip>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>TYL-TODO explained: A todo-list that allows you to flesh out the complexity of a task, but also to view a more condensed view for big-picture understanding. This is done by showing and hiding the task description via the click of a button. Simple and practical.</Typography>
        </Popover>
      </div>
    );
}

export default InfoButton;