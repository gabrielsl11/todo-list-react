import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let title = searchParams.get("title");
  let description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">

      <div className="h-screen w-screen bg-slate-500 flex justify-center p-4">
        <div className="w-[576px] space-y-4">
          <div className="flex justify-center relative mb-6">

            {/* Função deve ser chamada com arrow function para não ser executada assim que a página for carregada, mas sim quando for clicada. */}
            <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0  text-slate-100">
              <ChevronLeftIcon />
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Task details
            </h1>
          </div>

          <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-2xl text-slate-600 font-bold">{title}</h2>
            <p className="text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
