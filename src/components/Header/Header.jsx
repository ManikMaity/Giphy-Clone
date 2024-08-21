import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiDotsVertical } from "react-icons/hi";

function Header() {
  const [categories, setCategories] = useState();
  return (
    <nav>
      <div className="flex items-center gap-4 h-10 justify-between mb-2">
        <Link className="flex gap-2 items-center" to="/">
          <img src={logo} className="w-8" alt="logo" />
          <h1 className="text-4xl font-extrabold leading-none">GIPHY</h1>
        </Link>

        {/* Rendering categories here  */}
        <Link
          to="/reaction"
          className="px-4 py-1 hover:gradient transition-all hidden md:block border-b-4"
        >
          Reaction
        </Link>


        <button onClick={() => setCategories(!categories)} className={`h-full w-8 ${categories ? "gradient" : ""} hover:gradient transition-all hidden md:block border-b-4`}>
          <HiDotsVertical className="h-full mx-auto" size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Header;
