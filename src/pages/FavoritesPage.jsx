import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";
import NoDataFound from "../components/NoDataFound";
import styles from "./FavoritesPage.module.css"; // optional, see CSS below

export default function FavoritesPage() {
   const { favorites } = useFavorites();

   const count = favorites.length;

   return (
      <section className={styles.favoritesPage}>
         {count > 0 ? (
            <>
               <h2>Your Favorites {count > 0 ? `(${count})` : ""}</h2>
               <p className={styles.hint}>Click “Remove” on any card to unfavorite it.</p>
            </>
         ) : null}

         {count === 0 ? (
            <article className={styles.empty}>
               <p>
                  You haven’t added any books yet. Try the <Link to="/search?query=">search</Link> or pick a <Link to="/category/Fiction">category</Link>
               </p>
               <NoDataFound />
            </article>
         ) : (
            <section className={styles.favoritesResult}>
               {favorites.map((b) => (
                  <BookCard
                     key={b.id}
                     id={b.id}
                     cover={b.cover}
                     title={b.title}
                     authorName={b.authorName}
                  />
               ))}
            </section>
         )}
      </section>
   );
}
