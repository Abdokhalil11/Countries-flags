'use client';
import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline} from "react-icons/io5";


export default function Header() {
  const [dark, setDark] = useState(true);

  const modeHandling = function () {
    setDark(!dark);
    
    document.body.setAttribute("theme", dark ? "dark" : "light");
  };

  return (
    <header className="shadow-md shadow-shadow-color bg-seconde-background">
      <div className="container flex items-center justify-between py-3">
        <h1 className="text-lg lg:text-2xl text-main-color font-extrabold">
          Where in the world?
        </h1>
        <button className="flex items-center justify-between gap-2 text-md lg:text-lg text-main-color font-semibold" onClick={modeHandling}>
          { dark ? <IoMoonOutline   className="text-lg lg:text-2xl"/> : <IoSunnyOutline className="text-lg lg:text-2xl"/>}
          { dark ? "dark" : "light" } Mode
        </button>
      </div>
    </header>
  );
}
