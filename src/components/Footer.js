import { useDispatch } from 'react-redux'
import { setMenu } from '../redux/menuSlice'

import { useSelector } from 'react-redux'

const Footer = () => {

    const menuState = useSelector((state) => state.menu.value)
    const dispatch = useDispatch()

    return(
        <div className="mobile-bottom-nav d-md-none" style={{paddingBottom:'8%'}}>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <svg onClick={() => dispatch(setMenu(0))} className={` ${menuState === 0 ? "footer-icon-selected": ""} `} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{fontSize: '30px'}}>
                        <path d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z" fill="currentColor"></path>
                    </svg>
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(setMenu(1))} className={` ${menuState === 1 ? "footer-icon-selected": ""} `} style={{fontSize: '30px'}} width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(setMenu(3))} className={` ${menuState === 3 ? "footer-icon-selected": ""} `} style={{fontSize: '30px'}} width="1em" height="1em" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <svg onClick={() => dispatch(setMenu(2))} className={` ${menuState === 2 ? "footer-icon-selected": ""} `} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{fontSize: '30px'}}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9ZM3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="currentColor"></path>
                    </svg>
                </div>		
            </div>

        </div>
    )
}

export default Footer