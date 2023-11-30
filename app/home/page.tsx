import { Suspense } from "react";
import ThemeSwitcher from "../components/UI/ThemeSwitcher";
import PendingIcon from "../components/UI/icons/PendingIcon";
import OverviewHolder from "./OverviewHolder";
import Loading from "./loading";

export default function Homepage() {
  return (
    <div className="grid grid-cols-1">
      home page
      <div className="border col-span-1 md:col-span-2">
        <span className=""> home nav bar</span>
        <ThemeSwitcher />
      </div>
      <div className="py-2 grid grid-cols-2 gap-x-4 md:grid-cols-4">
        <span className="col-span-2 md:col-span-4">overview</span>

        <Suspense fallback={<Loading />}>
          <OverviewHolder />
        </Suspense>
      </div>
    </div>
  );
}
