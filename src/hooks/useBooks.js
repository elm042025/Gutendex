import { useState, useCallback } from "react";

//! custom hook to fetch books data from an API and manage loading, error, and pagination states

export default function useBooks() {
   const [results, setResults] = useState([]);
   const [count, setCount] = useState(0);
   const [next, setNext] = useState(null);
   const [previous, setPrevious] = useState(null);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState("");

   //!    function to load books data from a given Gutendex URL

   const load = useCallback((url) => {
      if (!url) return;
      setLoading(true);
      setError("");

      fetch(url)
         .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch");
            return res.json();
         })

         .then((data) => {
            setResults(data.results || []);
            setCount(data.count || 0);
            setNext(data.next || null);
            setPrevious(data.previous || null);
         })

         .catch((err) => {
            console.error(err);
            setError(err.message || "Failed to fetch");
            setResults([]);
            setCount(0);
            setNext(null);
            setPrevious(null);
         })

         .finally(() => setLoading(false));
   }, []);

   return { results, count, next, previous, isLoading, error, load };
}
