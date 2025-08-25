const Task = ({taskName, time, onDone}) => {
    return (
        
            <div className="flex flex-column gap-[5px] m-[3%]">
                <span className="w-[20vw] text-center">{taskName}</span>
                <span className="w-[20vw] text-center">{time}</span>
                <button className="btn btn-success add-task w-[20vw]" type="submit" onClick={() => onDone(time)}>Mark as Done</button>
            </div>
    )
}
export default Task    