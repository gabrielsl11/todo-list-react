import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Studying React",
      description: "Studying React.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Studying Vite",
      description: "Studying Vite.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Studying Tailwind CSS",
      description: "Studying Tailwind CSS.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Studying XML",
      description: "Studying XML.",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Studying English",
      description: "Studying English.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    let newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteClick(taskId) {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddClick(title, description) {
    let newTask = {
      id: tasks.length + 1,
      title: title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-4">
      <div className="w-[576px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          TODO List
        </h1>
        <AddTask onAddClick={onAddClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
