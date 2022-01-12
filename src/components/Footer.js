import { useDispatch } from 'react-redux'
import { setMenu } from '../redux/menuSlice'

const Footer = () => {

    const dispatch = useDispatch()

    return(
        <div className="mobile-bottom-nav d-md-none" style={{paddingBottom:'8%'}}>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <svg onClick={() => dispatch(setMenu(0))} className="footer-icon-selected" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{fontSize: '30px'}}>
                        <path d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z" fill="currentColor"></path>
                    </svg>
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <i onClick={() => dispatch(setMenu(1))} className="typcn typcn-th-large" style={{fontSize: '30px'}}></i>
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <svg onClick={() => dispatch(setMenu(2))} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{fontSize: '30px'}}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9ZM3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="currentColor"></path>
                    </svg>
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <i onClick={() => dispatch(setMenu(3))} className="typcn typcn-plus" style={{fontSize: '30px'}}></i>
                </div>		
            </div>

        </div>
    )
}

export default Footer