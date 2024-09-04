import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
const Categories = lazy(() => import("./pages/Categories"));
const Search = lazy(() => import("./pages/Search"));
const SingleGIF = lazy(() => import("./pages/SingleGIF"));
const Favorites = lazy(() => import("./pages/Favorites"));

import GifProvider from "./context/gif-Context";
import SuspenceLoader from "./components/SuspenceLoader/SuspenceLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:categories",
        element: (
          <Suspense fallback={<SuspenceLoader />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/search/:text",
        element: (
          <Suspense fallback={<SuspenceLoader />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/:type/:text",
        element: (
          <Suspense fallback={<SuspenceLoader />}>
            <SingleGIF />
          </Suspense>
        ),
      },
      {
        path: "/favorites",
        element: (
          <Suspense fallback={<SuspenceLoader />}>
            <Favorites />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
