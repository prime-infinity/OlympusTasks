const PinnedTasks = () => {
    return (
        <div className="row">

            <div className="col-12">
                <span className="h4">Pinned Tasks</span>
                
                <div className="row flex-row flex-nowrap pb-4 pt-4 no-scroll-bar overflow-x-auto">

                    <div className="col-8 border bg-secondary-native text-break pt-3 pb-3 ml-4 mr-4">
                        <div className="row justify-content-center">
                            <div className="col-11">
                                <span className="font-weight-bold ">
                                    Do Something else
                                </span> <br />
                                <span>11-21-20</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 border bg-secondary-native text-break pt-3 pb-3 mr-4">
                        <div className="row justify-content-center">
                            <div className="col-11">
                                <span className="font-weight-bold ">
                                    Do Something else
                                </span> <br />
                                <span>11-21-20</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 border bg-secondary-native text-break pt-3 pb-3 mr-4">
                        <div className="row justify-content-center">
                            <div className="col-11">
                                <span className="font-weight-bold ">
                                    Do Something else
                                </span> <br />
                                <span>11-21-20</span>
                            </div>
                        </div>
                    </div>
    
                </div>

            </div>
            
        </div>
    )
}
export default PinnedTasks