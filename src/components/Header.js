import PropTypes from 'prop-types'
//import { useLocation } from 'react-router-dom';
import Button from './Button'

const Header = ({title, onAdd, showAdd}) =>{

    //const location =  useLocation()
 
    return (
      <header> 
          <h1>{title}</h1>
          { /*location.pathname === '/' && */<Button buttonClicked={onAdd}  color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} /> }
      </header>  
    );
  }
  
  Header.propTypes = {
      title:PropTypes.string.isRequired   
  }

  export default Header;
  