import { Button } from "@/components/ui/button";
import "./App.css";
import NewjeanCard from "./components/newjeanCard";
import { newJeansMembers } from "./lib/njs";
import { toast } from "sonner";

function App() {
  function onBuy() {
    toast.message("Added item", { description: "checkout your cart" });
  }

  return (
    <div className="flex bg-blue-400 h-screen items-center justify-center w-screen">
      {/* <Button variant="secondary" size="lg">
        Hello JSD9
      </Button> */}
      {/* <NewjeanCard name={newJeansMembers[0].name} role={newJeansMembers[0].role} profileImage={newJeansMembers[0].profileImage} buy={onBuy} /> */}
      <div className="grid grid-cols-5 gap-4">
        {newJeansMembers.map((e) => (
          <NewjeanCard name={e.name} role={e.role} profileImage={e.profileImage} buy={onBuy} />
        ))}
      </div>
    </div>
  );
}

export default App;
