/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { makeTextShorter } from "../../util/utilFn";

function GifItem({ data }) {
  return (
    <Link to={`/${data?.type || "type"}/${data?.slug || data?.id}`} className="group">
      <div className="cursor-pointer w-full relative my-2">
        <img
          src={data?.images?.fixed_width?.webp}
          alt={data?.title}
          className="w-full object-cover rounded-md transition-all duration-300"
        />

        <div className="w-full h-0 group-hover:h-[20%] bg-gradient-to-t from-black absolute bottom-0 right-0 transition-all"></div>
        <div className="w-full hidden group-hover:flex gap-4 items-center h-0 group-hover:h-[20%] absolute bottom-0 right-0 p-2 transition-all">
            <img className="h-full" src={data?.user?.avatar_url} alt={data?.user?.display_name} />
            {data?.user?.display_name ? <p className="font-bold text-base md:text-lg">{makeTextShorter(data.user.display_name, 10)}</p> 
            : <p className="font-bold text-base lg:text-lg">{makeTextShorter(data?.title, 15)}</p>}
        </div>

      </div>
    </Link>
  );
}

export default GifItem;
