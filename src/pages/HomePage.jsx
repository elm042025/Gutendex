import { useEffect } from "react";

const BASE_URL = "https://gutendex.com/books";

export default function HomePage() {
   async function fetchBooksByName(name) {
      const response = await fetch(`${BASE_URL}?search=${name.toLowerCase()}`);
      if (!response.ok) {
         throw new Error("Failed to fetch books");
      }
      console.log(await response.json());
   }

   useEffect(() => {
      fetchBooksByName("Melville Herman");
   }, []);

   return (
      <main>
         <h1>Welcome to the Home Page</h1>
      </main>
   );
}
