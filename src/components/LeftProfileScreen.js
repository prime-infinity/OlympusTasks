import { userPlaceholder } from "./partsofui/icons";
import { Link } from "react-router-dom";

const LeftProfileScreen = () => {
    return(
        <div className="container left-profile-screen">
            <div className="row">
                <div className="col-5 pt-5">

                    <div className="row mt-5 pl-4 justify-content-center">
                        
                        <div className="col-10 col-md-2">
                            {userPlaceholder}
                        </div> <br />

                        <div className="text-center col-12 pt-4">

                            <Link to="/"><h3 className="text-theme font-weight-bold">Home</h3></Link>  <br />


                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftProfileScreen;