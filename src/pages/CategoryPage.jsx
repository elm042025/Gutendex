import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
// ! ----- Components ----- !
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import NoDataFound from "../components/NoDataFound";
import Pagination from "../components/Pagination";
// ! ----- Assets ----- !
import missingImage from "../assets/missing-image.svg";
// ! ----- Hooks ----- !
import useBooks from "../hooks/useBooks";
// ! ----- Styles ----- !
import styles from "./CategoryPage.module.css";
// ! ---------------------- !
export default function CategoryPage() {
   const { categoryName } = useParams(); // route is /category/:categoryName
   const { results: books, count, next, previous, isLoading, error, load } = useBooks();

   useEffect(() => {
      if (!categoryName) return;
      const url = `https://gutendex.com/books?topic=${encodeURIComponent(categoryName)}`;
      load(url);
   }, [categoryName, load]);

   if (!categoryName)
      return (
         <Navigate
            to="/"
            replace
         />
      );

   return (
      <section>
         {isLoading && <Loading />}

         {error && (
            <>
               <h2 className="error">{error}</h2>
               <NoDataFound />
            </>
         )}

         {!isLoading && !error && books.length === 0 && <NoDataFound />}

         {!isLoading && !error && books.length > 0 && (
            <section className={styles.categoryResults}>
               <h2>{`Found ${count} books in "${categoryName}"`}</h2>

               {books.map((b) => {
                  const cover = b.formats?.["image/jpeg"] || missingImage;
                  const authorName = b.authors?.[0]?.name || "Unknown Author";

                  return (
                     <BookCard
                        key={b.id}
                        id={b.id}
                        cover={cover}
                        title={b.title || "Unknown Title"}
                        authorName={authorName}
                     />
                  );
               })}

               <Pagination
                  prevUrl={previous}
                  nextUrl={next}
                  loading={isLoading}
                  onPageChange={(url) => load(url)}
               />
            </section>
         )}
      </section>
   );
}
