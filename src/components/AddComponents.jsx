import { useState } from "react";
const AddComponents = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [taskdesc, setTaskdesc] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    onAddTask(task, taskdesc);
    setTask("");
    setTaskdesc("");
  };

  const handleClearAll = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <div className="bg-gray-300 flex items-center justify-center flex-col h-screen p-2 rounded-xl">
        <h1 className="text-2xl font-bold ">Add a New Component</h1>
        <form className="mt-2" onSubmit={handleAddTask}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter new component"
            className="border-2 rounded-xl text-xl p-2 w-full"
          />
          <textarea
            type="text"
            value={taskdesc}
            onChange={(e) => setTaskdesc(e.target.value)}
            placeholder="Enter component Details"
            className="border-2 mt-2 rounded-xl text-xl p-2 w-full"
          />
          <div className="flex justify-center items-center gap-2">
            <button
              type="submit"
              className="bg-gray-400 mt-2 rounded-2xl p-2 h-10 w-20 cursor-pointer"
            >
              Add
            </button>

            <button
              className="bg-red-600 mt-2 rounded-2xl p-2 h-10 w-50 cursor-pointer"
              type="button"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComponents;
