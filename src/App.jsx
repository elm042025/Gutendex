import { useState } from "react";
import { Outlet } from "react-router-dom";

// ! ----- Components ----- !

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// ! ----- Styles ----- !

import "./App.css";

// ! ---------------------- !

function App() {
   return (
      <>
         <Header />

         <main>
            <Outlet />
         </main>

         <Footer />
      </>
   );
}

export default App;
