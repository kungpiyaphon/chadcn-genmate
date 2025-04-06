import { Button } from "@/components/ui/button";
import "./App.css";
import { toast } from "sonner";
import GenCCard from "./components/GenCCard";
import { genCMembers } from "./lib/genCMembers";

function App() {
  function info() {
    toast.message("Veiw info", { description: "Show info" });
  }

  return (
    <div className="flex flex-col bg-green-500 h-screen items-center justify-center w-screen">
      <div className="font-bold text-9xl my-5 rounded-2xl bg-amber-300">
      <h1>Genmate C</h1>

      </div>
      <div className="grid grid-cols-5 gap-4">
        {genCMembers.map((e) => (
          <GenCCard name={e.name} number={e.number} profileImage={e.profileImage} info={info} />
        ))}
      </div>
    </div>
  );
}

export default App;
