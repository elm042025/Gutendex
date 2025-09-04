import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ! ----- Components ----- !

import PageNotFound from "./components/PageNotFound.jsx";
import HomePage from "./pages/HomePage.jsx";
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
            { path: "*", element: <PageNotFound /> }, // keeps your layout
         ],
      },
   ],
   { basename: import.meta.env.BASE_URL } // -> "/Gutendex/" from vite.config.js
);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
