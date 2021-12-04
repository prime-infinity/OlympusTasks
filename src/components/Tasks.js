
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <div>
            
            {tasks.map((task) => ( 
                <Task key={task.id} onToggle={onToggle} task={task} onDelete={onDelete} />
            ))}

        </div>
    )
}

export default Tasks