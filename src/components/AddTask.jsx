import { useState } from "react"

function AddTask(props) {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");

    // console.log(title, description)

    return (
        <div className="flex flex-col w-1/4 space-y-4 p-6 bg-slate-100 rounded-md">
            <input
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Title"
                value={title}
                type="text"
            />
            <input
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Description"
                value={description}
                type="text"
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        // .trim() serve para desconsiderar espaços e linhas em branco.
                        return alert(`Please type a valid title and description`)
                    } else {
                        props.onAddSubmit(title, description)
                        setTitle("")
                        setDescription("")
                    }
                }}
                className="bg-slate-500 text-white font-medium px-4 py-2 rounded-md hover:brightness-90 transition-all"
            >
                Add Task
            </button>
        </div>
    )
}

export default AddTask