import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

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

  const addTask = (task) => {
    
    const id = Math.floor(Math.random() * 1000) +1

    const newTask = {id, ...task}
    setTasks([...tasks,newTask])

  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggel reminder
  const toggleReminder = (id) => {
    
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    
  }

  return (
    <div className="container">
      <Header title='hello' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks} /> : 'No task to show' }
    </div>  
  );
}

export default App;
