import TodoTask from "./TodoTask";
import { useState } from "react";
import CreateNewTaskButton from "./CreateNewTaskButton";
import Button from '@mui/material/Button';

// https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state

function TaskContainer({extended}) {
    const sampleTask = [0];

    const [tasks, setTasks] = useState(sampleTask);
    const [taskId, setTaskId] = useState(1);

    function addTask() {
        setTasks([
            ...tasks,
            taskId
        ]);
        setTaskId(taskId +1);
    }

    function deleteTask(event, id) {
        console.log(id);
        setTasks(
            tasks.filter(t => t !== id)
        );
    }

    return (
        <>
            {tasks.map((task) => <TodoTask extended={extended} deleteTask={event => deleteTask(event, task)} label={task} />)}
            <CreateNewTaskButton handleClick={addTask} />
        </>
    );
}

export default TaskContainer;