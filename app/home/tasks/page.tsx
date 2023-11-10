import { Suspense } from "react";
import Loading from "./loading";
import TaskHolder from "./TaskHolder";

export default function Tasks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="border col-span-1 md:col-span-2">nav bar</div>

      <Suspense fallback={<Loading />}>
        <TaskHolder />
      </Suspense>
    </div>
  );
}
