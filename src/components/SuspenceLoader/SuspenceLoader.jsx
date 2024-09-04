import React from 'react'

function SuspenceLoader() {
  return (
    <div className='h-screen w-screen grid place-content-center'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

export default SuspenceLoader
