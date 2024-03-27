import { useLoaderData, useParams } from "react-router-dom";
import { getBooks, saveBook } from "../../Utility";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { saveWishList } from "../../Utility/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);
    // console.log(book);
    const handleRead = (book) => {
        const storedBooks = getBooks();
        const isExist = storedBooks.find(b => b.bookId === book.bookId);
        if (!isExist) {
            saveBook(book);
            toast.success("Added to Read list");
        }
        else {
            toast.error("You have already read this books");
        }
        // const storedWishList = getWishList();
        // const isWishListed = storedWishList.find(b => b.bookId === book.bookId);
        // if (isWishListed) {
        //     toast.error("You have already added this book to your wishlist.");
        // } else {
        //     const storedBooks = getBooks();
        //     const isExist = storedBooks.find(b => b.bookId === book.bookId);
        //     if (!isExist) {
        //         saveBook(book);
        //         toast.success("Added to Read list");
        //     }
        //     else {
        //         toast.error("You have already read this book");
        //     }
        // }
    }
    const handleWishList = (book) => {
        // const added = saveWishList(book);
        // if (added) {
        //     toast.success("Added to Wishlist successfully");
        // } 
        // else {
        //     toast.error("This book is already added in Wishlist");
        // }
        const storedBooks = getBooks();
        const isExist = storedBooks.find(b => b.bookId === book.bookId);
        if (isExist) {
            toast.error("You have already read this book");
        } 
        else {
            const added = saveWishList(book);
            if (added) {
                toast.success("Added to Wishlist successfully");
            } 
            else {
                toast.error("This book is already added in Wishlist");
            }
        }
    }
    return (
        <div className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl lg:my-12 lg:mx-5 mx-2">
            <div className="rounded-xl lg:w-[400px] bg-slate-100 mt-4">
                <div className="py-24">
                    <img className="rounded-xl lg:w-56 lg:h-[300px] mx-auto" src={book.image} alt="Album" />
                </div>
            </div>
            <div className="lg:w-[700px] px-3 mt-3">
                <h2 className="font-bold text-xl">{book.bookName}</h2>
                <p className="font-semibold">By : {book.author}</p>
                <p className="border-y py-3 border-slate-300 my-2 font-semibold">{book.category}</p>
                <p><span className="font-bold">Review :</span> {book.review}</p>
                <div className='flex gap-3 border-b border-slate-300 py-5'>
                    <span className="font-bold">Tag :</span>
                    {book.tags.map((tag, index) => (
                        <p key={index} className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1">{tag}</p>
                    ))}
                </div>
                <p className="my-3">Number of pages : <span className="ml-2 font-sans font-semibold">{book.totalPages}</span> </p>
                <p className="my-3">Publisher : <span className="ml-2 font-semibold font-serif">{book.publisher}</span> </p>
                <p className="my-3">Year of Publishing : <span className="ml-2 font-sans font-semibold">{book.yearOfPublishing}</span> </p>
                <p className="my-3">Rating : <span className="ml-2 font-sans font-semibold">{book.rating}</span> </p>
                <div className="lg:gap-3 mb-1">
                    <button onClick={() => { handleRead(book) }} className="btn text-black border-green-300 px-7">Read</button>
                    <button onClick={() => { handleWishList(book) }} className="btn bg-blue-400 text-white ml-4">WishList</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;