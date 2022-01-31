
import { useSelector } from 'react-redux'
import Task from './Task'
import { useDispatch } from 'react-redux'
import { setMenu } from '../redux/menuSlice'

const AllTasks = () => {

    const tasks = useSelector((state) => state.task.tasks)
    const dispatch = useDispatch()

    const card = <div className="col-12 text-break">
                    <div className="card bg-card-theme py-2">
                        <div className="card-body pt-5 pb-5">
                            <div className="row">
                                <div className="col text-center">

                                    <div className=" font-weight-bold  mb-1 h3 text-muted-native"><span>No tasks yet</span></div>
                                    
                                    <div className="row justify-content-center mt-4">
                                        <div className="col-6">
                                            <button onClick={() => dispatch(setMenu(3))} className="btn btn-custom pt-3 pb-3 font-weight-bold">Add</button>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

    return(
        
        <div className="row">

            {tasks.length === 0 ? card : tasks.map((task,i) => (

                <Task task={task} index={i}  key={i}/>
                
            ))}

        </div>
        
    )
}
export default AllTasks