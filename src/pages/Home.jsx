import React from 'react'
import { GifState } from '../context/gif-Context';
import { useQuery } from 'react-query';
import fetchTrendingGifs from '../services/fetchTrendingGifs';
import HomeFilterChange from '../components/HomeFilterChange/HomeFilterChange';

function Home() {

  const { gf, filter, setFilter, favorites } = GifState();
  const {data} = useQuery(["trendingGifs", filter], () => fetchTrendingGifs(gf, filter), {
    cacheTime : 60*1000*20,
    staleTime : 60*100*20
  })

  console.log(data);

  return (
    <div className='w-full'>
        <HomeFilterChange/>
    </div>
  )
}

export default Home
