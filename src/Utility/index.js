
export const getBooks = () =>{
    let books = [];
    let storedBooks = localStorage.getItem('books');
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books;
}

export const saveBook = book =>{
    let books = getBooks();
    const isExist = books.find(b => b.bookId === book.bookId);
    if(!isExist){
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        return true;
    }
    return false;
}