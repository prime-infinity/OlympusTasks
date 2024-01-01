"use client";
import Tasks from "./Tasks";
import { taskDB } from "@/app/helpers/indexedDB";
import { useLiveQuery } from "dexie-react-hooks";

export default function TaskHolder() {
  const taskList = useLiveQuery(() => taskDB.tasks.toArray(), []);

  return (
    <>
      <div className="col-span-1 md:col-span-2 border">TaskHolder</div>
      {taskList?.map((task) => (
        <Tasks key={task.id} data={task} />
      ))}
      {(!taskList || taskList.length === 0) && (
        <p className="text-center">There are no tasks</p>
      )}
    </>
  );
}
