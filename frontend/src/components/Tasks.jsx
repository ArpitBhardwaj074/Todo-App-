import { useState } from 'react'
import TaskAdder from './TaskAdder.jsx'
import  Task from './Task.jsx'
import DateTime from './DateTime.jsx'
const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const removeTask = (key) => {
        setTasks(prev => prev.filter(item => item.time != key))
    }
    const addTask = (taskName, time) => {
        for(let i of tasks){
            if(i.time === time) return
        }
        setTasks([...tasks, {
            taskName: taskName,
            time: time
        }])
    }
    return (
        <div className="w-fit h-fit m-[auto]">
            <DateTime />
            <TaskAdder addTask={addTask}/>
            {
                tasks.map(({taskName, time}) => {
                   return (
                    <Task taskName={taskName} time={time} onDone={removeTask} key={time}/>
                   ) 
                })
            }
        </div>
    )
}
export default Tasks