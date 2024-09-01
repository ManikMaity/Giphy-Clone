import React from 'react'
import { GifState } from '../context/gif-Context'
import GifItem from '../components/GifItem/GifItem'
import { makeUniqueKeyFromSlug } from '../util/utilFn'
import { IoMdTrendingUp } from 'react-icons/io'

function Favorites() {

  let {favorites, setFavorites} = GifState()

  return (
    <div>

<div className="flex gap-2 items-center text-lg text-gray-500 font-bold my-4">
          <IoMdTrendingUp className="text-blue-600" />
          <h2>Your Favorites</h2>
      </div>
      {favorites.length < 1 && <p className='text-center font-bold text-3xl mt-6 text-gray-400'>You dont have any favorites</p>}

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {favorites.length >= 1 && favorites.map((gif) => {
        return (<GifItem key={makeUniqueKeyFromSlug(gif.slug)} data={gif} />)
      })}
      </div>
    </div>
  )
}

export default Favorites
