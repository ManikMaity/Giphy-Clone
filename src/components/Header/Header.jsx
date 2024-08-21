import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"

function Header() {

  const [categories, setCategories] = useState()
  return (
    <nav>


      <div className='flex items-center gap-4 justify-between mb-2'>
        <Link className='flex gap-2 items-center' to="/">
          <img src={logo} className='w-8' alt="logo" />
          <h1 className='text-4xl font-extrabold leading-none'>GIPHY</h1>
        </Link>

      <Link to="/reaction" className='px-4 py-1 hover:gradient transition-all hidden md:block border-b-4'>Reaction</Link>


      </div>


    </nav>
  )
}

export default Header
