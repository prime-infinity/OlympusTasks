import { UserPlaceholder } from './partsofui/Icons'
import { Link } from "react-router-dom";

const LeftProfileScreen = () => {
    return(
        <div className="container left-profile-screen">
            <div className="row">
                <div className="col-8 col-md-6 pt-5">

                    <div className="row mt-5 pl-4 justify-content-center">
                        
                        <div className="col-10 col-md-4">
                            <UserPlaceholder />
                        </div> <br />

                        <div className="text-center col-12 pt-4">

                            <Link className='jsc' to="/"><h3 className="text-theme font-weight-bold">Home</h3></Link>  <br />
                            
                            
                            <div className="sec-center">
                                <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                                <label className="text-theme font-weight-bold h5 text-left" htmlFor="dropdown">For Developers</label>

                                <div className="section-dropdown">
                                    <a className='jsc' href="https://github.com/prime-infinity/OlympusTasks"><h4 className="text-theme font-weight-bold">Github</h4></a>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftProfileScreen;