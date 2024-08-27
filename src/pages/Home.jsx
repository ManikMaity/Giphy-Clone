import React from "react";
import { GifState } from "../context/gif-Context";
import { useQuery } from "react-query";
import fetchTrendingGifs from "../services/fetchTrendingGifs";
import HomeFilterChange from "../components/HomeFilterChange/HomeFilterChange";
import { IoMdTrendingUp } from "react-icons/io";
import GifItem from "../components/GifItem/GifItem";

function Home() {
  const { gf, filter, setFilter, favorites } = GifState();

  const { data : gifs, isLoading, isError } = useQuery(
    ["trendingGifs", filter],
    () => fetchTrendingGifs(gf, filter, 30),
    
    {
      cacheTime: 60 * 1000 * 20,
      staleTime: 60 * 100 * 20,
    }
  );

  console.log(gifs);

  return (
    <div className="w-full">

      <div className="flex items-center justify-between my-2">
        <div className="hidden md:flex gap-2 items-center text-lg text-gray-500 font-bold">
          <IoMdTrendingUp className="text-blue-600" />
          <h2>Trending</h2>
        </div>

        <HomeFilterChange />
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {(isLoading || isError) && <div className="skeleton h-[800px] w-full"></div>}
      {gifs && gifs.map((gif) => {
        return (<GifItem key={gif.slug} data={gif} />)
      })}
      </div>

    </div>
  );
}

export default Home;
