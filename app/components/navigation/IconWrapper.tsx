"use client";
import { usePathname } from "next/navigation";

interface IconWrapperProps {
  path: string;
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ path, children }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <div
      className={`${
        isActive ? "bg-gray-300" : ""
      } cursor-pointer rounded-lg hover:bg-gray-300 transition-all`}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
