
const DashSideBar = () => {
    return(
        <div>

            <nav className="navbar d-none d-md-block navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{height:'1500px'}}>
                <div className="container-fluid d-flex flex-column p-0">
                    <ul className="navbar-nav text-light ul-fixed" id="accordionSidebar">
                        <li className="nav-item pb-5 mobile-bottom-nav__item-content"><svg className="footer-icon-selected" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{fontSize: '35px'}}>
                            <path d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z" fill="currentColor"></path>
                            </svg>
                        </li>
                        <li className="nav-item pb-5 mobile-bottom-nav__item-content"><i className="typcn typcn-th-large" style={{fontSize: '35px'}}></i></li>
                        <li className="nav-item pb-5 mobile-bottom-nav__item-content"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{fontSize: '35px'}}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9ZM3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="currentColor"></path>
                            </svg>
                        </li>
                        <li className="nav-item pb-5 mobile-bottom-nav__item-content"><i className="typcn typcn-plus" style={{fontSize: '35px'}}></i></li>
                    </ul>
                </div>
            </nav>
            
        </div>
        
    )
}
export default DashSideBar