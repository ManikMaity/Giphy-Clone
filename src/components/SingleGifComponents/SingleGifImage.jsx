import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

function SingleGifImage({ name = "", image, tags = [], imageUrl, views }) {
  const [iconChange, setIconChange] = useState(false);
  const defaultTags = ["gif", "giphy", "manik"];

  // function onLinkClick(e) {
  //   e.stopPropagation();
  //   navigator.clipboard.writeText(imageUrl);
  //   setIconChange(true);
  //   setTimeout(() => {
  //     setIconChange(false);
  //   }, 2000);
  //   console.log("Link copied");
  // }

  return (
    <div className="w-full p-2">
      <p className="font-semibold text-gray-400 mb-3">{name}</p>
      <div className="w-full flex flex-col gap-4 md:flex-row">
        <img className="w-full rounded-md max-w-[600px]" src={image} alt="" />


          <div className="flex md:flex-col gap-2">
            <button className="btn btn-ghost md:btn-lg gap-3">
              <FaHeart /> <p>Favorite</p>
            </button>
            <button className="btn btn-ghost md:btn-lg gap-3">
              <RiShareForwardFill className="text-xl"/> <p>Share</p>
            </button>
        </div>
      </div>

    <div className="flex flex-wrap gap-3 mt-4">
      {tags.length > 1 ? tags.map((tag, i) => <div key={i} className="btn">#{tag}</div>) : defaultTags.map((tag, i) => <div key={i} className="btn">#{tag}</div>)}
    </div>
    </div>
  );
}

export default SingleGifImage;
