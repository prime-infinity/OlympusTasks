"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      the current theme is: <span className="font-bold">{theme}</span>{" "}
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {/*<option value="system">System</option>*/}
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
