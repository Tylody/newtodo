import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";

const uncompletedVars = {
  color: "black",
};

const completedVars = {
  color: "gray",
};

// Label for the task when editing

function TaskLabel({ completedness, input, setInput }) {
  let vars;

  completedness ? (vars = completedVars) : (vars = uncompletedVars);

  return (
    <FormControl variant="standard">
      <Input
        id="simple-controlled"
        sx={vars}
        defaultValue={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></Input>
    </FormControl>
  );
}

export default TaskLabel;
