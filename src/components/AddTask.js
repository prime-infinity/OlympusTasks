import {useState} from 'react'

const AddTask = () => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
       <form>
           <div>
               <label htmlFor="">Task</label>
               <input type="text" value={text} placeholder="Add Task" />
           </div>

           <div>
               <label htmlFor="">Day & Time</label>
               <input type="text" value={day} placeholder="Add Day And Time" />
           </div>

           <div>
               <label htmlFor="">Set Reminder</label>
               <input type="checkbox" value={reminder}/>
           </div>

            <input class="btn" type="submit" value="Save" />

       </form>
    )
}

export default AddTask