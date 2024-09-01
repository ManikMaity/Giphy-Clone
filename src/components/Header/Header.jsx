import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiDotsVertical } from "react-icons/hi";
import { FiAlignRight } from "react-icons/fi";
import SearchBox from "./SearchBox";
import { GifState } from "../../context/gif-Context";
import { useQuery } from "react-query";
import fetchGifCategories from "../../services/fetchGifCategories";
import useCheckMobile from "../../hooks/useCheckMobile";

function Header() {
  const { gf, favorites, showCategories, setShowCategories } = GifState();

  const { isMobile } = useCheckMobile();

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery(["coin"], () => fetchGifCategories(gf), {
    cacheTime: 1000 * 60 * 20,
    staleTime: 1000 * 60 * 20,
  });


  return (
    <nav className="flex flex-col justify-center relative">
      <div className="flex items-center gap-1 h-10 justify-between mb-2">
        <Link className="flex gap-2 items-center" to="/">
          <img src={logo} className="w-8" alt="logo" />
          <h1 className="text-4xl font-extrabold leading-none">GIPHY</h1>
        </Link>

        <div className="flex gap-4 h-full">
          {categoriesLoading && (
            <div className="h-full md:w-[400px] rounded skeleton"></div>
          )}
          {categories &&
            categories.slice(0, 5).map((category) => {
              return (
                <Link
                  key={category?.name}
                  to={`/${category.name_encoded}`}
                  className=" hover:gradient transition-all h-full hidden md:grid place-content-center px-4 border-b-4"
                >
                  {category?.name}
                </Link>
              );
            })}

          <button
            onClick={() => setShowCategories(!showCategories)}
            className={`h-full w-8 ${
              showCategories ? "gradient" : ""
            } hover:gradient transition-all hidden md:block border-b-4`}
          >
            <HiDotsVertical className="h-full mx-auto" size={20} />
          </button>

          {favorites.length > 0 && (
            <div className="h-full bg-gray-700 grid place-content-center px-6 cursor-pointer rounded">
              <Link to="/favorites">Favorite GIF</Link>
            </div>
          )}

          <button  onClick={() => setShowCategories(!showCategories)} className="block md:hidden">
            <FiAlignRight size={25} className="text-sky-400 " />
          </button>
        </div>
      </div>

      {showCategories && categories && (
        <div className="absolute right-0 top-14 px-10 pt-6 pb-10 rounded w-full gradient z-20">
          <span className="text-3xl font-extrabold">Categories</span>
          <hr className="my-5"/>
          
          <div className="grid grid-cols-2 md:grid-cols-5 text-lg font-semibold">
          {(categories && isMobile == false)  &&
            categories.slice(5).map((category) => {
              return (
                <Link className="leading-loose" key={category?.name} to={`/${category.name_encoded}`}>
                  {category?.name}
                </Link>
              );
            })}

          {(categories && isMobile == true)  &&
            categories.map((category) => {
              return (
                <Link className="leading-loose" key={category?.name} to={`/${category.name_encoded}`}>
                  {category?.name}
                </Link>
              );
            })}

          </div>

        </div>
      )}

      <SearchBox />
    </nav>
  );
}

export default Header;
