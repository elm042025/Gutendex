import missingCover from "../assets/missing-image.svg";
import styles from "./BookCard.module.css";

import { useFavorites } from "../context/FavoritesContext.jsx";
import { Link } from "react-router-dom";

// ! ---------------------- !

export default function BookCard({ id, cover, title, authorName }) {
   const { isFavorite, toggleFavorite } = useFavorites();
   const fav = isFavorite(id);

   return (
      <article className={styles.bookCard}>
         <Link
            to={`/book/${id}`}
            aria-label={`Open details for ${title}`}
         >
            <img
               src={cover || missingCover}
               alt={title || "Book Cover"}
               title={title || "Unknown Title"}
               loading="lazy"
               onError={(e) => {
                  e.target.src = missingCover;
               }}
            />
         </Link>
         <section
            className={styles.bookInfo}
            title={title || "Unknown Title"}
         >
            <h5 className={styles.bookTitle}>{`${title || "Unknown Title"}`}</h5>
            <p className={styles.bookAuthor}>By: {authorName || "Unknown Author"}</p>
         </section>
         <button
            className={styles.favoriteButton + (fav ? " " + styles.favorited : "")}
            title={fav ? "Remove from favorites" : "Add to favorites"}
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            onClick={() => toggleFavorite({ id, title, authorName, cover })}
         >
            <span>{fav ? "★ " : "☆ "}</span>
            {fav ? "Remove favorite" : "Add favorite"}
         </button>
      </article>
   );
}
