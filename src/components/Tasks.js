import Task from './Task'

const Tasks = ({tasks, onDelete, setTasks}) => {

    return (
        <>
          {tasks.map((task) => (
            <Task key={task.id} task = {task} 
            onDelete = {onDelete} 
             tasks={tasks} setTasks={setTasks}/>
          ))}  
        </>
    )
}

export default Tasks
