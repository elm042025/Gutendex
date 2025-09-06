import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import PageNotFound from "../components/PageNotFound";
import Loading from "../components/Loading";
import NoDataFound from "../components/NoDataFound";
import Pagination from "../components/Pagination";
import missingImage from "../assets/missing-image.svg";

import useBooks from "../hooks/useBooks";
import styles from "./SearchResultsPage.module.css";

export default function SearchResults() {
   const [searchParams] = useSearchParams();
   const q = (searchParams.get("query") || "").trim();

   const { results, count, next, previous, isLoading, error, load } = useBooks();

   useEffect(() => {
      if (!q) {
         // clear by loading an empty (do nothing) or just skip
         return;
      }
      const url = `https://gutendex.com/books/?search=${encodeURIComponent(q)}`;
      load(url);
   }, [q, load]);

   return (
      <section className={styles.searchResults}>
         <h2>{!isLoading && (q ? `Found ${count} results for "${q}"` : "Type something in the search box above.")}</h2>

         {error && <PageNotFound />}
         {isLoading && <Loading />}
         {!isLoading && q && results.length === 0 && <NoDataFound />}

         {!isLoading &&
            results.map((book) => {
               const { id, title, formats, authors } = book;
               const cover = (formats && formats["image/jpeg"]) || missingImage;
               const authorName = (authors && authors[0] && authors[0].name) || "Unknown Author";
               return (
                  <BookCard
                     key={id}
                     id={id}
                     cover={cover}
                     title={title || "Unknown Title"}
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
   );
}
