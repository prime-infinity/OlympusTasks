import './index.css';
import { Link } from "react-router-dom";

const Index = () => {
    return(
        <div className="container-fluid">
        <div className="row bg-theme">

            <div className="col-12 col-md-6 offset-md-3 my-auto">

                <div className="row">
                    <div className="col-12 text-center">
                        <div className="span h1 font-weight-bold">OLYMPUS TASKS</div>
                    </div>
                </div>

                <img src="images/gods.png" className="img-fluid" alt="theGodsThemselves" />

                <div className="row pt-5 justify-content-center">
                    <div className="col-11 col-md-8  text-center font-weight-bold">
                        <p className="introTextBold pb-3">Let The gods themselves manage your tasks for you</p>
                        <Link to="/home"><button className="btn btn-custom pt-3 pb-3 font-weight-bold">Get Started</button></Link>
                    </div>
                </div>

            </div>
            
        </div>
        </div>
    )
}
export default Index