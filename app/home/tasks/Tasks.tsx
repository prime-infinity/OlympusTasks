import { Task } from "@/app/interfaces/ITask";

interface IProp {
  data: Task;
}
const Tasks: React.FC<IProp> = ({ data }) => {
  return (
    <div className="">
      <div className="border">A Tasks {data.name}</div>
    </div>
  );
};

export default Tasks;
