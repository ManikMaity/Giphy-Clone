/* eslint-disable react/prop-types */
import { RiVerifiedBadgeFill } from "react-icons/ri"
import CategorySocial from "../CategoryComponents/CategorySocial"
import { makeTextShorter } from "../../util/utilFn"

function GifSideInfo({username = "unknown", image, description = "", displayName = "User"}) {

  return (
    <div className="p-2  text-sm">
      <div className="flex h-14 gap-3">
        <img className="h-full " src={image} alt={displayName} />
        <div className=" flex flex-col h-full">
            <h4 className="font-bold">{displayName}</h4>
            <p className="flex items-center gap-2 font-serif text-gray-500 hover:text-white">@{username}<RiVerifiedBadgeFill className="text-blue-500"/></p>
        </div>

        
      </div>
      <p className=" text-gray-400 mt-4">{makeTextShorter(description, 200)}</p>
      <div className="divider"></div>
      <div className="hidden md:block">
      <CategorySocial/>
      </div>
    </div>
  )
}

export default GifSideInfo
