import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./SearchStateSvgs.module.css";
export default function Loading() {
   return (
      <article className={styles.searchStateSvg}>
         <h2 aria-live="polite">Fetching data in progress...</h2>
         <DotLottieReact
            src="https://lottie.host/27b381e5-28e8-4b0a-a8a9-4c9cb271039b/JE7m5zdcv0.lottie"
            loop
            autoplay
         />
      </article>
   );
}
