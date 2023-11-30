export default function OverviewHolder() {
  return (
    <>
      <div className="border-2 dark:border rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col items-center md:pt-24 pt-12 my-2 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-12 h-12 md:w-24 md:h-24`}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>
        <div className="border-t-2 flex place-content-around  dark:border-t w-full text-center mt-12 md:mt-24 py-2">
          pending
          <span className="bg-gray-300 rounded-sm px-2 text-xs items-center flex">
            1
          </span>
        </div>
      </div>
      <div className="border-2 dark:border rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col items-center md:pt-24 pt-12 my-2 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-12 h-12 md:w-24 md:h-24`}
        >
          <path
            fillRule="evenodd"
            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
            clipRule="evenodd"
          />
        </svg>
        <div className="border-t-2 flex place-content-around  dark:border-t w-full text-center mt-12 md:mt-24 py-2">
          ongoing
          <span className="bg-gray-300 rounded-sm px-2 text-xs items-center flex">
            2
          </span>
        </div>
      </div>
      <div className="border-2 dark:border rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col items-center md:pt-24 pt-12 my-2 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-12 h-12 md:w-24 md:h-24`}
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <div className="border-t-2 flex place-content-around  dark:border-t w-full text-center mt-12 md:mt-24 py-2">
          in review
          <span className="bg-gray-300 rounded-sm px-2 text-xs items-center flex">
            5
          </span>
        </div>
      </div>
      <div className="border-2 dark:border rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col items-center md:pt-24 pt-12 my-2 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-12 h-12 md:w-24 md:h-24`}
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <div className="border-t-2 flex place-content-around  dark:border-t w-full text-center mt-12 md:mt-24 py-2">
          done
          <span className="bg-gray-300 rounded-sm px-2 text-xs items-center flex">
            12
          </span>
        </div>
      </div>
    </>
  );
}
