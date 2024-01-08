import { useEffect, useState } from "react";
import DeleteIcon from "../UI/icons/DeleteIcon";
import { taskDB } from "@/app/helpers/indexedDB";

interface IProp {
  id?: number;
}

const DeleteTask: React.FC<IProp> = ({ id }) => {
  //const [showPopup, setShowPopup] = useState<boolean>(false);
  const handleDeleteTask = async () => {
    try {
      // Check if the id is provided
      if (id !== undefined) {
        // Show confirmation dialog
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this task?"
        );

        if (confirmDelete) {
          // Delete the task from IndexedDB
          await taskDB.tasks.delete(id);
          //setShowPopup(true);
          console.log(`Task with ID ${id} deleted`);
        }
      } else {
        console.error("Task ID is undefined");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  /*useEffect(() => {
    // Hide the popup after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(false);
    }, 1500);

    // Cleanup the timeout on component unmount or when the popup is hidden manually
    return () => clearTimeout(timeoutId);
  }, [showPopup]);*/

  return (
    <>
      <span
        className="mr-2 flex items-center"
        onClick={handleDeleteTask}
        style={{ cursor: "pointer" }}
      >
        <DeleteIcon width={6} />
      </span>
      {/* Popup */}
      {/*showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white py-2 px-6 rounded-md">
          Task deleted!
        </div>
      )*/}
    </>
  );
};

export default DeleteTask;
