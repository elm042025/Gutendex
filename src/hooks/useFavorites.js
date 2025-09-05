import { useState, useEffect } from "react";
import missingCover from "../assets/missing-image.svg";
//! ----- Custom hook to manage favorite books using localStorage ----- !

const KEY = "bookvoyager_favorites.v1";

export default function useFavorites() {
   //! 1----- load from localStorage when the hook mounts ----- !
   const [favorites, setFavorites] = useState(() => {
      try {
         const raw = localStorage.getItem(KEY);
         return raw ? JSON.parse(raw) : [];
      } catch {
         return [];
      }
   });
   //! 2----- save to localStorage when favorites change ----- !
   useEffect(() => {
      localStorage.setItem(KEY, JSON.stringify(favorites));
   }, [favorites]);

   //! 3------ helpers ------ !

   function isFavorite(id) {
      return favorites.some((book) => book.id === id);
   }

   function toggleFavorite(book) {
      setFavorites((curr) => {
         //! Remove if already there

         if (curr.some((b) => b.id === book.id)) {
            return curr.filter((b) => b.id !== book.id);
         }

         //! storing only bookCard info

         const minimal = {
            id: book.id,
            title: book.title || "Unknown Title",
            authorName: book.authorName || "Unknown Author",
            cover: book.cover || missingCover,
         };

         return [...curr, minimal];
      });
   }
   //! returning favorites array and helper functions
   return { favorites, isFavorite, toggleFavorite };
}
