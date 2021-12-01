import PropTypes from 'prop-types'

const Header = ({title}) =>{

    return (
      <header>
          <h1 style={{color:'red',backgroundColor:'blue'}}>{title}</h1>
      </header>
    );
  }
  
  Header.propTypes = {
      title:PropTypes.string.isRequired   
  }

  export default Header;
  