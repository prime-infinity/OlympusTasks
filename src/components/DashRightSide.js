
import NameHeader from '../components/NameHeader'
import TaskStast from '../components/TaskStats'
import PinnedTasks from '../components/PinnedTasks'

const DashRightSide = () => {
    return(
        <div className="d-flex flex-column" id="content-wrapper" style={{paddingBottom:'20vh'}}>

            <div id="content">
                <div className="container-fluid p-4">

                    {/*<nav className="navbar navbar-light navbar-expand border mb-4 topbar static-top" style={{marginTop: '1.5rem'}}>
                        <div className="container-fluid">
                            
                            <form className="form-inline d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group"><input type="text" className="form-control border-0 small" placeholder="Search Tasks ..." />
                                
                                </div>
                            </form>

                            <ul className="navbar-nav flex-nowrap ml-auto">
                                <li className="nav-item dropdown d-sm-none no-arrow">
                                    <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto navbar-search w-100">
                                            <div className="input-group"><input type="text" className="bg-light form-control border-0 small" placeholder="Search for ..." />
                                                <div className="input-group-append">
                                                        <button className="btn btn-primary py-0" type="button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="currentColor">
                                                            </path>
                                                            </svg>
                                                        </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    {/*<div className="dropdown-menu dropdown-menu-right show dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center">
                                            <div className="mr-3">
                                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center">
                                            <div className="mr-3">
                                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a>
                                    </div>*
                                </li>
                                <div className="d-none d-sm-block topbar-divider"></div>
                                <li className="nav-item dropdown no-arrow">
                                    <div className="nav-item dropdown no-arrow">
                                        <span className="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span>
                                        <img className="border rounded-circle img-profile" alt="profileImage" src="images/prime.jpeg" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>*/}

                    <NameHeader />

                    <PinnedTasks />

                    <TaskStast />
                    
                </div>
            </div>
                            
        </div>
        
    )
}
export default DashRightSide