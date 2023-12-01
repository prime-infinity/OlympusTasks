import { OverviewCardProps } from "@/app/interfaces/IOverviewCard";

const OverviewCard: React.FC<OverviewCardProps> = ({
  svgContent,
  status,
  number,
}) => {
  return (
    <div className="border-2 dark:border rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col items-center md:pt-24 pt-12 my-2 md:my-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-12 h-12 md:w-24 md:h-24`}
      >
        {svgContent}
      </svg>
      <div className="border-t-2 flex place-content-around  dark:border-t w-full text-center mt-12 md:mt-24 py-2">
        {status}
        <span className="bg-gray-300 rounded-sm px-2 text-xs items-center flex">
          {number}
        </span>
      </div>
    </div>
  );
};

export default OverviewCard;
