import { tasks } from "@/app/data";
import Tasks from "./Tasks";

export default function TaskHolder() {
  return (
    <>
      <div className="col-span-1 md:col-span-2 border">TaskHolder</div>
      {tasks.map((task) => (
        <Tasks key={task.id} data={task} />
      ))}
      {tasks.length === 0 && <p className="text-center">There are no tasks</p>}
    </>
  );
}
