import missingCover from "../assets/missing-image.svg";
import styles from "./BookCard.module.css";

import { useState } from "react";

export default function BookCard({ cover, title, authorName }) {
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
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            onClick={handleFavoriteClick}
         >
            {isFavorite ? "★ " : "☆ "}
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
         </button>
      </article>
   );
}
