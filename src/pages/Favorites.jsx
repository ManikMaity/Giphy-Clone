import React from "react";
import { GifState } from "../context/gif-Context";
import GifItem from "../components/GifItem/GifItem";
import { makeUniqueKeyFromSlug } from "../util/utilFn";
import { IoMdTrendingUp } from "react-icons/io";
import { useQuery } from "react-query";
import fetchGifsDataById from "../services/fetchGifsDataById";

function Favorites() {
  let { favorites, gf } = GifState();

  const {data : favGifsData, isLoading, isFetched, isError} = useQuery(["favgifs", favorites], () => fetchGifsDataById(gf, favorites), {
    cacheTime : 60*1000*20,
    staleTime : 60*1000*20
  })

  console.log(favorites, favGifsData);


  return (
    <div>
      <div className="flex gap-2 items-center text-lg text-gray-500 font-bold my-4">
        <IoMdTrendingUp className="text-blue-600" />
        <h2>Your Favorites</h2>
      </div>
      {favorites.length < 1 && (
        <p className="text-center font-bold text-3xl mt-6 text-gray-400">
          You dont have any favorites
        </p>
      )}

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {(isLoading || isError) && <div className="skeleton h-[80px]"></div>}
        {(favorites.length >= 1 && isFetched)  &&
          favGifsData.map((gif) => {
            return <GifItem key={makeUniqueKeyFromSlug(gif.slug)} data={gif} />;
          })}
      </div>
    </div>
  );
}

export default Favorites;
