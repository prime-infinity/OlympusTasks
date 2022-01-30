import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/taskSlice'
import { setMenu } from '../redux/menuSlice'

const AddTask = () => {
    const dispatch = useDispatch()

    const [taskName, setTaskName] = useState("");
    const [taskNote, setTaskNote] = useState("");
    const [taskPined, setTaskPin] = useState(false)

    const [buttonState, setButtonState] = useState(false)

    const runCheck = ()=>{
        taskName.trim().length > 50 || taskNote.length > 150 || taskName.trim() === "" ? setButtonState(false) : setButtonState(true)
    }

    const isTypingName = (e) => {
        setTaskName(e)
        runCheck()
        
    }
    
    const isTypingNote = (e) => {
        setTaskNote(e)
        runCheck()
    }

    const addNewTask = (e) => {
        e.preventDefault()
        if(taskName.trim().length > 50 || taskName.trim() === "" || taskNote.length > 150){
            return
        }
        
        let today = new Date()
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

        const newTask = {
            name:taskName,
            note:taskNote,
            pined:taskPined,
            date:date,
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
                    <label htmlFor="exampleFormControlInput1">Task Name</label> <span className={`float-right ${taskName.trim().length > 50 ? "text-danger":"text-warning "}`}>{taskName.trim().length}</span>
                    <input value={taskName} type="text" onChange={(e)=>isTypingName(e.target.value)} className="form-control custom-input pt-4 pb-4" id="exampleFormControlInput1" />
                </div>

                <div className="form-group text-muted-native mb-4">
                    <label htmlFor="exampleFormControlTextarea1">Add Note</label> <span className={`float-right ${taskNote.length > 150 ? "text-danger":"text-warning "}`}>{taskNote.length}</span>
                    <textarea value={taskNote} onChange={(e)=>isTypingNote(e.target.value)} className="form-control custom-input" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-check form-check-inline text-muted-native">
                    <input className="form-check-input mr-2" value={taskPined} onChange={(e) => setTaskPin(e.currentTarget.checked)} type="checkbox" id="inlineCheckbox1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Pin Task</label>
                </div>

                <button disabled={!buttonState} className="btn btn-custom pt-3 pb-3 font-weight-bold mt-5">Add Task</button>

            </form>

            </div>

        </div>
       
    )
}

export default AddTask