import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/taskSlice'
import { setMenu } from '../redux/menuSlice'

const AddTask = () => {
    const dispatch = useDispatch()

    const [taskName, setTaskName] = useState("");
    const [taskNote, setTaskNote] = useState("");
    const [taskPined, setTaskPin] = useState(false)

    const addNewTask = (e) => {
        e.preventDefault()

        const newTask = {
            name:taskName,
            note:taskNote,
            pined:taskPined,
            cat:0,
        }

        dispatch(addTask(newTask))

        setTaskName("")
        setTaskNote("")

        dispatch(setMenu(1))

    }

    return (
        
        <div className="row">

            <div className="col-12 col-md-6 offset-md-3">

            <form onSubmit={addNewTask}>

                <div className="form-group mb-5 text-muted-native">
                    <label htmlFor="exampleFormControlInput1">Task Name</label>
                    <input value={taskName} type="text" onChange={(e)=>setTaskName(e.target.value)} className="form-control custom-input pt-4 pb-4" id="exampleFormControlInput1" />
                </div>

                <div className="form-group text-muted-native mb-4">
                    <label htmlFor="exampleFormControlTextarea1">Add Note</label>
                    <textarea value={taskNote} onChange={(e)=>setTaskNote(e.target.value)} className="form-control custom-input" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-check form-check-inline text-muted-native">
                    <input className="form-check-input mr-2" value={taskPined} onChange={(e) => setTaskPin(e.currentTarget.checked)} type="checkbox" id="inlineCheckbox1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Pin Task</label>
                </div>

                <button className="btn btn-custom pt-3 pb-3 font-weight-bold mt-5">Add Task</button>

            </form>

            </div>

        </div>
       
    )
}

export default AddTask