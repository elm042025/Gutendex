//  1. Søke etter bøker

//     Applikasjonen skal ha en header med et søkefelt hvor brukere kan søke etter spesifikke boktitler.
//     Søkeresultatene skal vises som en liste, og du skal implementere paginering ved hjelp av API-ets innebygde funksjonalitet for å bla gjennom resultatene.

// 2. Kategorimeny

//     Applikasjonen skal ha en meny med lenker til følgende bokkategorier:
//         Fiction
//         Mystery
//         Thriller
//         Romance
//         Fantasy
//         Morality
//         Society
//         Power
//         Justice
//         Adventure
//         Tragedy
//         War
//         Philosophy

//     Når brukeren klikker på en kategori, skal applikasjonen gjøre et API-kall til /books?topic=kategori og vise bøkene som tilhører denne kategorien. Menyen kan gjerne plasseres i headeren for enkel tilgang.

const BASE_URL = "https://gutendex.com/books/";

export async function fetchBooks(url = BASE_URL) {
   const response = await fetch(url);
   if (!response.ok) {
      throw new Error("Failed to fetch books");
   }
   return response.json();
}

export async function fetchBooksByName(name) {
   const response = await fetch(`${BASE_URL}?search=${name.toLowerCase()}`);
   if (!response.ok) {
      throw new Error("Failed to fetch books");
   }
   console.log(await response.json());
}
