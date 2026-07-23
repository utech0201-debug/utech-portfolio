"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";


export default function ThemeToggle(){

  const {
    theme,
    setTheme
  } = useTheme();


  return (

    <button

      onClick={() =>
        setTheme(
          theme === "dark"
          ? "light"
          : "dark"
        )
      }

      className="
      rounded-xl
      border
      border-white/10
      p-3
      transition
      hover:bg-white/10
      "

      aria-label="Toggle theme"

    >

      {
        theme === "dark"
        ?
        <Sun size={18}/>
        :
        <Moon size={18}/>
      }


    </button>

  );

}