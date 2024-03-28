import PropTypes from 'prop-types';
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';

const ReadBook = ({ books }) => {
    return (
        <div className='flex flex-col gap-6 max-w-[1170px]'>
            {books.map(book => (
                <div key={book.bookId} className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl gap-4">
                    <div className="rounded-xl lg:w-[300px] bg-slate-100">
                        <div className="py-16">
                            <img className="rounded-xl lg:w-44 lg:h-[200px] mx-auto" src={book.image} alt="Album" />
                        </div>
                    </div>
                    <div className="lg: w-[800px] ml-1 pr-4 mt-3">
                        <h2 className="font-bold text-xl">{book.bookName}</h2>
                        <p className="font-semibold my-3">By : {book.author}</p>
                        <div className='flex gap-10 items-center'>
                            <div className='flex gap-3 lg:flex-row flex-col py-3'>
                                <span className="font-bold">Tag :</span>
                                {book.tags.map((tag, index) => (
                                    <p key={index} className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1">{tag}</p>
                                ))}
                            </div>
                            <p>Year of Publishing : <span className="ml-2 font-sans font-semibold">{book.yearOfPublishing}</span> </p>
                        </div>
                        <div className='flex gap-10
                         items-center mt-2 mb-5'>
                            <p className='flex gap-3 items-center'><GoPeople /> Publisher : <span className="font-sans font-semibold">{book.publisher}</span> </p>
                            <p className='flex gap-3 items-center'><MdOutlineContactPage /> Page : <span className="font-sans font-semibold">{book.totalPages}</span> </p>
                        </div>
                        <div className='flex gap-3 border-t border-slate-300 mt-1 py-5'>
                            <p className="bg-slate-100 border text-[#006eff] rounded-xl px-3 py-1 font-semibold">Category :{book.category} </p>
                            <p className="bg-slate-100 border text-[#006eff] rounded-xl px-3 py-1 font-semibold">Rating : <span className='font-sans font-semibold'>{book.rating}</span> </p>
                            <Link to={`/book/${book.bookId}`}><button className="bg-green-400 border text-white rounded-xl px-3 py-1 font-semibold">View Details </button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
ReadBook.propTypes = {
    books: PropTypes.object
}

export default ReadBook;