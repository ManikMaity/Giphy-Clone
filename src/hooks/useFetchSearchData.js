import { useState } from "react";
import { GifState } from "../context/gif-Context";
import { useQuery } from "react-query";
import fetchSearchData from "../services/fetchSearchData";

function useFetchSearchData(text) {
  const [searchSort, setSearchSort] = useState("relevant");
  const [page, setPage] = useState(1);
  const { gf, filter, setFilter, favorites } = GifState();

  const {data, isFetched, isLoading, isError} = useQuery(["search", text, filter, searchSort, page], () => fetchSearchData(gf, text, searchSort, 20, filter, page), {
    cacheTime : 60*1000*20,
    staleTime : 60*1000*20
  })

  return {
    searchSort,
    setSearchSort,
    page,
    setPage,
    setFilter,
    data,
    isFetched,
    isLoading,
    isError
  }

}

export default useFetchSearchData
