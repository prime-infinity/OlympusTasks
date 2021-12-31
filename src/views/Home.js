import PinnedTasks from '../components/PinnedTasks'
import Overview from '../components/Overview'

const Home = () => {
    return(
        <div className="row justify-content-center">

            <div className="col-11">

                <div className="container">

                    <div className="row border mt-5 mb-5">
                        <div className="col-9">
                            ss
                        </div>
                        <div className="col-3">
                            <img src="images/prime.jpeg" className="img-fluid rounded-circle" alt="prime" />
                        </div>
                    </div>

                </div>

                <div className="container">
                    <div className="row mb-5">
                        <div className="col-6">
                            <span className="h3 font-weight-bold">Hi Prime</span> <br />
                            <span>6 tasks are pending</span>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <PinnedTasks />
                </div>

                <div className="container">
                    <Overview />
                </div>

            </div>

        </div>
    )
}
export default Home