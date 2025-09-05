import missingCover from "../assets/missing-image.svg";
export default function BookCard({ cover, title, authorName }) {
   return (
      <article>
         <img
            src={cover || missingCover}
            alt={title || "Book Cover"}
         />
         <h3>{title || "Unknown Title"}</h3>
         <p>{authorName || "Unknown Author"}</p>
         <button>Add to favorites</button>
      </article>
   );
}
