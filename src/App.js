import useState from 'react'
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

  return (
    <div className="container">
      <Header title='hello'/>
      <Tasks tasks={tasks} />
    </div>  
  );
}

export default App;
