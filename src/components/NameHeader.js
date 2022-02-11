import { useSelector } from 'react-redux'
import { UserPlaceholder } from "./partsofui/Icons";

const NameHeader = () => {
    const tasks = useSelector((state) => state.task.tasks)
    const pendingTasks = tasks.filter((task) => task.cat === 0).length

    return(
        <div className="row mb-5 mt-5">
            <div className="col-9 my-auto offset-md-2 text-md-right">
                <span className="h4 text-theme">Greetings my liege</span> <br />
                <span className="text-muted-native">You have {pendingTasks} tasks Pending</span>
            </div>
            <div className="col-3 col-md-1">
                <UserPlaceholder />
            </div>
        </div>
    )
}

export default NameHeader