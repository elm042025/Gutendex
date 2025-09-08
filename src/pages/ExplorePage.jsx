import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import PopularRow from "../components/PopularRow";
import NoDataFound from "../components/NoDataFound";
import PageNotFound from "../components/PageNotFound";
import Loading from "../components/Loading";
import missingImage from "../assets/missing-image.svg";

import useBooks from "../hooks/useBooks";
import styles from "./ExplorePage.module.css";

export default function ExplorePage() {
   // "All books" feed with pagination (page 1 initially)
   const { results, count, next, previous, isLoading, error, load } = useBooks();

   useEffect(() => {
      load("https://gutendex.com/books/");
   }, [load]);

   return (
      <section className={styles.explorePage}>
         <h2>Explore the most popular books</h2>

         {isLoading && <Loading />}
         {error && <PageNotFound />}
         {!isLoading && !error && results.length === 0 && <NoDataFound />}

         {results.map((b) => {
            const cover = b.formats?.["image/jpeg"] || missingImage;
            const author = b.authors?.[0]?.name || "Unknown Author";
            return (
               <BookCard
                  key={b.id}
                  id={b.id}
                  cover={cover}
                  title={b.title || "Unknown Title"}
                  authorName={author}
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
