import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const GifContext = createContext();



const GifProvider = ({children}) => {

  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gif");
  const [favorites, setFavorites] = useState([]);
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  return <GifContext.Provider value={{gf, gifs, setGifs, favorites, setFavorites, filter, setFilter}}>
    {children}
  </GifContext.Provider>
};

export const GifState = () => {
  return useContext(GifContext);
}

export default GifProvider;