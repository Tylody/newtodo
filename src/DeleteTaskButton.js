import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteTaskButton({handleClick, index}) {

    return <Box sx={{ '& button': { m : 0 }}}> 
        <IconButton aria-label="delete" onClick={handleClick}>
            <DeleteIcon />
        </IconButton>
    </Box>
}


export default DeleteTaskButton;