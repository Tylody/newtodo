import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

const uncompletedVars = {
    color: 'black',
}

const completedVars = {
    color: 'gray',
}

const unextendedVars = {
    display: 'none',
}

function TaskDescription({completedness, extended, input, setInput}) {
    let vars;

    if(completedness && extended)
        vars = completedVars;
    
    if(!completedness && extended) 
        vars = uncompletedVars;

    if(!extended)
        vars = unextendedVars;

    return <FormControl variant="standard">
        <Input id="simple-controlled" sx={vars} defaultValue={input} multiline onChange={(event) => { setInput(event.target.value ) }}></Input>
    </FormControl>
}

export default TaskDescription;