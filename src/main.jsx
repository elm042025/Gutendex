import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//!  ----- context ------ !
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

// ! ----- Components and pages ----- !

import HomePage from "./pages/HomePage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import App from "./App.jsx";

// ! ----- Styles ----- !

import "./index.css";

//! ---------------------- !

const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <App />,
         children: [
            { index: true, element: <HomePage /> },
            { path: "search", element: <SearchResultsPage /> },
            { path: "category/:categoryName", element: <CategoryPage /> },
            { path: "favorites", element: <FavoritesPage /> },
            { path: "explore", element: <ExplorePage /> },
            { path: "book/:id", element: <BookDetails /> },
            { path: "*", element: <PageNotFound /> },
         ],
      },
   ],
   { basename: import.meta.env.BASE_URL } // -> "/Gutendex/" from vite.config.js
);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <FavoritesProvider>
         <RouterProvider router={router} />
      </FavoritesProvider>
   </StrictMode>
);
