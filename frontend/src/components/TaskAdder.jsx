import React from 'react'
import { useState } from 'react'

const TaskAdder = ({addTask}) => {
  const [taskName, setTaskName] = useState("")
  const [time, setTime] = useState("")
  return (
    <div id="taskAdder" className="flex flex-column gap-[5px] m-[3%]">
      <input type="text" value={taskName} placeholder="Write task" className="input w-[20vw]" name="task_name" onChange={(e) => setTaskName(e.target.value)}/>
      <input type="datetime-local" value={time} placeholder="Add time" className="input w-[20vw]" name="time" onChange={(e) => setTime(e.target.value.toString())}/>
      <button className="btn btn-secondary add-task w-[20vw]" type="submit" onClick={() => {addTask(taskName, time); setTaskName(""); setTime("") }}>Add task</button>
    </div>
  )
}

export default TaskAdder