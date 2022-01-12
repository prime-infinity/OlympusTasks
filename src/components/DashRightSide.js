
import NameHeader from './NameHeader'
import PinnedAndStats from './PinnedAndStats'

import AllTasks from './AllTasks'
import AddTask from './AddTask'
import { useSelector } from 'react-redux'

const DashRightSide = () => {
    const menuState = useSelector((state) => state.menu.value)

    return(
        <div className="d-flex flex-column" id="content-wrapper" style={{paddingBottom:'100vh'}} >

            <div id="content">
                <div className="container-fluid p-4">
                    
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-11">

                            <NameHeader />
                            
                            { 
                                menuState === 0 ? <PinnedAndStats /> : 
                                menuState === 1 ? <AllTasks /> :
                                menuState === 3 ? <AddTask /> :
                                null
                            }

                        </div>
                     
                    </div>

                    
                </div>
            </div>
                            
        </div>
        
    )
}
export default DashRightSide