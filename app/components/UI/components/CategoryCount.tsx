"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { taskDB } from "@/app/helpers/indexedDB";
import { useEffect, useState } from "react";
import { CategoryCountProps } from "@/app/interfaces/ICategoryCount";

const CategoryCount: React.FC<CategoryCountProps> = ({ category }) => {
  const [taskCount, setTaskCount] = useState<number | null>(null);

  // Define a function to get the count of tasks for a given category
  const getTaskCount = async () => {
    try {
      const count = await taskDB.tasks
        .where("category")
        .equals(category)
        .count();
      setTaskCount(count);
    } catch (error) {
      console.error("Error getting task count:", error);
    }
  };

  // Use useLiveQuery to dynamically get the task counts
  useEffect(() => {
    getTaskCount();
  }, [category]);

  useLiveQuery(() => {
    getTaskCount();
  }, [category]);

  return <>{taskCount !== null ? taskCount : "Loading..."}</>;
};
export default CategoryCount;
