import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./Loading.module.css";
export default function Loading() {
   return (
      <article className={styles.loading}>
         <DotLottieReact
            src="https://lottie.host/62830973-a1ff-4d65-b2a7-21dcb079a5a4/k2GEhVUDga.lottie"
            loop
            autoplay
         />
      </article>
   );
}
