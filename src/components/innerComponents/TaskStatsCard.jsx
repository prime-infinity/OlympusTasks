import { PendingIcon,OngoingIcon,InReviewIcon,DoneIcon } from '../partsofui/Icons'
import EmptyCard from './EmptyCard'
import Task from '../Task'

function TaskStatsCard({ i, tasks,cardStateChange, setCardStateSet,filteredTasks }) {
    
    const pendingTasks = tasks.filter((task) => task.cat === 0)
    const onGoingTasks = tasks.filter((task) => task.cat === 1)
    const inReviewTasks = tasks.filter((task) => task.cat === 2)
    const doneTasks = tasks.filter((task) => task.cat === 3)

    const divWithFiltered = (
        tasks.length === 0 ? <EmptyCard /> : filteredTasks.map((task,i) => (
            <Task task={task} index={i}  key={i}/>
        ))
    )

    return (
        <div className={`col-6 col-md-6 col-lg-3 mb-4 ${cardStateChange === -1 &&  "cursor-pointer" } `}>
            <div onClick={()=>setCardStateSet(i)} className={` card py-2 text-muted ${cardStateChange === i ? "cardFixed bg-card-untheme" : "bg-card-theme"}`}>
                <div className="card-body pt-5 pb-5">
                    <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                        {cardStateChange === -1 ?
                        <div className="col-6 ">

                            {i ===0 ? <PendingIcon w={0} h={0} />:
                            i ===1 ? <OngoingIcon w={0} h={0} />:
                            i ===2 ? <InReviewIcon w={0} h={0} />:
                            i ===3 ? <DoneIcon w={0} h={0} />:
                            null
                            }

                        </div>:divWithFiltered}
                    </div>
                </div>
                <div className={`card-footer text-muted ${cardStateChange !== -1 && "card-footer-fixed"} `}>
                    <div className="row">
                        <div className="col-12">
                            {i ===0 ? "Pending":
                            i ===1 ? "Ongoing":
                            i ===2 ? "In Review":
                            i ===3 ? "Done":
                            null}
                        </div>
                        
                        <div className="col-6 text-right text-theme abs-right">
                            {i ===0 ? pendingTasks.length:
                            i ===1 ? onGoingTasks.length:
                            i ===2 ? inReviewTasks.length:
                            i ===3 ? doneTasks.length:
                            null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskStatsCard;