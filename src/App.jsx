import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import './App.css'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
const Categories = lazy(() => import("./pages/Categories"));
const Search = lazy(() => import("./pages/Search"));
const SingleGIF = lazy(() => import("./pages/SingleGIF"));
const Favorites = lazy(() => import("./pages/Favorites"));

import GifProvider from './context/gif-Context'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children : [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/:categories",
        element: <Categories/>
      },
      {
        path:"/search/:text",
        element: <Search/>
      },
      {
        path:"/:type/:text",
        element: <SingleGIF/>
      },
      {
        path:"/favorites",
        element: <Favorites/>
      },
    ]
  }
])


function App() {

  return (

    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
  )
}

export default App
