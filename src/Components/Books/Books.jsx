import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <section>
            <h1 className="text-5xl font-bold text-center">Books</h1>
            <div className="grid lg:grid-cols-3 gap-10 my-10">
                {
                    books.map(book => <SingleBook key={book.bookId} book={book}></SingleBook>)
                }
            </div>
        </section>
    );
};

export default Books;