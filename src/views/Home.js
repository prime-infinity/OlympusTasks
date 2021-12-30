import PinnedTasks from '../components/PinnedTasks'

const Home = () => {
    return(
        <div className="row justify-content-center">

            <div className="col-11">

                <div className="row border mt-5">
                    <div className="col-9">
                        ss
                    </div>
                    <div className="col-3">
                        <img src="images/prime.jpeg" className="img-fluid rounded-circle" alt="prime" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <span className="h3 font-weight-bold">Hi Prime</span> <br />
                        <span>6 tasks are pending</span>
                    </div>
                </div>

                <PinnedTasks />

            </div>

            <nav className="mobile-bottom-nav d-md-none">

                <div className="mobile-bottom-nav__item">
                    <div className="mobile-bottom-nav__item-content">
                    <i className="material-icons" style={{fontSize: "40px"}}>home</i>
                    <br /> 
                    </div>		
                </div>

                <div className="mobile-bottom-nav__item">
                    <div className="mobile-bottom-nav__item-content">
                    <i className="material-icons" style={{fontSize: "40px"}}>import_export</i>
                    <br />
                    </div>		
                </div>

                <div className="mobile-bottom-nav__item">
                    <div className="mobile-bottom-nav__item-content">
                    <i className="material-icons" style={{fontSize: "40px"}}>hexagon</i>
                    <br /> 
                    </div>		
                </div>

            </nav>
            
        </div>
    )
}
export default Home