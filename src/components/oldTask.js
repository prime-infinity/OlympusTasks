const Task = ({task,onDelete, onToggle}) => {
    return (
        <div className={`border mt-4 ${task.reminder ? 'bg-primary' : ''}`} onClick={() => onToggle(task.id)}> 
            <h3>{task.text} <button onClick={() => onDelete(task.id)} className="btn btn-danger">X</button> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task