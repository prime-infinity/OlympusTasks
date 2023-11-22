import ThemeSwitcher from "../components/UI/ThemeSwitcher";

export default function Homepage() {
  return (
    <div className="grid grid-cols-1">
      home page
      <div className="border col-span-1 md:col-span-2">
        <span className=""> home nav bar</span>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
