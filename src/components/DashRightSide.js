
import NameHeader from '../components/NameHeader'
import TaskStast from '../components/TaskStats'
import PinnedTasks from '../components/PinnedTasks'

const DashRightSide = () => {
    return(
        <div className="d-flex flex-column" id="content-wrapper" style={{paddingBottom:'20vh'}}>

            <div id="content">
                <div className="container-fluid p-4">
                    
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-11">

                            <NameHeader />
                            
                            <PinnedTasks />

                            <TaskStast />

                        </div>
                     
                    </div>

                    
                </div>
            </div>
                            
        </div>
        
    )
}
export default DashRightSide