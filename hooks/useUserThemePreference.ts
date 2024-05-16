// hooks/useUserThemePreference.ts
import { useState, useEffect } from "react";

type ThemeType = "light" | "dark";

function useUserThemePreference(): [ThemeType, (theme: ThemeType) => void] {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as ThemeType;
      return savedTheme || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme];
}

export default useUserThemePreference;
