import PinnedTasks from '../components/PinnedTasks'
import Overview from '../components/Overview'
import NameHeader from '../components/NameHeader'
import PendingTasks from '../components/PendingTasks'
import Footer from '../components/Footer'

const Home = () => {
    return(
        <div className="row">

            <div className="col-11 col-md-12">

                <div className="container bg-primary d-md-none">
                    <NameHeader />
                </div>

                <div className="container bg-secondary d-none d-md-block">
                    <NameHeader />
                </div>

                <div className="container">
                    <PendingTasks />
                </div>
                
                <div className="container">
                    <PinnedTasks />
                </div>

                <div className="container">
                    <Overview />
                </div>

            </div>
            < Footer />
        </div>
        
    )
}
export default Home