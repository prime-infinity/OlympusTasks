
const TaskStast = () => {
    return(
        <div className="row">

            <div className="col-12 mb-4 mt-4 mb-4 text-theme">
                <span className="h3">Overview</span>
            </div>
            
            <div className="col-6 col-md-6 col-xl-3 mb-4">
                <div className="card bg-card-theme py-2">
                    <div className="card-body pt-5 pb-5">
                        <div className="row text-center">
                            <div className="col mr-2">
                                <div className=" font-weight-bold h1 mb-1"><span>22</span></div>
                                <div className=""><span>Done</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-6 col-xl-3 mb-4">
                <div className="card bg-card-theme py-2">
                    <div className="card-body">
                        <div className="row text-center ">
                            <div className="col mr-2">
                                <div className=" font-weight-bold h1 mb-1"><span>7</span></div>
                                <div className=""><span>Pending</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-6 col-xl-3 mb-4 my-auto">
                <div className="card bg-card-theme py-2">
                    <div className="card-body">
                        <div className="row text-center ">
                            <div className="col mr-2">
                                <div className=" font-weight-bold h1 mb-1"><span>10</span></div>
                                <div className=""><span>Ongoing</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-6 col-xl-3 mb-4">
                <div className="card bg-card-theme py-2">
                    <div className="card-body pt-5 pb-5">
                        <div className="row text-center ">
                            <div className="col mr-2">
                                <div className=" font-weight-bold h1 mb-1"><span>12</span></div>
                                <div className=""><span>In Review</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default TaskStast