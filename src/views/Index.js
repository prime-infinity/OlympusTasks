import './index.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { saveAppStateToLocal } from '../redux/appSlice';


const Index = () => {

    function r(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const dispatch = useDispatch()

    return(
        <div className="container-fluid">
        <div className="row bg-theme">

            <div className="col-12 col-md-6 offset-md-3 my-auto">

                <div className="row">
                    <div className="col-12 text-center">
                        <div className="span h1 font-weight-bold">OLYMPUS TASKS</div>
                    </div>
                </div>

                <img src={`images/zeus${r(1,2,3)}.png`} className="img-fluid" alt="theGodsThemselves" />

                <div className="row pt-5 justify-content-center">
                    <div className="col-11 col-md-8  text-center font-weight-bold">
                        <p className="introTextBold pb-3">Manage your Tasks <br /> Like a <span className="tc2">God!</span>  </p>
                        <Link to="/home"><button onClick={()=>dispatch(saveAppStateToLocal(1))} className="btn btn-custom pt-3 pb-3 font-weight-bold">Get Started</button></Link>
                    </div>
                </div>

            </div>
            
        </div>
        </div>
    )
}
export default Index