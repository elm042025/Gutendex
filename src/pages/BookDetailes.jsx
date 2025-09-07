import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import Loading from "../components/Loading";
import NoDataFound from "../components/NoDataFound";
import missingImage from "../assets/missing-image.svg";
import styles from "./BookDetails.module.css";

export default function BookDetail() {
   const { id } = useParams(); // book id from URL
   const [book, setBook] = useState(null);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState("");

   const { isFavorite, toggleFavorite } = useFavorites();

   useEffect(() => {
      if (!id) return;
      setLoading(true);
      setError("");

      // Fetch single book by id
      fetch(`https://gutendex.com/books/${encodeURIComponent(id)}/`)
         .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch book.");
            return res.json();
         })
         .then(setBook)
         .catch((e) => {
            console.error(e);
            setError("Could not load this book.");
            setBook(null);
         })
         .finally(() => setLoading(false));
   }, [id]);

   if (isLoading) return <Loading />;

   if (error)
      return (
         <section className={styles.wrap}>
            <p className={styles.error}>{error}</p>
            <NoDataFound />
            <Link
               to=".."
               relative="path"
               className={styles.backLink}
            >
               ← Back
            </Link>
         </section>
      );

   if (!book) return <NoDataFound />;

   const cover = book.formats?.["image/jpeg"] || missingImage;
   const title = book.title || "Unknown Title";
   const author = book.authors?.[0]?.name || "Unknown Author";
   const downloads = book.download_count ?? "—";
   const subjects = book.subjects || [];
   const languages = book.languages || [];
   const summary = book.summaries?.[0] || "No summary available.";

   // pick a best-available reading link
   const bestLink =
      book.formats?.["text/html"] ||
      book.formats?.["application/epub+zip"] ||
      book.formats?.["application/pdf"] ||
      book.formats?.["text/plain; charset=utf-8"] ||
      book.formats?.["text/plain"] ||
      null;

   const fav = isFavorite(book.id);

   return (
      <article className={styles.bookDetailsPage}>
         <Link
            to=".."
            relative="path"
            className={styles.backLink}
         >
            ← Back
         </Link>

         <section className={styles.bookDetailsCard}>
            <section className={styles.coverAndButtons}>
               <img
                  src={cover}
                  alt={title}
                  className={styles.cover}
               />
               <button
                  className={`${styles.favoriteButton} ${fav ? styles.favorited : ""}`}
                  onClick={() =>
                     toggleFavorite({
                        id: book.id,
                        title,
                        authorName: author,
                        cover,
                     })
                  }
                  title={fav ? "Remove from favorites" : "Add to favorites"}
               >
                  {fav ? "★ Remove favorite" : "☆ Add favorite"}
               </button>
               {bestLink && (
                  <a
                     className={styles.readButton}
                     href={bestLink}
                     target="_blank"
                     rel="noreferrer"
                  >
                     Read / Download
                  </a>
               )}
            </section>

            <section className={styles.allInfo}>
               <h3 className={styles.title}>{title}</h3>
               <p className={styles.author}>By: {author}</p>

               <dl className={styles.meta}>
                  <div>
                     <dt>Downloads</dt>
                     <dd>{downloads}</dd>
                  </div>
                  <div>
                     <dt>Languages</dt>
                     <dd>{languages.join(", ") || "—"}</dd>
                  </div>
               </dl>

               <div className={styles.tags}>
                  <h4>Subjects</h4>
                  {subjects.length ? (
                     <ul>
                        {subjects.map((s, i) => (
                           <li key={i}>{s}</li>
                        ))}
                     </ul>
                  ) : (
                     <p>—</p>
                  )}
               </div>
               <div className={styles.summary}>
                  <h5>Summary</h5>
                  <p>{summary}</p>
               </div>
            </section>
         </section>
      </article>
   );
}
