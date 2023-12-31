import ThemeSwitcher from "@/app/components/UI/ThemeSwitcher";
import AddTaskForm from "./AddTaskForm";
import { taskDB } from "@/app/helpers/indexedDB";

// Ensure the Dexie database is open before rendering the component
taskDB.open();

export default function AddTask() {
  return (
    <>
      <ThemeSwitcher />
      <div className="flex items-center justify-center h-screen">
        <AddTaskForm />
      </div>
    </>
  );
}
