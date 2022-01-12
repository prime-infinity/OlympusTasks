import DashSideBar from '../components/DashSideBar'
import DashRightSide from '../components/DashRightSide'
import Footer from '../components/Footer'
import  { Breakpoint } from 'react-socks';

const Home = () => {
    return(
        <div className="dash-wrapper">

            <Breakpoint medium up>
                <DashSideBar />
            </Breakpoint>
            
            <DashRightSide />
            
            <Breakpoint small down>
                <Footer />
            </Breakpoint>
            
        </div>
        
    )
}
export default Home