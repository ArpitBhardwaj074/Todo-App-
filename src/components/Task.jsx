import 'bootstrap/dist/css/bootstrap.min.css'

const Task = ({taskName,time,handleDone,key})=>{
    return (
        <>
            <div className="container task">
                <div className="row">
                    <div className="col">{taskName}</div>
                    <div className="col">{time}</div>
                    <div className="col"><button className="btn btn-primary" onClick={()=>{
                        handleDone({key})
                    }}>Mark done</button></div>
                </div>
            </div>
        </>
    )
}

export default Task