import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Notes from './components/Notes'
import AddNotes from './components/AddNotes'

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const[showAddNotes, setShowAddNotes] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Test 1',
        day: '7th Oct at 10:15 am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Mid-sem Exams',
        day: '19th Oct at 1pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: '24th Oct',
        reminder: false,
    }
])

  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'State is a special property in react component. Basically it is an object that includes any data that this component needs.',
    },

    {
      id: 2,
      text: 'The term render prop refers to a technique for sharing code between React components using a prop whose value is a function.', 
    }
  ])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const addNote = (note) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newNote = {id, ...note}
  setNotes([...notes, newNote])
}

//Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} 
      onAdd2={() => setShowAddNotes(!showAddNotes)} showAdd2={showAddNotes}/>

      {showAddTask && <AddTask onAdd={addTask} />}
      {showAddNotes && <AddNotes onAdd={addNote}/>}

      { tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete=
      {deleteTask} setTasks={setTasks} />): ('No Tasks to show') }
      { notes.length > 0 ? ( <Notes notes={notes} onDelete={deleteNote}/>) : ('; \nNo notes to show')}
      
    </div>
  );
}

export default App