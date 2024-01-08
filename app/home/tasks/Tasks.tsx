import CautionIcon from "@/app/components/UI/icons/CautionIcon";
import DoneIcon from "@/app/components/UI/icons/DoneIcon";
import OngoingIcon from "@/app/components/UI/icons/OngoingIcon";
import PendingIcon from "@/app/components/UI/icons/PendingIcon";
import PinIcon from "@/app/components/UI/icons/PinIcon";
import UnpinIcon from "@/app/components/UI/icons/UnpinIcon";
import DeleteTask from "@/app/components/interactions/DeleteTask";
import { Task } from "@/app/interfaces/ITask";

interface IProp {
  data: Task;
}
const Tasks: React.FC<IProp> = ({ data }) => {
  return (
    <div className="my-4">
      <div className="flex rounded-t-xl justify-between py-1 bg-gray-100 border-2 dark:border dark:bg-gray-950">
        <span className="pl-3 flex items-center">
          {data.pinned ? <UnpinIcon width={6} /> : <PinIcon width={6} />}
          {data.pinned ? (
            <span className="text-xs pl-1">unpin</span>
          ) : (
            <span className="text-xs pl-1">pin</span>
          )}
        </span>
        <span className="pr-3 hidden"></span>
      </div>
      <div className="text-center py-6 px-10 bg-gray-100 border-l-2 border-r-2 dark:border-r dark:border-l dark:bg-gray-950">
        <span className="text-lg">{data.name}</span>
        <br />
        <span className="text-sm">{data.note}</span>
        <br />
        <span className="text-xs">{data.date}</span>
      </div>
      <div className="flex justify-between rounded-b-xl py-1 bg-gray-100 border-2 dark:border dark:bg-gray-950 ">
        <span className="pl-3 flex items-center">
          {data.category === 3 ? (
            <DoneIcon width={6} />
          ) : data.category === 0 ? (
            <PendingIcon width={6} />
          ) : data.category === 1 ? (
            <OngoingIcon width={6} />
          ) : data.category === 2 ? (
            <CautionIcon width={6} />
          ) : null}

          <span className="text-xs pl-1">
            {data.category === 3
              ? "done "
              : data.category === 0
              ? "pending "
              : data.category === 1
              ? "ongoing "
              : data.category === 2
              ? "in review "
              : null}
            task
          </span>
        </span>

        <DeleteTask id={data.id} />
      </div>
    </div>
  );
};

export default Tasks;
