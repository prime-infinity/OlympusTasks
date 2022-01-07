const PinnedTasks = () => {
    return (
        <div className="row flex-row flex-nowrap pb-4 pt-4 pt-md-5 pb-md-5 no-scroll-bar overflow-x-auto">

            <div className="col-5 col-md-3 mb-4 mt-4 text-theme my-auto">
                <span className="font-weight-bold" style={{fontSize:'larger'}}>
                    Pinned Tasks
                    <i className="typcn typcn-arrow-right-thick"></i>
                </span>
                
            </div>  

            <div className="col-10 col-md-6 text-break">
                <div className="card bg-card-theme py-2">
                    <div className="card-body pt-5 pb-5">
                        <div className="row text-left">
                            <div className="col mr-2">
                                <div className=" font-weight-bold  mb-1"><span>Do Something else</span></div>
                                <div className=""><span>11-21-20</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-10 col-md-6 text-break">
                <div className="card bg-card-theme py-2">
                    <div className="card-body pt-5 pb-5">
                        <div className="row text-left">
                            <div className="col mr-2">
                                <div className=" font-weight-bold  mb-1"><span>Do Something else</span></div>
                                <div className=""><span>11-21-20</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-10 col-md-6 text-break">
                <div className="card bg-card-theme py-2">
                    <div className="card-body pt-5 pb-5">
                        <div className="row text-left">
                            <div className="col mr-2">
                                <div className=" font-weight-bold  mb-1"><span>Do Something else</span></div>
                                <div className=""><span>11-21-20</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}
export default PinnedTasks