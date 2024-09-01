import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Search from './pages/Search'
import SingleGIF from './pages/SingleGIF'
import Favorites from './pages/Favorites'
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
