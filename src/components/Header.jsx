import { Link } from "react-router-dom";
import Logo from "../assets/books-logo-icon.png";
import styles from "./Header.module.css";

export default function Header() {
   return (
      <header>
         <section className={styles.logo}>
            <img
               src={Logo}
               alt="icon of 3 books on the left and tilted book on the right, all resting on a surface"
            />
            <h1>Book Voyager</h1>
         </section>

         <nav>
            <ul>
               <li>
                  <Link to="/fiction">Fiction</Link>
               </li>
               <li>
                  <Link to="/mystery">Mystery</Link>
               </li>
               <li>
                  <Link to="/thriller">Thriller</Link>
               </li>
               <li>
                  <Link to="/romance">Romance</Link>
               </li>
               <li>
                  <Link to="/fantasy">Fantasy</Link>
               </li>
               <li>
                  <Link to="/morality">Morality</Link>
               </li>
               <li>
                  <Link to="/society">Society</Link>
               </li>
               <li>
                  <Link to="/power">Power</Link>
               </li>
               <li>
                  <Link to="/justice">Justice</Link>
               </li>
               <li>
                  <Link to="/adventure">Adventure</Link>
               </li>
               <li>
                  <Link to="/tragedy">Tragedy</Link>
               </li>
               <li>
                  <Link to="/war">War</Link>
               </li>
               <li>
                  <Link to="/philosophy">Philosophy</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}
