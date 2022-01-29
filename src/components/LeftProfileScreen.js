const LeftProfileScreen = () => {
    return(
        <div className="container left-profile-screen">
            <div className="row">
                <div className="col-10 pt-5">

                    <div className="row mt-5 pl-4">
                        <div className="col-12">
                            <img className="border rounded-circle" style={{width:'7em',height:'7em'}} alt="profileImage" src="images/prime.jpeg" />
                        </div> <br />

                        <div className="col-12 mt-3">
                            <span className="h4 font-weight-bold text-muted-native">
                                Osamede
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftProfileScreen;