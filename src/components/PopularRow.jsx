import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import missingImage from "../assets/missing-image.svg";
import styles from "./Row.module.css";

export default function PopularRow() {
   const [books, setBooks] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch("https://gutendex.com/books/?page=1")
         .then((r) => r.json())
         .then((data) => {
            const sorted = (data.results || []).sort((a, b) => (b.download_count || 0) - (a.download_count || 0)).slice(0, 20);
            setBooks(sorted);
         })
         .finally(() => setLoading(false));
   }, []);

   if (loading) return <p style={{ padding: "0 1rem" }}>Loading popular…</p>;
   if (books.length === 0) return null;

   return (
      <section className={styles.rowSection}>
         <h4 className={styles.rowTitle}>Popular</h4>
         <div className={styles.rowScroller}>
            {books.map((b) => {
               const cover = b.formats?.["image/jpeg"] || missingImage;
               const author = b.authors?.[0]?.name || "Unknown Author";
               return (
                  <div
                     className={styles.rowItem}
                     key={b.id}
                  >
                     <BookCard
                        id={b.id}
                        cover={cover}
                        title={b.title}
                        authorName={author}
                     />
                  </div>
               );
            })}
         </div>
      </section>
   );
}
