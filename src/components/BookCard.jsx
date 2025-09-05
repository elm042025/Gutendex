import missingCover from "../assets/missing-image.svg";
import styles from "./BookCard.module.css";

import useFavorites from "../hooks/useFavorites";

export default function BookCard({ id, cover, title, authorName }) {
   const { isFavorite, toggleFavorite } = useFavorites();
   const fav = isFavorite(id);

   return (
      <article className={styles.bookCard}>
         <img
            src={cover || missingCover}
            alt={title || "Book Cover"}
            title={title || "Unknown Title"}
         />

         <section
            className={styles.bookInfo}
            title={title || "Unknown Title"}
         >
            <h3 className={styles.bookTitle}>{`${title || "Unknown Title"}`}</h3>
            <p>By: {authorName || "Unknown Author"}</p>
         </section>

         <button
            className={styles.favoriteButton}
            title={fav ? "Remove from favorites" : "Add to favorites"}
            onClick={() => toggleFavorite({ id, title, authorName, cover })}
         >
            {fav ? "★ " : "☆ "}
            {fav ? "Remove from favorites" : "Add to favorites"}
         </button>
      </article>
   );
}
