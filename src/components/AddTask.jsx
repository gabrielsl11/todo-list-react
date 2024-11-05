import { useState } from "react";

function AddTask({ onAddClick }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Type a title"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Type a description"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="text-white bg-slate-500 font-medium px-4 py-2 rounded-md"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Title and description are required")("Title and description are required");
          }
          // Arrow function quando tem apenas uma linha de código, não precisa usar {}.
          onAddClick(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
