import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function CreateNewTaskButton({handleClick}) {
    
    return <Box sx={{ '& button': { m : 1 }}}>
        <Button variant="contained" size="medium" onClick={handleClick}>+</Button>
    </Box>
}

export default CreateNewTaskButton;