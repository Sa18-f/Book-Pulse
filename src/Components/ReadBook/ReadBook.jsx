import { useLoaderData } from "react-router-dom";


const ReadBook = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default ReadBook;