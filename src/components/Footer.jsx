import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "../assets/books-logo-icon.svg";

export default function Footer() {
   const year = new Date().getFullYear();

   return (
      <footer
         className={styles.footer}
         role="contentinfo"
      >
         <div className={styles.inner}>
            {/* Brand / short blurb */}
            <section className={styles.brand}>
               <Link
                  to="/"
                  className={styles.brandLink}
                  aria-label="Book Voyager home"
               >
                  <img
                     src={Logo}
                     alt=""
                     className={styles.logo}
                  />
                  <span className={styles.title}>Book Voyager</span>
               </Link>
               <p className={styles.tagline}>Your gateway to classic literature.</p>
            </section>

            {/* Quick links */}
            <nav
               className={styles.links}
               aria-label="Footer"
            >
               <h3 className={styles.heading}>Explore</h3>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/favorites">Favorites</Link>
                  </li>
                  {/* If your routes use /category/:topic, these are example deep-links */}
                  <li>
                     <Link to="/category/Fiction">Fiction</Link>
                  </li>
                  <li>
                     <Link to="/category/Mystery">Mystery</Link>
                  </li>
                  <li>
                     <Link to="/category/Philosophy">Philosophy</Link>
                  </li>
               </ul>
            </nav>

            {/* Credits */}
            <section className={styles.credits}>
               <h3 className={styles.heading}>Credits</h3>
               <p className={styles.creditLine}>
                  Icons in UI provided by{" "}
                  <a
                     href="https://www.svgrepo.com/"
                     target="_blank"
                     rel="noreferrer noopener"
                  >
                     SVGRepo
                  </a>
                  . Favicon from{" "}
                  <a
                     href="https://www.flaticon.com/"
                     target="_blank"
                     rel="noreferrer noopener"
                  >
                     Flaticon
                  </a>
                  .
                  <p>
                     {" "}
                     Animations from{" "}
                     <a
                        href="https://lottiefiles.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                     >
                        LottieFiles
                     </a>
                     .
                  </p>
               </p>
               <p className={styles.creditLine}>
                  Data via the open{" "}
                  <a
                     href="https://gutendex.com/"
                     target="_blank"
                     rel="noreferrer noopener"
                  >
                     Gutendex API
                  </a>{" "}
                  (Project Gutenberg).
               </p>
               <p className={styles.creditNote}>
                  Full attributions listed in <code>CREDITS.md</code>.
               </p>
            </section>
         </div>

         {/* Bottom bar */}
         <div className={styles.bottomBar}>
            <p>© {year} Book Voyager · Built with React</p>
         </div>
      </footer>
   );
}
