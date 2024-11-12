import { useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Study React',
      description: 'Studying React to learn how to use it.',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Study CSS',
      description: 'Studying CSS to learn how to use it.',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Study JavaScript',
      description: 'Studying JavaScript to learn how to use it.',
      isCompleted: false
    },
    {
      id: 4,
      title: 'Study HTML',
      description: 'Studying HTML to learn how to use it.',
      isCompleted: false
    }
  ])

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
