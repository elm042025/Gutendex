import styles from "./Pagination.module.css";

export default function Pagination({ prevUrl, nextUrl, onPageChange, loading }) {
   if (!prevUrl && !nextUrl) return null;
   return (
      <section className={styles.paginationContainer}>
         <section className={styles.pagination}>
            <button
               disabled={!prevUrl || loading}
               onClick={() => onPageChange(prevUrl)}
            >
               ← Previous
            </button>
            <button
               disabled={!nextUrl || loading}
               onClick={() => onPageChange(nextUrl)}
            >
               Next →
            </button>
         </section>
      </section>
   );
}
