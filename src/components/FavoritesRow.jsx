import { useFavorites } from "../context/FavoritesContext.jsx";
import BookCard from "./BookCard";
import styles from "./Row.module.css";

export default function FavoritesRow() {
   const { favorites } = useFavorites();
   if (!favorites || favorites.length === 0) return null;

   return (
      <section className={styles.favoritesRow}>
         <h4 className={styles.rowTitle}>Your Favorites</h4>

         <section className={styles.rowScroller}>
            {favorites.map((b) => (
               <article
                  className={styles.rowItem}
                  key={b.id}
               >
                  <BookCard
                     key={b.id}
                     id={b.id}
                     cover={b.cover}
                     title={b.title}
                     authorName={b.authorName}
                  />
               </article>
            ))}
         </section>
      </section>
   );
}
