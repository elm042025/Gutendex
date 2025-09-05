import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// ! ------------- Assets ------------- !
import Logo from "../assets/books-logo-icon.svg";
import blackSearchIcon from "../assets/searchBlack.svg";
import fiction from "../assets/fiction.svg";
import mystery from "../assets/mystery.svg";
import thriller from "../assets/thriller.svg";
import romance from "../assets/romance.svg";
import fantasy from "../assets/fantasy.svg";
import morality from "../assets/morality.svg";
import society from "../assets/society.svg";
import power from "../assets/power.svg";
import justice from "../assets/justice.svg";
import adventure from "../assets/adventure.svg";
import tragedy from "../assets/tragedy.svg";
import war from "../assets/war.svg";
import philosophy from "../assets/philosophy.svg";
import star from "../assets/star.svg";
// ! ------------- Styles ------------- !
import styles from "./Header.module.css";

export default function Header() {
   const navigate = useNavigate();
   const [searchQuery, setSearchQuery] = useState("");

   //    ! ------ Handle search form submit by navigating to search results (no api call yet) ------ !

   function handleSearchFormSubmit(event) {
      event.preventDefault();
      if (searchQuery.trim()) {
         navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
         setSearchQuery("");
      }
   }
   //! ------  required categories to map over for less repetition ------ !
   const categories = [
      { name: "Fiction", icon: fiction },
      { name: "Mystery", icon: mystery },
      { name: "Thriller", icon: thriller },
      { name: "Romance", icon: romance },
      { name: "Fantasy", icon: fantasy },
      { name: "Morality", icon: morality },
      { name: "Society", icon: society },
      { name: "Power", icon: power },
      { name: "Justice", icon: justice },
      { name: "Adventure", icon: adventure },
      { name: "Tragedy", icon: tragedy },
      { name: "War", icon: war },
      { name: "Philosophy", icon: philosophy },
   ];

   //! ------- hidden nav bar on scroll down, shows on scroll up ------- !

   const [navHidden, setNavHidden] = useState(false);
   const lastYRef = useRef(typeof window !== "undefined" ? window.scrollY : 0);

   useEffect(() => {
      if (typeof window === "undefined") return;

      function onScroll() {
         const y = window.scrollY;
         const last = lastYRef.current;
         const delta = Math.abs(y - last);

         if (delta < 8) return; // ignore tiny jitters

         const goingDown = y > last;

         if (goingDown && y > 120) {
            setNavHidden(true); // hide when scrolling down past header
         } else {
            setNavHidden(false); // show on any upward scroll (or near top)
         }

         lastYRef.current = y; // always update the ref
      }

      window.addEventListener("scroll", onScroll, { passive: true });

      //!------ Cleanup listener on unmount ----- !

      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   //! --------------------------Render-------------------------- !

   return (
      <header>
         <section className={styles.headerTop}>
            {/* -----Logo img, h1 and p----- */}

            <section className={styles.logo}>
               <Link to="/">
                  <img
                     src={Logo}
                     alt="logo icon of 2 books on the left and a tilted book on the right"
                  />
                  <section className={styles.logoText}>
                     <h1>Book Voyager</h1>
                     <p>Your gateway to classic literature</p>
                  </section>
               </Link>
            </section>

            {/* ----- Search button/form  ----- */}

            <section className={styles.headerSearchForm}>
               <form onSubmit={handleSearchFormSubmit}>
                  <button
                     type="submit"
                     aria-label="Search"
                  >
                     <img
                        src={blackSearchIcon}
                        alt=""
                        aria-hidden="true"
                     />
                  </button>
                  <input
                     type="text"
                     placeholder="Search for a book or an author..."
                     aria-label="Search for a book or an author..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </form>
            </section>

            {/* ----- Favorites link ----- */}

            <Link
               to="/favorites"
               className={styles.favoritesLink}
            >
               <span
                  role="img"
                  aria-label="Favorites"
               >
                  <img
                     src={star}
                     alt="Star icon"
                  />
               </span>
               Favorites
            </Link>
         </section>

         {/* -----Nav links----- */}

         <section
            className={`${styles.headerNav}
         ${navHidden ? styles.hideNav : ""}`}
         >
            <nav aria-label="Book Categories">
               <ul>
                  {categories.map((category) => (
                     <li key={category.name}>
                        <Link to={`/category/${category.name}`}>
                           <img
                              src={category.icon}
                              alt={""}
                              aria-hidden="true"
                           />
                           {category.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </section>
      </header>
   );
}
