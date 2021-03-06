
import NameHeader from './NameHeader'
import PinnedAndStats from './PinnedAndStats'

import AllTasks from './AllTasks'
import AddTask from './AddTask'
import LeftProfileScreen from './LeftProfileScreen'
import { useSelector } from 'react-redux'

const DashRightSide = () => {
    const menuState = useSelector((state) => state.menu.value)

    return(
        <>
            {menuState === 2 ? <LeftProfileScreen /> : null}
        
            <div className={`d-flex flex-column ${menuState === 2 ? "mobile-view-profile":""} `} id="content-wrapper" >
                
                <div id="content">
                    <div className="container-fluid p-4 pl-md-0 pr-md-0 pl-lg-5 pr-lg-5" style={{height:'1000px'}}>
                        
                        <div className="row pl-md-2 pr-md-2 pl-lg-5 pr-lg-5 justify-content-center">

                            <div className="col-12 col-md-11">

                                <NameHeader />
                                
                                { 
                                    menuState === 0 ? <PinnedAndStats /> : 
                                    menuState === 1 ? <AllTasks /> :
                                    menuState === 3 ? <AddTask /> :
                                    <PinnedAndStats />
                                }

                            </div>
                        
                        </div>

                        
                    </div>
                </div>
                                
            </div>
        </>
        
    )
}
export default DashRightSide