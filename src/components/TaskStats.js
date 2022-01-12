
const TaskStast = () => {
    return(
        <div className="row justify-content-between">

            <div className="col-12 mb-4 mt-4 mb-4 text-theme">
                <span className="h3 font-weight-bold">Overview</span>
            </div>
            
            <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="card bg-card-theme py-2 text-muted">
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            <div className="col-6">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-8">
                                Done
                            </div>
                            <div className="col-4 text-right text-theme">
                                22
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="card bg-card-theme py-2 text-muted">
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            <div className="col-6">
                                
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-8">
                                Pending
                            </div>
                            <div className="col-4 text-right text-theme">
                                7
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="card bg-card-theme py-2 text-muted">
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            <div className="col-6 ">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>

                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-8">
                                Ongoing
                            </div>
                            <div className="col-4 text-right text-theme">
                                10
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="card bg-card-theme py-2 text-muted">
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            <div className="col-6 ">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>

                            </div>
                        </div>
                    </div>
                    <div className="card-footer ">
                        <div className="row">
                            <div className="col-8">
                                In Review
                            </div>
                            <div className="col-4 text-right text-theme">
                                12
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default TaskStast