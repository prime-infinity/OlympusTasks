
const AddTask = () => {

    const addTask = (e) => {
        e.preventDefault()
    }

    return (
        
        <div className="row">

            <div className="col-12 col-md-6 offset-md-3">

            <form onSubmit={addTask}>

                <div className="form-group mb-5 text-muted-native">
                    <label htmlFor="exampleFormControlInput1">Task Name</label>
                    <input type="text" className="form-control custom-input pt-4 pb-4" id="exampleFormControlInput1" />
                </div>

                <div className="form-group text-muted-native mb-4">
                    <label htmlFor="exampleFormControlTextarea1">Add Note</label>
                    <textarea className="form-control custom-input" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-check form-check-inline text-muted-native">
                    <input className="form-check-input mr-2" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Pin Task</label>
                </div>

                <button className="btn btn-custom pt-3 pb-3 font-weight-bold mt-5">Add Task</button>

            </form>

            </div>

        </div>
       
    )
}

export default AddTask