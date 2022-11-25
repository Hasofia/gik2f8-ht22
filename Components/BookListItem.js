// Filnamnet döps på samma sätt som funktionen. Detta är en namnkonvention som är vanlig kring komponenter/klasser inom JS
// "Book" då vi pratar om endast en enskild bok. Körs för varje bok i listan.

const BookListItem = (book) => {
    let html = `<li
                  class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                ${book.author} - ${book.title}    
                </li>`;
    return html;
  };
  