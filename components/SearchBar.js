"use client";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ searchHandling }) {
  return (
    <form className="lg:w-[350px] w-full">
      <div className="flex items-center justify-between gap-2 bg-seconde-background px-3 shadow-md">
        <label htmlFor="countrySearch">
          <IoSearch />
        </label>
        <input
          type="text"
          name="countryName"
          id="countrySearch"
          placeholder="Search for country"
          className=" w-full  h-[2.5rem] px-3 focus:outline-none bg-seconde-background text-main-color"
          onChange={(e) => {
            searchHandling("countryName", e.target.value);
          }}
        />
      </div>
    </form>
  );
}
