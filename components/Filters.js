"use client";
import SearchBar from "./SearchBar";
import { regions } from "constant/index";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export default function Filters() {
  const router = useRouter();

  const searchHandling = (type, value) => {
    const searchParams = new URLSearchParams(location.search);
    if (value) {
      searchParams.set(type, value);
    } else {
      searchParams.delete(type);
    }
    const pathName = `${location.pathname}?${searchParams}`;
    router.push(pathName);
  };

  const regionMap = regions.map((region) => (
    <option value={region.value} key={region.name}>
      {region.name}
    </option>
  ));

  return (
    <div className="py-10 ">
      <div className="container flex-col lg:flex-row gap-5 items-start flex lg:items-center justify-between">
        <SearchBar searchHandling={searchHandling} />
        <div className="w-[10rem] h-[2.5rem] bg-seconde-background relative flex">
          <select
            onChange={(e) => searchHandling("region", e.target.value)}
            className=" rounded appearance-none flex-1 outline-none pl-3 bg-main-background
          text-main-color shadow-md shadow-shadow-color"
          >
            {regionMap}
          </select>
          <IoIosArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
      </div>
    </div>
  );
}
