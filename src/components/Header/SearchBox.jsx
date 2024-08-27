import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

function SearchBox() {

  const navigator = useNavigate();

  const [searchText, setSearchText] = useState("");

  function onSubmit (e) {
    e.preventDefault();
    if (searchText.trim() == ""){
      return;
    }
    const text = searchText;
    setSearchText("");
    navigator(`/search/${text}`)
  }

  return (
    <form className='container relative text-lg md:text-xl w-full mt-2 flex rounded overflow-hidden '>
      {searchText && <IoIosCloseCircle onClick={() => setSearchText("")} className=' md:text-2xl  absolute z-10 right-[13%] md:right-[10%] cursor-pointer top-1/2 translate-x-1/2 translate-y-[-50%] text-[#0000006c]' />}
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" name="" id="" className='w-[92%] px-2 md:px-4 text-gray-950 py-2 bg-white md:py-4 outline-none border-none ' placeholder='Search gifs and skickers' />
      <button onClick={onSubmit} type="submit" className='w-[8%] text-xl md:text-4xl grid place-content-center gradient outline-none border-none '><IoSearch /></button>
    </form>
  )
}

export default SearchBox
