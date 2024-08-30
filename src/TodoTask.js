import Checkbox from "@mui/material/Checkbox";
import TaskLabel from "./TaskLabel";
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import TaskDescription from "./TaskDescription";
import DeleteTaskButton from "./DeleteTaskButton";
import Button from '@mui/material/Button';

// https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state

function TodoTask({extended, deleteTask, label}) {
    const [completionStatus, setCompletionStatus] = useState(false);

    let taskCss;
    completionStatus ? taskCss="completedTask" : taskCss="uncompletedTask"; 

    const [editing, setEditing] = useState(false);

    const [taskContent, setTaskContent] = useState("");
    const [taskElement, setTaskElement] = useState(<p className={taskCss}>{taskContent}</p>);

    const [detailsContent, setDetailsContent] = useState("");
    const [detailsElement, setDetailsElement] = useState(<p className={taskCss}>{detailsContent}</p>);

    function checkboxClick() {
      setCompletionStatus(!completionStatus);
    }

    function editTask() {
      setEditing(!editing);
    }

    useEffect(() => {
      if(editing) {
        setTaskElement(<TaskLabel completedness={completionStatus} input={taskContent} setInput={setTaskContent} />);
        setDetailsElement(<TaskDescription completedness={completionStatus} extended={extended} input={detailsContent} setInput={setDetailsContent} />);
        return;
      }
      
      if(completionStatus) {
        setTaskContent(taskContent);
        setTaskElement(<p className="completedTask">{taskContent}</p>);
        setDetailsContent(detailsContent);
        setDetailsElement(<p className="completedTask">{detailsContent}</p>);
      }

      if(!completionStatus) {
        setTaskContent(taskContent);
        setTaskElement(<p className="uncompletedTask">{taskContent}</p>);
        setDetailsContent(detailsContent);
        setDetailsElement(<p className="uncompletedTask">{detailsContent}</p>);
      }

      if(!extended) {
        setDetailsElement(<></>);
      }

    }, [editing, completionStatus, extended]);

    return (
        <Stack direction="row" justifyContent="center" className="task" spacing={2} >
          <br></br>
          <div>
            <Checkbox checked={completionStatus} onChange={checkboxClick} />
          </div>
          {taskElement}
          {detailsElement}
          <DeleteTaskButton handleClick={deleteTask}> </DeleteTaskButton>
          <Button onClick={editTask} />
          <p>{label}</p>
          <br></br>
        </Stack>
    );
}
// <DeleteTaskButton handleClick={deleteTask} index={index} />
 
export default TodoTask;