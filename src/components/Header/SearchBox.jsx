import React from 'react'
import { IoSearch } from 'react-icons/io5'

function SearchBox({onclickfn}) {

  function onSubmit (e){
    e.preventDefault();
    onclickfn?.();
  }

  return (
    <form className='container text-lg md:text-xl w-full mt-2 flex rounded overflow-hidden '>
      <input type="text" name="" id="" className='w-[92%] px-2 md:px-4 text-gray-950 py-2 bg-white md:py-4 outline-none border-none ' placeholder='Search gifs and skickers' />
      <button onClick={onSubmit} type="submit" className='w-[8%] text-xl md:text-4xl grid place-content-center gradient outline-none border-none '><IoSearch /></button>
    </form>
  )
}

export default SearchBox
