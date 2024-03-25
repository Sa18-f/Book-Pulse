import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);
    console.log(book);
    return (
        <div className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl my-12 lg:mx-5">
            <div className="rounded-xl lg:w-[600px] bg-slate-100">
                <img className="lg:w-[300px] mx-auto py-20" src={book.image} alt="Album" />
            </div>
            <div className="lg:w-[780px] px-3">
                <h2 className="">{book.bookName}</h2>
                <p>By : {book.author}</p>
                <p className="border-y py-3 border-dashed my-2">{book.category}</p>
                <p><span className="font-bold">Review :</span> {book.review}</p>
                <div className='flex gap-3 border-b border-slate-300 mt-8 py-5'>
                    <span className="font-bold">Tag :</span>
                    {book.tags.map((tag, index) => (
                        <p key={index} className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1">{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;