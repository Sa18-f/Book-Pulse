import { toast } from "react-toastify";
export const getBooks = () =>{
    let books = [];
    let storedBooks = localStorage.getItem('books');
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books
}
export const saveBook = book =>{
    let books = getBooks();
    const isExist = books.find(b => b.bookId === book.bookId);
    if(!isExist){
        return toast.error("This book have already added")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success("This book added successfully")
}