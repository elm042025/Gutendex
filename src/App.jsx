
import { Outlet } from "react-router-dom";

// ! ----- Components ----- !

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// ! ----- Styles ----- !

import "./App.css";

// ! ---------------------- !

function App() {
   return (
      <>
         <ScrollToTop />
         <Header />

         <main>
            <Outlet />
         </main>

         <Footer />
      </>
   );
}

export default App;
