import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// ! ------------- components ------------- !
import PopularRow from "../components/PopularRow";
import FavoritesRow from "../components/FavoritesRow";
// ! ------------- Styles ------------- !
import styles from "./HomePage.module.css";

// ! ---------------------- !

export default function HomePage() {
   return (
      <section className={styles.landingPage}>
         <article className={styles.landingHero}>
            <section className={styles.landingText}>
               <h2>Unlock the world's greatest stories.</h2>
               <h3>Search, explore, and save timeless classics from Project Gutenberg's vast collection.</h3>
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
         <FavoritesRow />
      </section>
   );
}
