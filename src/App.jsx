import { useEffect, useState } from "react";
import AddComponents from "./components/AddComponents";
import Components from "./components/Components";
import Navbar from "./Navbar";

const App = () => {
  const [ftask, setFtasks] = useState(() => {
    const savedTasks = localStorage.getItem("ftask");

    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  const handleAddTask = (task, taskdesc) => {
    setFtasks((currentTasks) => [...currentTasks, { task, taskdesc }]);
  };

  useEffect(() => {
    localStorage.setItem("ftask", JSON.stringify(ftask));
  }, [ftask]);

  return (
    <div>
      <Navbar name={"Lokesh"} />
      <div className="grid grid-cols-2 gap-5 h-screen w-screen bg-gray-200 mt-2 p-2 rounded-s">
        <Components ftask={ftask} />
        <AddComponents onAddTask={handleAddTask} />
      </div>
    </div>
  );
};

export default App;
