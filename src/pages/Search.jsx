import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-Context';
import { useQuery } from 'react-query';
import fetchSearchData from '../services/fetchSearchData';
import SortBtn from '../components/SearchComponents/SortBtn';
import { MdOutlineGifBox } from 'react-icons/md';
import GifItem from '../components/GifItem/GifItem';
import HomeFilterChange from '../components/HomeFilterChange/HomeFilterChange';

function Search() {

  const { text } = useParams();
  const [searchSort, setSearchSort] = useState("relevant");
  const [page, setPage] = useState(1);

  const { gf, filter, setFilter, favorites } = GifState();

  const {data, isFetched, isLoading, isError} = useQuery(["search", text, filter, searchSort, page], () => fetchSearchData(gf, text, searchSort, 20, filter, page), {
    cacheTime : 60*1000*20,
    staleTime : 60*1000*20
  })

  console.log(data)

  return (
    <div className='w-full min-h-[400px] my-4 md:my-6'>
      
      <div className='w-full flex justify-between items-center mb-4 md:mb-6'>
        <div className='flex gap-4 items-baseline'>
        <h2 className='font-extrabold text-2xl md:text-4xl'>{text}</h2>
        {isFetched && <p className='font-light flex items-center gap-1'>{data?.pagination?.total_count} Gifs
        <MdOutlineGifBox />
          </p>}
        </div>
        <div className='md:flex gap-3 justify-end hidden md:w-2/3'>
          <HomeFilterChange/>
        <SortBtn searchSort={searchSort} setSearchSort={setSearchSort}/>
        </div>
      </div>

      <div className='w-full md:hidden block mb-4'>
      <HomeFilterChange/>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {(isLoading || isError) && <div className="skeleton h-[800px] w-full"></div>}
      {isFetched && data.data.map(gifData => {
        return (<GifItem key={gifData.slug} data={gifData} />)
      } )}
      </div>


    </div>
  )
}

export default Search
