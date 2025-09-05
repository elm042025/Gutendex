import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import { useSearchParams } from "react-router-dom";

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

      setSearchState({
         ...searchState,
         isLoading: true,
      });

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
      <div>
         <h2>
            Found {searchResults.length} results for "{searchQuery}"
         </h2>

         {state.error && <p>Error: {state.error}</p>}
         {state.isLoading && <p>Loading...</p>}

         {!state.isLoading && !state.error && searchResults.length === 0 && <p>No results found.</p>}
         {searchResults.map((book) => {
            const { id, title, formats, authors } = book;
            const cover = (formats && formats["image/jpeg"]) || "/placeholder.jpg";
            const authorName = (authors && authors[0] && authors[0].name) || "Unknown Author";
            return (
               <BookCard
                  key={id}
                  cover={cover}
                  title={title ? title : "Unknown Title"}
                  authorName={authorName}
               />
            );
         })}
      </div>
   );
}
