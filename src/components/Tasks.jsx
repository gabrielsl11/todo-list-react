import { Pencil, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  let navigate = useNavigate();

  function onDetailsClick(task) {
    let query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full  text-left ${task.isCompleted && 'line-through'}`}
          >
            {task.title}
          </button>

          <button onClick={() => onDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
            <Pencil />
          </button>

          <button onClick={() => props.onDeleteClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
