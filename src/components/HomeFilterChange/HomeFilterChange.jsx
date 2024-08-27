import React from 'react'
import { GifState } from '../../context/gif-Context'

function HomeFilterChange() {

    const {filter, setFilter} = GifState();
    
    function changeFilter(e){
        setFilter(e.target.value);
    }
    
  return (
    <div className="flex gap-2 w-full md:max-w-[400px] bg-gray-800 rounded-full">

    <label htmlFor="gifs" className="cursor-pointer w-1/2">
        <input type="radio" name="radio-4" id="gifs" value="gifs" checked={filter == "gifs"} onChange={changeFilter} className="peer sr-only" />
        <div className="w-full h-full py-2 grid place-content-center transition-all bg-transparent rounded-full peer-checked:gradient">Gifs</div>
    </label>

    <label htmlFor="stickers" className="cursor-pointer w-1/2">
        <input type="radio" name="radio-4" id="stickers" checked={filter == "stickers"} onChange={changeFilter} value="stickers" className="peer sr-only" />
        <div className="w-full h-full py-2 grid place-content-center transition-all bg-transparent rounded-full peer-checked:gradient">Stickers</div>
    </label>

</div>
  )
}

export default HomeFilterChange
