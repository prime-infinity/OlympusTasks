import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) =>{

    return (
      <header>
          <h1>{title}</h1>
          <Button color='green' text='hello' /> 
          <Button color='blue' text='hello' /> 
          <Button color='aqua' text='hello' /> 
          <Button color='black' text='hello' /> 
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
  