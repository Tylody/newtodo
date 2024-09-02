import { useState } from 'react';
import TaskLabel from './TaskLabel';
import TaskDescription from './TaskDescription';
import DeleteTaskButton from './DeleteTaskButton';
import EditTaskButton from './EditTaskButton';
import { Checkbox, Stack } from '@mui/material';

function TaskEntry({task, modifyTask, deleteTask, extended}) {
    
    const [editing, setEditing] = useState(false); 

    const [hovering, setHovering] = useState(false);

    let taskCss;
    task.completed ? taskCss = 'completedTask' : taskCss='uncompletedTask'

    let descCss;
    task.completed ? descCss = 'completedDesc' : descCss='uncompletedDesc';

    const [taskLabel, setTaskLabel] = useState(task.label);

    const [taskDescription, setTaskDescription] = useState(task.description);

    const editingLabel = <TaskLabel completedness={task.completed} input={task.label} setInput={setTaskLabel} />

    let labelElement;
    editing ? labelElement = editingLabel : labelElement= <p className={taskCss}>{task.label}</p>;

    const editingDescription = <TaskDescription completedness={task.completed} extended={extended} input={task.description} setInput={setTaskDescription} />;

    let descriptionElement;
    editing ? descriptionElement = editingDescription : descriptionElement = <p className={descCss}>{task.description}</p>;

    if(!extended) descriptionElement = <br></br>;

    function checkboxClick() {
        let id = task.id;
        let label = task.label;
        let description = task.description;
        let completed = task.completed;
        completed = !completed;
        modifyTask({id, label, description, completed});
    }

    function finishEditing(newLabel, newDescription) {

        if(!editing) {
            setEditing(true)
            return;
        }

        let id = task.id;
        let label = newLabel;
        let description = newDescription;
        let completed = task.completed;

        setEditing(false);
        modifyTask({id, label, description, completed});
    }

    let editingButton;
    hovering ? editingButton = <EditTaskButton handleClick={(e) => {finishEditing(taskLabel, taskDescription)}} editing={editing} /> : editingButton = <br />;

    let deleteButton;
    hovering ? deleteButton = <DeleteTaskButton handleClick={(e) => {deleteTask(e, task.id)}} /> : deleteButton = <br />;

    return (
        <Stack direction="row" justifyContent="left" className="task" spacing={2} onMouseEnter={() => {setHovering(true)}} onMouseLeave={() => {setHovering(false)}} >
            <br></br>
            <div><Checkbox checked={task.completed} onChange={checkboxClick} /></div>
            {labelElement}
            {descriptionElement}
            {editingButton}
            {deleteButton}
        </Stack>
    );
}

export default TaskEntry;