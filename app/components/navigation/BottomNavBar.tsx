import Icon from "./icons/Icon";

export default function BottomNavBar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 border-t-2 dark:border-t w-full h-14 fixed bottom-0 left-0 flex justify-center items-center">
      <ul className="flex">
        <div className="mx-4">
          <Icon path="/home" />
        </div>

        <div className="mx-4">
          <Icon path="/home/tasks" />
        </div>

        <div className="mx-4">
          <Icon path="/home/create" />
        </div>
      </ul>
    </div>
  );
}
