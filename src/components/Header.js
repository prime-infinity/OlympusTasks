import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) =>{

 
    return (
      <header> 
          <h1>{title}</h1>
          <Button buttonClicked={onAdd}  color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} /> 
      </header>  
    );
  }
  
  Header.propTypes = {
      title:PropTypes.string.isRequired   
  }

  export default Header;
  