import { ChevronLeftIcon } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function TaskPage() {
    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let title = searchParams.get('title')
    let description = searchParams.get('description')
    return (
        <div className='w-screen h-screen flex flex-col items-center mt-6 gap-4'>
            <div className="flex w-1/4 justify-center relative">
                <ChevronLeftIcon
                    onClick={() => navigate(-1)}
                    className="absolute left-0 top-3 cursor-pointer text-slate-100
                    hover:brightness-90 transition-all
                    "
                />

                <h1 className='font-bold text-4xl text-slate-100'>TODO LIST</h1>
            </div>

            <div className="flex flex-col w-1/4 space-y-4 p-6 bg-slate-100 rounded-md">
                <h2 className="text-3xl font-medium text-slate-600">{title}</h2>

                <p className="text-slate-600 font-medium">{description}</p>
            </div>
        </div>
    )
}

export default TaskPage