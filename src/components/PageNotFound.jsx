import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// ! ------------- Styles ------------- !
import styles from "./SearchStateSvgs.module.css";

export default function PageNotFound() {
   return (
      <article className={styles.searchStateSvg}>
         <h2 aria-live="polite">404 - Page Not Found</h2>
         <DotLottieReact
            src="https://lottie.host/2cfbe6f0-1b4d-437a-972d-470287868362/afkk91MfFv.lottie"
            loop
            autoplay
         />
      </article>
   );
}
