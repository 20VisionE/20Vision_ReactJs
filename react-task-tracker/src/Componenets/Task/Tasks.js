import Task from './Task'



const Tasks = ({task,onDelete}) => {
  return (
    <div>
         {task.map((tasks)=>(
         <Task key={tasks.id} task={tasks} onDelete={onDelete}
        />
         ))}
    </div>
  )
}
export default Tasks
