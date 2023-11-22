import { Suspense } from "react";
import TaskHolder from "./TaskHolder";
import Loading from "./loading";
import ThemeSwitcher from "@/app/components/UI/ThemeSwitcher";

export default function Tasks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
      <div className="border col-span-1 md:col-span-2">nav bar</div>
      <ThemeSwitcher />
      <Suspense fallback={<Loading />}>
        <TaskHolder />
      </Suspense>
    </div>
  );
}
