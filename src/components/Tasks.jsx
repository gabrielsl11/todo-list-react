import { Check, X, ChevronRightIcon, TrashIcon } from "lucide-react"

function Tasks(props) {
    // console.log(props.tasks)
    return (
        <ul className="w-1/4 space-y-4 p-6 bg-slate-100 rounded-md">
            {props.tasks.map((task) =>
                <li key={task.id} className="flex gap-1">
                    <button
                        onClick={() => props.onTaskClick(task.id)}
                        className={`flex gap-1 bg-slate-500 font-semibold text-white p-2 rounded-md w-full ${task.isCompleted ? 'line-through' : ''}`}
                    >
                        {task.isCompleted ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                        {task.title}
                    </button>

                    <button className="bg-slate-500 font-semibold text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>

                    <button className="bg-slate-500 font-semibold text-white p-2 rounded-md">
                        <TrashIcon />
                    </button>
                </li>)}
        </ul>
    )
}

export default Tasks
