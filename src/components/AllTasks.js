
import { useSelector } from 'react-redux'
import Task from './Task'


const AllTasks = () => {

    const tasks = useSelector((state) => state.task.tasks)

    return(
        
        <div className="row">

            {tasks.map((task,i) => (

                <Task task={task} index={i}  key={i}/>
                
            ))}

        </div>
        
    )
}
export default AllTasks