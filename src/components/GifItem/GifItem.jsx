/* eslint-disable react/prop-types */
import React, {useState } from "react";
import {updatedFavInStorage } from "../../util/utilFn";
import { GifState } from "../../context/gif-Context";
import GifItemContainer from "./GifItemContainer";

function GifItem({ data, hover = true }) {

  const [iconChange, setIconChange] = useState(false);
  let { favorites, setFavorites } = GifState();

  function onLinkClick(e) {
    e.stopPropagation();
    navigator.clipboard.writeText(data?.embed_url);
    setIconChange(true);
    setTimeout(() => {
      setIconChange(false);
    }, 2000)
    console.log("Link copied");
  }


  function addedToFavorite(e) {
    e.stopPropagation();
    if(favorites.includes(data.id)){
      let updatedFavs = favorites.filter(favId => favId != data.id);
      setFavorites(updatedFavs);
      updatedFavInStorage(updatedFavs);
    }
    else {
      setFavorites([...favorites, data.id]);
      updatedFavInStorage(favorites);
    }
  }

 

  return (
    <GifItemContainer data={data} hover={hover} onLinkClick={onLinkClick} addedToFavorite={addedToFavorite} iconChange={iconChange}/>
  );
}

export default GifItem;
