import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIdFromSlug, makeUniqueKeyFromSlug } from '../util/utilFn';
import { useQuery } from 'react-query';
import fetchGifDataById from '../services/fetchGifDataById';
import { GifState } from '../context/gif-Context';
import fetchSingleGifRelatedData from '../services/fetchSingleGifRelatedData';
import GifSideInfo from '../components/SingleGifComponents/GifSideInfo';
import SingleGifImage from '../components/SingleGifComponents/SingleGifImage';
import GifItem from '../components/GifItem/GifItem';

function SingleGIF() {

  const {text} = useParams();
  const [gifId, setGifId] = useState("");
  const {gf} = GifState();


  useEffect(() => {
    const id = getIdFromSlug(text);
    setGifId(id);
  }, [text])

  const {data : gifData, isLoading : gifLoading, isError : gifError, isFetched : gifFetched} = useQuery(["singleGif", gifId], () => fetchGifDataById(gf, gifId), {
    cacheTime : 60*1000*20,
    staleTime : 60*1000*20
  });

  const {data : relatedData, isLoading : relatedDataLoading, isError : relatedDataError, isFetched : relatedDataFetched} = useQuery(["relatedGif", gifId], () => fetchSingleGifRelatedData(gf, gifId), {
    cacheTime : 60*1000*20,
    staleTime : 60*1000*20,
  });


  return (
    <div className="w-full flex md:justify-between flex-col sm:flex-row gap-5 min-h-[400px] my-4 md:my-6">

      <div className='w-full md:w-[20%]'>
      {(gifLoading || gifError) && <div className='w-full h-[400px] skeleton'></div>} 
      {gifFetched && <GifSideInfo username={gifData?.user?.username} image={gifData?.user?.avatar_url} displayName={gifData?.user?.display_name} description={gifData.user?.description}/>}
      </div>

      <div className='w-full md:w-[60%] lg:w-[75%]'>
        <div className='w-full'>
          {(gifLoading || gifError) && <div className='w-full h-[400px] skeleton'></div>} 
          {gifFetched && <SingleGifImage name={gifData?.title} imageUrl={gifData?.embed_url} image={gifData?.images?.fixed_width?.webp} tags={gifData?.tags}/>}
        </div>

        <div className='w-full mt-4'>
            <p className='font-semibold text-gray-400 mb-4'>Related Gifs</p>
            <div className='columns-1 md:columns-2 lg:columns-3'>
                {(relatedDataLoading || relatedDataError) && <div className='h-40 skeleton'></div>}
                {relatedDataFetched && relatedData?.data.map(gifData => <GifItem data={gifData} key={makeUniqueKeyFromSlug(gifData?.slug)}/>)}
            </div>
        </div>
      </div>
      

    </div>
  )
}

export default SingleGIF
