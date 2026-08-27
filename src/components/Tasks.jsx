const Tasks = ({ task, taskdesc }) => {
  return (
    <div>
      <div className="bg-red-500 flex flex-col items-center justify-center p-4 h-30 w-145 rounded-2xl shrink-0 overflow-auto scrollbar-none ">
        <h1 className="font-bold">{task}</h1>
        <p className="text-center">{taskdesc}</p>
      </div>
    </div>
  );
};

export default Tasks;
