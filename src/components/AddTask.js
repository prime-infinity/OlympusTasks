import {useState} from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        if(!text){
            alert("please add task")
            return
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)

    }

    return (
       <form onSubmit={submit}>
           <div>
               <label htmlFor="">Task</label>
               <input type="text" value={text} onChange={(e)=> setText(e.target.value) } placeholder="Add Task" />
           </div>

           <div>
               <label htmlFor="">Day & Time</label>
               <input type="text" value={day} onChange={(e)=> setDay(e.target.value) } placeholder="Add Day And Time" />
           </div> 

           <div>
               <label htmlFor="">Set Reminder</label>
               <input checked={reminder} type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked) }/>
           </div>

            <input className="btn" type="submit" value="Save" />

       </form>
    )
}

export default AddTask