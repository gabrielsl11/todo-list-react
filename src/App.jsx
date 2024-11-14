import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  let [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        } else { return task }
      })
    )
  }

  function onDeleteClick(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  function onAddSubmit(title, description) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title, // Short syntax
        description, // Short syntax
        isCompleted: false
      }
    ])
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center mt-6 gap-4'>
      <h1 className='font-bold text-4xl text-slate-100'>TODO LIST</h1>

      <AddTask
        onAddSubmit={onAddSubmit}
      />

      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  )
}

export default App
