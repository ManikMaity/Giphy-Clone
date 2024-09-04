/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { makeTextShorter } from "../../util/utilFn";
import { IoIosLink, IoMdCheckmark } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

function GifItemContainer({data, hover = true, onLinkClick, addedToFavorite, iconChange}) {
  return (
    <div className="relative group">
      <Link
        to={`/${data?.type || "type"}/${data?.slug || data?.id}`}
        className="group relative"
      >
        <div className="cursor-pointer w-full relative my-2">
          <img
            src={data?.images?.fixed_width?.webp}
            alt={data?.title}
            className="w-full object-cover rounded-md transition-all duration-300"
            loading="lazy"
          />

          <div className="w-full h-0 group-hover:h-[20%] bg-gradient-to-t from-[#00000071] absolute bottom-0 right-0 transition-all"></div>
          {hover && (
            <div className="w-full hidden group-hover:flex gap-4 items-center h-0 group-hover:h-[20%] absolute bottom-0 right-0 p-2 transition-all">
              <img
                className="h-full"
                src={data?.user?.avatar_url}
                alt={data?.user?.display_name}
                loading="lazy"
              />
              {data?.user?.display_name ? (
                <p className="font-bold text-base md:text-lg">
                  {makeTextShorter(data.user.display_name, 10)}
                </p>
              ) : (
                <p className="font-bold text-base lg:text-lg">
                  {makeTextShorter(data?.title, 15)}
                </p>
              )}
            </div>
          )}
        </div>
      </Link>

      {hover && (
        <div className="flex md:hidden md:group-hover:flex gap-1 text-xl items-center rounded-md bg-[#00000055] absolute top-[5%] right-[5%] transition-all h-12 w-20">
          {iconChange ? (
            <IoMdCheckmark className="w-1/2 h-full hover:bg-[#00000083] rounded p-2" />
          ) : (
            <IoIosLink
              className="w-1/2 h-full hover:bg-[#00000083] rounded p-2"
              onClick={onLinkClick}
            />
          )}
          <MdFavorite
            className="w-1/2 h-full hover:bg-[#00000083] rounded p-2"
            onClick={addedToFavorite}
          />
        </div>
      )}
    </div>
  );
}

export default GifItemContainer;
