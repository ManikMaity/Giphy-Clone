import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-Context';
import { useQuery } from 'react-query';
import fetchSearchData from '../services/fetchSearchData';
import SortBtn from '../components/SearchComponents/sortBtn';

function Search() {

  const { text } = useParams();
  const [searchSort, setSearchSort] = useState("relevant");
  const [page, setPage] = useState(1);

  const { gf, filter, setFilter, favorites } = GifState();

  const {data} = useQuery(["search", text, filter, searchSort, page], () => fetchSearchData(gf, text, searchSort, 20, filter, page), {
    cacheTime : 60*1000*20,
    staleTime : 60*1000*20
  })

  return (
    <div className='w-full min-h-[400px] my-6'>
      
      <div className='w-full flex justify-between items-center'>
        <h2 className='font-extrabold text-2xl md:text-4xl'>{text}</h2>
        <SortBtn searchSort={searchSort} setSearchSort={setSearchSort}/>
      </div>


    </div>
  )
}

export default Search
