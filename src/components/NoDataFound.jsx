import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// ! ------------- Styles ------------- !
import styles from "./NoDataFound.module.css";

export default function NoDataFound() {
   return (
      <article className={styles.NoDataFound}>
         <DotLottieReact
            src="https://lottie.host/21bb901e-e13a-40a0-ac13-d768af2e0038/YIZyiBybW1.lottie"
            loop
            autoplay
         />
      </article>
   );
}
