import { ChevronRightIcon } from "lucide-react"

function Tasks(props) {
    // console.log(props.tasks)
    return (
        <ul className="w-1/4 space-y-4 p-6 bg-slate-100 rounded-md">
            {props.tasks.map((task) =>
                <li key={task.id} className="flex gap-1">
                    <button className="bg-slate-400 font-semibold text-white p-2 rounded-md w-full">{task.title}</button>

                    <button className="bg-slate-400 font-semibold text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                </li>)}
        </ul>
    )
}

export default Tasks