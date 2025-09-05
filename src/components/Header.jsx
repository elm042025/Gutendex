import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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

            {/* ----- Search button/form !hidden on desktop ----- */}

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
         </section>

         {/* -----Nav links----- */}

         <section className={styles.headerNav}>
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
