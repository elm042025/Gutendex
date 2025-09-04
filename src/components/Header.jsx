import { Link } from "react-router-dom";
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

            <section className={styles.searchForm}>
               <form>
                  <button
                     type="submit"
                     aria-label="Search"
                  >
                     <img
                        src={blackSearchIcon}
                        alt="Magnifier Search Icon"
                     />
                  </button>
                  <input
                     type="text"
                     placeholder="Search for a book..."
                     aria-label="Search for a book"
                  />
               </form>
            </section>
         </section>

         {/* -----Nav links----- */}

         <nav aria-label="Book Categories">
            <ul>
               <li>
                  <Link to="/fiction">
                     <img
                        src={fiction}
                        alt="Fiction Icon"
                     />
                     Fiction
                  </Link>
               </li>
               <li>
                  <Link to="/mystery">
                     <img
                        src={mystery}
                        alt="Mystery Icon"
                     />
                     Mystery
                  </Link>
               </li>

               <li>
                  <Link to="/thriller">
                     <img
                        src={thriller}
                        alt="Thriller Icon"
                     />
                     Thriller
                  </Link>
               </li>
               <li>
                  <Link to="/romance">
                     <img
                        src={romance}
                        alt="Romance Icon"
                     />
                     Romance
                  </Link>
               </li>
               <li>
                  <Link to="/fantasy">
                     <img
                        src={fantasy}
                        alt="Fantasy Icon"
                     />
                     Fantasy
                  </Link>
               </li>
               <li>
                  <Link to="/morality">
                     <img
                        src={morality}
                        alt="Morality Icon"
                     />
                     Morality
                  </Link>
               </li>
               <li>
                  <Link to="/society">
                     <img
                        src={society}
                        alt="Society Icon"
                     />
                     Society
                  </Link>
               </li>
               <li>
                  <Link to="/power">
                     <img
                        src={power}
                        alt="Power Icon"
                     />
                     Power
                  </Link>
               </li>
               <li>
                  <Link to="/justice">
                     <img
                        src={justice}
                        alt="Justice Icon"
                     />
                     Justice
                  </Link>
               </li>
               <li>
                  <Link to="/adventure">
                     <img
                        src={adventure}
                        alt="Adventure Icon"
                     />
                     Adventure
                  </Link>
               </li>
               <li>
                  <Link to="/tragedy">
                     <img
                        src={tragedy}
                        alt="Tragedy Icon"
                     />
                     Tragedy
                  </Link>
               </li>
               <li>
                  <Link to="/war">
                     <img
                        src={war}
                        alt="War Icon"
                     />
                     War
                  </Link>
               </li>
               <li>
                  <Link to="/philosophy">
                     <img
                        src={philosophy}
                        alt="Philosophy Icon"
                     />
                     Philosophy
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}
