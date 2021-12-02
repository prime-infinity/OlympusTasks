import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Doctors Appointment',
      day:'Feb 5th at 2:49pm',
      reminder:true,
    },
    {
      id:2,
      text: 'meeting at school',
      day:'Feb 6th at 2:49pm',
      reminder:true,
    },
    {
      id:3,
      text: 'Food Shopping',
      day:'Feb 7th at 2:49pm',
      reminder:false,
    },

  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title='hello'/>
      { tasks.length > 0 ? <Tasks onDelete={deleteTask} tasks={tasks} /> : 'No task to show' }
    </div>  
  );
}

export default App;
