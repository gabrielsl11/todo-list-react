import { Check, X, ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks(props) {
    // console.log(props.tasks)
    let navigate = useNavigate()

    function onDetailsClick(task) {
        // navigate(`/task?title=${task.title}&description=${task.description}`)
        let query = new URLSearchParams()
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="w-1/4 space-y-4 p-6 bg-slate-100 rounded-md">
            {props.tasks.map((task) =>
                <li key={task.id} className="flex gap-1">
                    <button
                        onClick={() => props.onTaskClick(task.id)}
                        className={`flex gap-1 bg-slate-500 font-semibold p-2 rounded-md w-full ${task.isCompleted ? 'line-through text-slate-300' : 'text-slate-50'} hover:brightness-90 transition-all`}
                    >
                        {task.isCompleted ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                        {task.title}
                    </button>

                    <button
                        onClick={() => onDetailsClick(task)}
                        className="bg-slate-500 font-semibold text-white p-2 rounded-md hover:brightness-90 transition-all"
                    >
                        <ChevronRightIcon />
                    </button>

                    <button
                        onClick={() => props.onDeleteClick(task.id)}
                        className="bg-slate-500 font-semibold text-white p-2 rounded-md hover:brightness-90 transition-all"
                    >
                        <TrashIcon />
                    </button>
                </li>)}
        </ul>
    )
}

export default Tasks
