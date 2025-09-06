import { createContext, useContext, useEffect, useState } from "react";
import missingCover from "../assets/missing-image.svg";
//! ----- Context to manage favorite books using localStorage ----- !

const KEY = "bookvoyager_favorites.v1";

// create the context
const FavoritesContext = createContext();

// provider component
export function FavoritesProvider({ children }) {
   const [favorites, setFavorites] = useState(() => {
      try {
         const raw = localStorage.getItem(KEY);
         return raw ? JSON.parse(raw) : [];
      } catch {
         return [];
      }
   });

   // sync to localStorage
   useEffect(() => {
      localStorage.setItem(KEY, JSON.stringify(favorites));
   }, [favorites]);

   // helpers
   function isFavorite(id) {
      return favorites.some((b) => b.id === id);
   }

   function toggleFavorite(book) {
      setFavorites((curr) => {
         if (curr.some((b) => b.id === book.id)) {
            return curr.filter((b) => b.id !== book.id);
         }
         const minimal = {
            id: book.id,
            title: book.title || "Unknown Title",
            authorName: book.authorName || "Unknown Author",
            cover: book.cover || missingCover,
         };
         return [...curr, minimal];
      });
   }

   return <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>{children}</FavoritesContext.Provider>;
}

// custom hook for easy access
export function useFavorites() {
   return useContext(FavoritesContext);
}
