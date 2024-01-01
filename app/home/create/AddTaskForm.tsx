"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { taskDB } from "@/app/helpers/indexedDB";
import { Task } from "@/app/interfaces/ITask";

const AddTaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [pinTask, setPinTask] = useState<boolean>(false);
  const [taskNameCount, setTaskNameCount] = useState<number>(50);
  const [taskDescriptionCount, setTaskDescriptionCount] = useState<number>(100);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTaskName(value);
    setTaskNameCount(50 - value.length);
  };

  const handleTaskDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setTaskDescription(value);
    setTaskDescriptionCount(100 - value.length);
  };

  const handlePinTaskChange = () => {
    setPinTask(!pinTask);
  };

  const handleAddTask = async () => {
    const newTask: Task = {
      name: taskName,
      note: taskDescription,
      pinned: pinTask,
      date: new Date().toDateString(),
      category: 0, // Set the initial state as needed
    };

    try {
      const taskId = await taskDB.tasks.add(newTask);
      console.log("Task added with ID:", taskId);
      setShowPopup(true);
    } catch (error) {
      console.error("Error adding task:", error);
    }

    setTaskName("");
    setTaskDescription("");
    setPinTask(false);
    setTaskNameCount(50);
    setTaskDescriptionCount(100);
  };

  useEffect(() => {
    // Hide the popup after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(false);
    }, 1500);

    // Cleanup the timeout on component unmount or when the popup is hidden manually
    return () => clearTimeout(timeoutId);
  }, [showPopup]);

  return (
    <div className="w-full md:w-2/4 mx-auto rounded-md flex flex-col">
      <div>
        <label
          htmlFor="taskName"
          className="text-sm text-gray-600 dark:text-white"
        >
          Task Name ({taskNameCount})
        </label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={handleTaskNameChange}
          disabled={taskNameCount <= 0}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-black"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="taskDescription"
          className="text-sm text-gray-600 dark:text-white"
        >
          Task Description ({taskDescriptionCount})
        </label>
        <textarea
          id="taskDescription"
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
          disabled={taskDescriptionCount <= 0}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-black"
        />
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="pinTask"
          checked={pinTask}
          onChange={handlePinTaskChange}
          className="mr-2"
        />
        <label
          htmlFor="pinTask"
          className="text-sm text-gray-600 dark:text-white"
        >
          Pin Task
        </label>
      </div>
      <button
        onClick={handleAddTask}
        className="mt-4 bg-black dark:bg-gray-100 text-white dark:text-black py-3 px-12 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue"
      >
        Add Task
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-2 px-6 rounded-md">
          Task added!
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
