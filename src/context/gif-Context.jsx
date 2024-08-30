import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const GifContext = createContext();



const GifProvider = ({children}) => {

  const [gifs, setGifs] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  return <GifContext.Provider value={{gf, showCategories, setShowCategories, gifs, setGifs, favorites, setFavorites, filter, setFilter}}>
    {children}
  </GifContext.Provider>
};

export const GifState = () => {
  return useContext(GifContext);
}

export default GifProvider;