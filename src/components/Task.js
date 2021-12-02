const Task = ({task,onDelete}) => {
    return (
        <div> 
            <h3>{task.text} <button onClick={() => onDelete(task.id)} className="btn btn-danger">X</button> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task