import BottomNavBar from "../components/navigation/BottomNavBar";
import SideBar from "../components/navigation/SideBar";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden md:block">
        {" "}
        {/* Show on md screens and above */}
        <SideBar />
      </div>
      <div className="block md:hidden">
        {" "}
        {/* Show on mobile screens only */}
        <BottomNavBar />
      </div>
      <div className="md:ml-24 px-4 md:px-32 border">
        <main>{children}</main>
      </div>
    </>
  );
}
