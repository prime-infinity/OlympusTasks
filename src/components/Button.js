const Button = ({color, text, buttonClicked}) => {

    return <button onClick={buttonClicked} style={{backgroundColor:color}} className="btn">{text}</button>
}

export default Button