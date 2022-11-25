// Vad är det vi gör utifrån lektionerna? Jo, vi har en fungerande sökfunktion, som lyssnar på användarens input och söker ur en lista fram de böcker som matchar söktermen. 

// Kom ihåg att alltid skapa en ny branch.

'use strict';

let bookList = [];

//getAll anropas i anonyma arrow-funktionen
//I then, i callback-funktionen så kommer man när man har hämtat böckerna från api:et tilldela de böckerna till våran bookList variabel ovan
window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);
//Return true eller false är ett krav när man använder filter-funktionen

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  console.log(existingElement);

  const root = document.getElementById('root');
  
  //Kortslutna villkor: Om det på vänstra sidan om "&&" är sant, så går vi vidare till det till höger. Träffar den inte på det på vänstar sidan så inträffar aldrig det på den högra sidan.
  existingElement && root.removeChild(existingElement);

  //Samma princip här som kommentaren ovan
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}
