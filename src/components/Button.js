const Button = ({color, text}) => {

    const buttonClicked = () => {
        console.log("click")
    }

    return <button onClick={buttonClicked} style={{backgroundColor:color}} className="btn">{text}</button>
}

export default Button