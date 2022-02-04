
import { useSelector } from 'react-redux'
import Task from './Task'
import EmptyCard from './innerComponents/EmptyCard'

const AllTasks = () => {

    const tasks = useSelector((state) => state.task.tasks)
    

    return(
        
        <div className="row">

            {tasks.length === 0 ? <EmptyCard /> : tasks.map((task,i) => (

                <Task task={task} index={i}  key={i}/>
                
            ))}

        </div>
        
    )
}
export default AllTasks