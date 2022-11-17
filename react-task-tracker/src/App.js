import Header from './Componenets/Header/Header'
import Tasks from './Componenets/Task/Tasks'
import {useState} from 'react'

 function App() {
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Metting At Schoool',
        day:'Feb 6th at 2:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Food shopping',
        day:'Feb 5th at 2:30pm',
        reminder:false
    }
  ])
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==
    id))} 
   return (
     <div className="container">
       <Header />
       {tasks.length>0? <Tasks task={tasks} onDelete={deleteTask}/>:'No Tasks To Show'}
     </div>
   );
   }



// class App extends React.Component{
//   render(){
//     return  <h1>
//       Here is a hellow Hellow
//     </h1>
//   }
// }

export default App;
