import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
//! ----- Components ----- !
import BookCard from "../components/BookCard";
import PageNotFound from "../components/PageNotFound";
import Loading from "../components/Loading";
import NoDataFound from "../components/NoDataFound";
import missingImage from "../assets/missing-image.svg";
//! ----- Styles ----- !
import styles from "./SearchResults.module.css";

export default function SearchResults() {
   const [searchParams] = useSearchParams();

   const searchQuery = (searchParams.get("query") || "").toLowerCase().trim();

   const [searchResults, setSearchResults] = useState([]);

   const [searchState, setSearchState] = useState({
      isLoading: false,
      error: "",
      results: [],
   });

   useEffect(() => {
      //! ------ Fetch search results from Gutendex API based on search query ------ !

      //! -----------Handle cases if searchQuery is empty ----------- !

      if (!searchQuery) {
         setSearchState({
            ...searchState,
            error: "No search query provided.",
         });
         return;
      }
      //! ----------- Set loading searchState while fetching (slow API response) ----------- !
      setSearchState({
         ...searchState,
         isLoading: true,
      });

      //! ----------- Fetch data from API (assuming all is well) ----------- !

      fetch(`https://gutendex.com/books/?search=${encodeURIComponent(searchQuery)}`)
         .then((response) => response.json())

         .then((data) => {
            setSearchResults(data.results || []);
         })

         .catch((error) => {
            console.error("Error fetching search results:", error);
            setSearchState({ ...searchState, error: "Failed to fetch search results." });
         })

         .finally(() => setSearchState({ ...searchState, isLoading: false }));
   }, [searchQuery]);

   return (
      <section className={styles.searchResults}>
         <h2>{!searchState.isLoading && `Found ${searchResults.length} results for "${searchQuery}"`}</h2>

         {searchState.error && <PageNotFound />}

         {searchState.isLoading && <Loading />}

         {searchResults.length === 0 && !searchState.isLoading && <NoDataFound />}

         {!searchState.isLoading &&
            searchResults.map((book) => {
               const { id, title, formats, authors } = book;
               const cover = (formats && formats["image/jpeg"]) || missingImage;
               const authorName = (authors && authors[0] && authors[0].name) || "Unknown Author";
               return (
                  <BookCard
                     key={id}
                     cover={cover}
                     title={title || "Unknown Title"}
                     authorName={authorName}
                  />
               );
            })}
      </section>
   );
}
