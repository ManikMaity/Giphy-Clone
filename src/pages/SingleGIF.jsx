import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIdFromSlug } from '../util/utilFn';
import { useQuery } from 'react-query';
import fetchGifDataById from '../services/fetchGifDataById';
import { GifState } from '../context/gif-Context';
import fetchSingleGifRelatedData from '../services/fetchSingleGifRelatedData';

function SingleGIF() {

  const {type, text} = useParams();
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



  console.log(gifData);
  console.log(relatedData);



  return (
    <div className="w-full flex flex-col sm:flex-row gap-5 min-h-[400px] my-4 md:my-6">
      
    </div>
  )
}

export default SingleGIF
