import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiDotsVertical } from "react-icons/hi";
import { FiAlignRight } from "react-icons/fi";
import SearchBox from "./SearchBox";

function Header() {
  const [categories, setCategories] = useState();
  return (
    <nav className="flex flex-col justify-center relative">
      <div className="flex items-center gap-4 h-10 justify-between mb-2">
        <Link className="flex gap-2 items-center" to="/">
          <img src={logo} className="w-8" alt="logo" />
          <h1 className="text-4xl font-extrabold leading-none">GIPHY</h1>
        </Link>

        {/* Rendering categories here  */}
        <Link
          to="/reaction"
          className=" hover:gradient transition-all h-full hidden md:grid place-content-center px-4 border-b-4"
        >
          Reaction
        </Link>


        <button onClick={() => setCategories(!categories)} className={`h-full w-8 ${categories ? "gradient" : ""} hover:gradient transition-all hidden md:block border-b-4`}>
          <HiDotsVertical className="h-full mx-auto" size={20} />
        </button>

        <div className="h-full bg-gray-700 grid place-content-center px-6 cursor-pointer rounded">
            <Link to="/favorites">Favorite GIF</Link>
        </div>


        <button className="block md:hidden">
          <FiAlignRight size={25} className="text-sky-400 "/>
        </button>
      </div>

      {categories && <div className="absolute right-0 top-14 px-10 py-6 rounded w-full gradient z-20">
        <span>Categories</span>
        <hr />
        <div>
          <Link >Reactions</Link>
        </div>
        </div>}

        <SearchBox/>
    </nav>
  );
}

export default Header;
