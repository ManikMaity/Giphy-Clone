import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-Context';
import fetchCatagoryData from '../services/fetchCatagoryData';
import useCheckMobile from '../hooks/useCheckMobile';
import HomeFilterChange from '../components/HomeFilterChange/HomeFilterChange';
import { MdOutlineGifBox } from 'react-icons/md';
import GifItem from '../components/GifItem/GifItem';

function Categories() {

  const { categories } = useParams();
  const {isMobile} = useCheckMobile();

  const { gf} = GifState()

  const {data : categoryData, isFetched, isLoading, isError} = useQuery(["categories", categories], () => fetchCatagoryData(gf, categories), {
    cacheTime : 60*1000*20,
    staleTime : 60*1000*20
  })

  console.log(categoryData)

  return (
    
    <div className='w-full flex flex-col sm:flex-row gap-5 min-h-[400px] my-4 md:my-6'>

        <div className='w-full sm:w-72'>
          <div>
          {isLoading || isError && <div className='w-full h-[200px] skeleton'></div>}
          {categoryData?.data && <div>
            <GifItem hover={false} data={categoryData?.data[0]}/>
            <p className='font-extralight'>{categoryData?.data[0]?.title}</p>
            </div>}
            </div>

            <div className='divider'></div>
        </div>


      <div className='w-full flex flex-col justify-between mb-4 md:mb-6'>
        <div className='flex gap-4 items-baseline'>
        <h2 className='font-extrabold text-2xl md:text-4xl'>{`${categories.slice(0, 1).toUpperCase()}${categories.slice(1)}`} GIFs</h2>
        {isFetched && <p className='font-light flex items-center gap-1'>{categoryData?.pagination?.total_count} Gifs
        <MdOutlineGifBox />
          </p>}
        </div>
        
      </div>



      
    </div>
  )
}

export default Categories
