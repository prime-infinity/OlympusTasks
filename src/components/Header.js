import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) =>{

    return (
      <header>
          <h1>{title}</h1>
          <Button color='green' text='Add' /> 
      </header>  
    );
  }
  
  Header.propTypes = {
      title:PropTypes.string.isRequired   
  }

  //css in js
  /*const headingStyle = {
      color:'red',
      backgroundColor:'blue',
  }*/

  export default Header;
  