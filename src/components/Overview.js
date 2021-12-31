const Overview = () => {
    return(
        <div className="row">
            <div className="col-12">
                <div className="row justify-content-between">
                    <div className="col-6 border text-center pt-5 pb-5 mb-2">
                        <div>
                            <span className="h3 font-weight-bold">22</span> <br />
                            <span>Done</span>
                        </div>
                    </div>

                    <div className="col-5 border text-center pt-5 pb-5 mb-5">
                        <div>
                            <span className="h3 font-weight-bold">7</span> <br />
                            <span>In progress</span>
                        </div>
                    </div>

                    <div className="col-6 border text-center pt-5 pb-5">
                        <div>
                            <span className="h3 font-weight-bold">10</span> <br />
                            <span>Ongoing</span>
                        </div>
                    </div>

                    <div className="col-5 border text-center pt-5 pb-5">
                        <div>
                            <span className="h3 font-weight-bold">12</span> <br />
                            <span>Pending</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Overview