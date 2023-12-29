import ThemeSwitcher from "@/app/components/UI/ThemeSwitcher";
import AddTaskForm from "./AddTaskForm";

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
