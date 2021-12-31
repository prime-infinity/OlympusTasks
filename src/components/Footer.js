const Footer = () => {
    return(
        <nav className="mobile-bottom-nav d-md-none">

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                <i className="material-icons" style={{fontSize: "40px"}}>home</i>
                <br /> 
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                <i className="material-icons" style={{fontSize: "40px"}}>import_export</i>
                <br />
                </div>		
            </div>

            <div className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                <i className="material-icons" style={{fontSize: "40px"}}>hexagon</i>
                <br /> 
                </div>		
            </div>

        </nav>
    )
}

export default Footer