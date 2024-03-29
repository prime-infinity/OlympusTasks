import Icon from "./icons/Icon";

export default function SideBar() {
  return (
    <>
      <div className="bg-gray-100 border-r-2 dark:border-r dark:bg-gray-950  w-24 h-screen fixed top-0 left-0 flex flex-col justify-center">
        {/* Sidebar content */}
        <ul>
          <div className="my-8 flex justify-center">
            <Icon path="/home" />
          </div>

          <div className="my-8 flex justify-center">
            <Icon path="/home/tasks" />
          </div>
          <div className="my-8 flex justify-center">
            <Icon path="/home/create" />
          </div>
        </ul>
      </div>
    </>
  );
}
