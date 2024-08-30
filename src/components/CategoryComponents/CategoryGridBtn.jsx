import React from 'react'
import { GiStack } from 'react-icons/gi'
import { RiLayoutGrid2Fill } from 'react-icons/ri'

function CategoryGridBtn({changeAlign}) {
  return (
    <div className='flex gap-1 items-center'>
      <button className='btn btn-xs'><RiLayoutGrid2Fill onClick={() => changeAlign("col")}/></button>
      <button className='btn btn-xs' onClick={() => changeAlign("row")}><GiStack /></button>
    </div>
  )
}

export default CategoryGridBtn
