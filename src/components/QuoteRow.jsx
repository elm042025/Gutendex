import styles from "./QuoteRow.module.css";

const defaultQuotes = [
   { text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", author: "George R.R. Martin" },
   { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" },
   { text: "I have always imagined that Paradise will be a kind of library.", author: "Jorge Luis Borges" },
   { text: "The mind is not a vessel to be filled, but a fire to be kindled.", author: "Plutarch" },
   { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
   { text: "Books are a uniquely portable magic.", author: "Stephen King" },
   { text: "So many books, so little time.", author: "Frank Zappa" },
   { text: "Reading is essential for those who seek to rise above the ordinary.", author: "Jim Rohn" },
   { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
   { text: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.", author: "Dr. Seuss" },
   { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
   { text: "Knowledge, like air, is vital to life. Like air, no one should be denied it.", author: "Alan Moore" },
];

export default function QuoteRow({ title = "Why we read", quotes = defaultQuotes }) {
   return (
      <section
         className={styles.rowSection}
         aria-label="Inspirational quotes"
      >
         <h4 className={styles.rowTitle}>{title}</h4>

         <div className={styles.rowScroller}>
            {quotes.map((q, i) => (
               <figure
                  key={i}
                  className={styles.card}
               >
                  <blockquote className={styles.text}>&ldquo;{q.text}&rdquo;</blockquote>
                  <figcaption className={styles.author}>— {q.author}</figcaption>
               </figure>
            ))}
         </div>
      </section>
   );
}
