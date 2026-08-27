import Tasks from "./Tasks";

const Components = ({ ftask }) => {
  return (
    <div className="flex flex-col items-center justify-items-center h-screen overflow-auto bg-gray-300 p-2 gap-3 rounded-xl scrollbar-none shrink-0">
      {ftask.map((task, item) => (
        <Tasks key={item} task={task.task} taskdesc={task.taskdesc} />
      ))}
    </div>
  );
};

export default Components;
