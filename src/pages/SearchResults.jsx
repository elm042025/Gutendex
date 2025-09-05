import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import BookCard from "../components/BookCard";
import PageNotFound from "../components/PageNotFound";
import Loading from "../components/Loading";
import NoDataFound from "../components/NoDataFound";

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

         .catch((error) => {
            console.error("Error fetching search results:", error);
            setSearchState({ ...searchState, error: "Failed to fetch search results." });
         })
         .then((data) => {
            setSearchResults(data.results || []);
         })
         .finally(() => setSearchState({ ...searchState, isLoading: false }));
   }, [searchQuery]);

   return (
      <section>
         <h2>{!searchState.isLoading && `Found ${searchResults.length} results for "${searchQuery}"`}</h2>

         {searchState.error && <PageNotFound />}

         {searchState.isLoading && <Loading />}

         {searchResults.length === 0 && !searchState.isLoading && <NoDataFound />}

         {searchResults.map((book) => {
            const { id, title, formats, authors } = book;
            const cover = (formats && formats["image/jpeg"]) || "/placeholder.jpg";
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
