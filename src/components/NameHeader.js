//import { useState, useEffect } from 'react'

const NameHeader = () => {

    //const [showAddTask] = useState(true)

    //useEffect(() => { 
        //console.log(showAddTask)
        /*fetch('http://localhost:5000/tasks')*/
    /*},[])*/

    return(
        <div className="row text-theme mb-5 mt-5">
            <div className="col-9 offset-md-2 text-md-right">
                <span className="h3 font-weight-bold">Hi Osamede</span> <br />
                <span>5 tasks are Pending</span>
            </div>
            <div className="col-3 col-md-1">
                <img className="border rounded-circle img-fluid-native" alt="profileImage" src="images/prime.jpeg" />
            </div>
        </div>
    )
}

export default NameHeader