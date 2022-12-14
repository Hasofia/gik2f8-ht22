// Filnamnet döps på samma sätt som funktionen. Detta är en namnkonvention som är vanlig kring komponenter/klasser inom JS

const BookList = (bookList) => {
    let html = `<ul class="book-list rounded-md border-2 border-blue-900 bg-white w-full mx-auto">`;
    for (let i = 0; i < bookList.length; i++) {
      // Boken på position i, inuti loopen
      html += BookListItem(bookList[i]);
    }
  
    html += `</ul>`;
  
    return html;
  };
  