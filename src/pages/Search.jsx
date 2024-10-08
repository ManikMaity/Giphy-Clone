import { useParams } from 'react-router-dom'
import SortBtn from '../components/SearchComponents/SortBtn';
import { MdNavigateNext, MdOutlineGifBox } from 'react-icons/md';
import GifItem from '../components/GifItem/GifItem';
import HomeFilterChange from '../components/HomeFilterChange/HomeFilterChange';
import useCheckMobile from '../hooks/useCheckMobile';
import useFetchSearchData from '../hooks/useFetchSearchData';
import { GrFormPrevious } from 'react-icons/gr';
import { makeUniqueKeyFromSlug } from '../util/utilFn';

function Search() {


  const {isMobile} = useCheckMobile();
  const { text } = useParams();

  let {searchSort,
    setSearchSort,
    setPage,
    page,
    setFilter,
    data,
    isFetched,
    isLoading,
    isError} = useFetchSearchData(text)



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
        <div className='flex gap-3 justify-end md:w-2/3'>
          {isMobile == false && <HomeFilterChange/>}
        <SortBtn searchSort={searchSort} setSearchSort={setSearchSort}/>
        </div>
      </div>

      <div className='w-full flex flex-col gap-2 items-end mb-4'>
      <div className="join gap-2">
        <button className="join-item btn btn-sm" onClick={() => setPage(page-20)} disabled={page < 2}><GrFormPrevious /></button>
        <button className="join-item btn btn-sm" onClick={() => setPage(page + 20)}><MdNavigateNext /></button>
      </div>
      {isMobile && <HomeFilterChange/>}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {(isLoading || isError) && <div className="skeleton h-[800px] w-full"></div>}
      {isFetched && data.data.map(gifData => {
        return (<GifItem key={makeUniqueKeyFromSlug(gifData.slug)} data={gifData} />)
      } )}
      </div>


    </div>
  )
}

export default Search
