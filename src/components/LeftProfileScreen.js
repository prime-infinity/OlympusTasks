import { userPlaceholder } from "./partsofui/icons";

const LeftProfileScreen = () => {
    return(
        <div className="container left-profile-screen">
            <div className="row">
                <div className="col-10 pt-5">

                    <div className="row mt-5 pl-4">
                        
                        <div className="col-4 col-md-2">
                            {userPlaceholder}
                        </div> <br />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftProfileScreen;