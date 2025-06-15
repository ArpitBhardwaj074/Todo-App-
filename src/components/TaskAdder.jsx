import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './Task.jsx'
import { useState } from 'react';

const TaskAdder = ()=>{
    const [tasks,setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [time, setTime] = useState(new Date().toLocaleDateString());

    const addTaskName = (event)=>{
        setTaskName(event.target.value)
    }
    const addTime = (event)=>{
        setTime(event.target.value.toLocaleString())
    }
    const handleAdd = ()=>{
        setTasks([...tasks,<Task taskName={taskName} time={time} key={taskName} handleDone={handleDone}/>])
        console.log(tasks);
    }
    const handleDone = (key)=>{
        setTasks(tasks.filter(task => task.key != key))
    }
    return (
        <>
            <div className="taskAdder container">
                <div className="row">
                    <div className="col"><input type="text" placeholder='Enter your task' name='task' onChange={addTaskName}/></div>
                    <div className="col"><input type="datetime-local" name="time" id=""  onChange={addTime}/></div>
                    <button className="col btn btn-success" onClick={handleAdd}>Add task</button>
                </div>
            </div>
            {tasks}
        </>
    )
}

export default TaskAdder