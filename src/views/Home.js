import DashSideBar from '../components/DashSideBar'
import DashRightSide from '../components/DashRightSide'
import Footer from '../components/Footer'

const Home = () => {
    return(
        <div className="dash-wrapper">

            <DashSideBar />
            <DashRightSide />
            <Footer />
            
        </div>
        
    )
}
export default Home