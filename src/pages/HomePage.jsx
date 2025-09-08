import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import QuoteRow from "../components/QuoteRow.jsx";

// ! ------------- Styles ------------- !

import styles from "./HomePage.module.css";

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
         <QuoteRow title="Voices that inspire" />
      </section>
   );
}
