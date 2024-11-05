import { useSearchParams } from "react-router-dom";

function TaskPage() {
  let [searchParams] = useSearchParams()import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./App.jsx";
  import "./index.css";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import TaskPage from "./pages/taskPage.jsx";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/task",
      element: <TaskPage />,
    }
  ]);
  
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
  ;
  let title = searchParams.get("title");
  let description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}

export default TaskPage;
