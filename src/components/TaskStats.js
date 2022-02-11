import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TaskStatsCard from './innerComponents/TaskStatsCard'


const TaskStast = () => {
    const tasks = useSelector((state) => state.task.tasks)


    const [cardStateChange, setCardState] = useState(-1)
    const [filteredTasks,setFilteredTasks] = useState([])

    
    const closeCard = ()=> {
        setCardState(-1)
    }

    const setCardStateSet = (e)=> {
        setCardState(e)
    }

    useEffect(()=> {
        setFilteredTasks(cardStateChange === -1 ? []:
        cardStateChange === 0 ? tasks.filter((task) => task.cat === 0):
        cardStateChange === 1 ? tasks.filter((task) => task.cat === 1):
        cardStateChange === 2?tasks.filter((task) => task.cat === 2):
        cardStateChange===3?tasks.filter((task) => task.cat === 3):
        [])
    },[cardStateChange,tasks])

    const closeCardDiv = (
    <div onClick={closeCard} className="close-card col-2 col-md-1">
            {/**this is the icon to close card when it has been cliked */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-theme" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
    </div>
    )

    return(
        <div className="row pb-5 justify-content-between">

            <div className="col-12 mb-4 mt-4 mb-4 text-theme">
                <span className="h4">Overview</span>
            </div>

            {[0,1,2,3].map((i) => (
                <TaskStatsCard key={i} i={i} tasks={tasks} cardStateChange={cardStateChange} setCardStateSet={ setCardStateSet } filteredTasks={ filteredTasks } />
            ))}

            {cardStateChange !== -1 ? closeCardDiv:null}
            
        </div>
        
    )
}
export default TaskStast