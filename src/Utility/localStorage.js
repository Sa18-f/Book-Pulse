export const getWishList = () =>{
    let books = [];
    let storedBooks = localStorage.getItem('wishList');
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books;
}

export const saveWishList = book =>{
    let books = getWishList();
    const isExist = books.find(b => b.bookId === book.bookId);
    if(!isExist){
        books.push(book);
        localStorage.setItem('wishList', JSON.stringify(books));
        return true;
    }
    return false;
}