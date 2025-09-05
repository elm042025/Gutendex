import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
//! ----- Components ----- !
import BookCard from "../components/BookCard";
import PageNotFound from "../components/PageNotFound";
import Loading from "../components/Loading";
import NoDataFound from "../components/NoDataFound";
import missingImage from "../assets/missing-image.svg";
//! ----- Styles ----- !
import styles from "./SearchResultsPage.module.css";

export default function SearchResults() {
   const [searchParams] = useSearchParams();

   const searchQuery = (searchParams.get("query") || "").trim();

   const [searchResults, setSearchResults] = useState([]);

   const [searchState, setSearchState] = useState({
      isLoading: false,
      error: "",
   });

   const [nextUrl, setNextUrl] = useState(null);

   const [prevUrl, setPrevUrl] = useState(null);

   //! ------ Handle pagination URLs ------ !

   function load(url) {
      setSearchState((s) => ({ ...s, isLoading: true, error: "" }));

      fetch(url)
         .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
         })
         .then((data) => {
            setSearchResults(data.results || []);
            setNextUrl(data.next || null);
            setPrevUrl(data.previous || null);
         })
         .catch((err) => {
            console.error("Error fetching search results:", err);
            setSearchState((s) => ({ ...s, error: "Failed to fetch search results." }));
            setSearchResults([]);
            setNextUrl(null);
            setPrevUrl(null);
         })
         .finally(() => {
            setSearchState((s) => ({ ...s, isLoading: false }));
         });
   }
   useEffect(() => {
      if (!searchQuery) {
         setSearchResults([]);
         setNextUrl(null);
         setPrevUrl(null);
         setSearchState((s) => ({ ...s, isLoading: false, error: "" }));
         return;
      }

      const firstPageUrl = `https://gutendex.com/books/?search=${encodeURIComponent(searchQuery)}`;
      load(firstPageUrl);
   }, [searchQuery]);

   return (
      <section className={styles.searchResults}>
         <h2>
            {!searchState.isLoading && (searchQuery ? `Found ${searchResults.length} results for "${searchQuery}"` : "Type something in the search box above.")}
         </h2>

         {searchState.error && <PageNotFound />}

         {searchState.isLoading && <Loading />}

         {searchResults.length === 0 && !searchState.isLoading && searchQuery && <NoDataFound />}

         {!searchState.isLoading &&
            searchResults.map((book) => {
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
         {!searchState.isLoading && (nextUrl || prevUrl) && (
            <section className={styles.pagination}>
               <button
                  disabled={!prevUrl}
                  onClick={() => load(prevUrl)}
               >
                  ← Previous
               </button>
               <button
                  disabled={!nextUrl}
                  onClick={() => load(nextUrl)}
               >
                  Next →
               </button>
            </section>
         )}
      </section>
   );
}
