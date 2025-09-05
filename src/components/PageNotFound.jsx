import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// ! ------------- Styles ------------- !
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
   return (
      <article className={styles.pageNotFound}>
         <DotLottieReact
            src="https://lottie.host/2cfbe6f0-1b4d-437a-972d-470287868362/afkk91MfFv.lottie"
            loop
            autoplay
         />
      </article>
   );
}
