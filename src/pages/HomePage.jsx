import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// ! ------------- components ------------- !
import PopularRow from "../components/PopularRow";
import FavoritesRow from "../components/FavoritesRow";
// ! ------------- Styles ------------- !
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

// ! ---------------------- !

export default function HomePage() {
   return (
      <section className={styles.landingPage}>
         <article className={styles.landingHero}>
            <section className={styles.landingText}>
               <h2>
                  Discover <br /> Timeless Stories
               </h2>
               <h3>
                  Explore the world's greatest literature from Project Gutenberg's vast collection. Search, save, and immerse yourself in classic works that
                  have shaped our culture.
               </h3>
               <Link
                  to="/explore"
                  className={styles.cta}
               >
                  Start Exploring
               </Link>
            </section>

            <section className={styles.landingAnimation}>
               <DotLottieReact
                  src="https://lottie.host/859903c1-79ea-4229-bc59-4dc51c3a7062/rcIhLwZb4W.lottie"
                  loop
                  autoplay
               />
            </section>
         </article>

         {/* Rows */}
         {/* <FavoritesRow /> */}
      </section>
   );
}
