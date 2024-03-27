import PropTypes from 'prop-types';
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";

const ReadBook = ({ books }) => {
    return (
        <div className='grid grid-cols-1 gap-6'>
            {books.map(book => (
                <div key={book.bookId} className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl gap-4">
                    <div className="rounded-xl lg:w-[350px] bg-slate-100">
                        <div className="py-16">
                            <img className="rounded-xl lg:w-52 lg:h-[250px] mx-auto" src={book.image} alt="Album" />
                        </div>
                    </div>
                    <div className="lg: w-[750px] ml-2 pr-4 mt-1">
                        <h2 className="font-bold text-xl">{book.bookName}</h2>
                        <p className="font-semibold my-3">By : {book.author}</p>
                        <div className='flex gap-10 items-center'>
                            <div className='flex gap-3 py-3'>
                                <span className="font-bold">Tag :</span>
                                {book.tags.map((tag, index) => (
                                    <p key={index} className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1">{tag}</p>
                                ))}
                            </div>
                            <p>Year of Publishing : <span className="ml-2 font-sans font-semibold">{book.yearOfPublishing}</span> </p>
                        </div>
                        <div className='flex gap-10
                         items-center'>
                            <p className='flex gap-3 items-center'><GoPeople /> Publisher : <span className="font-sans font-semibold">{book.publisher}</span> </p>
                            <p className='flex gap-3 items-center'><MdOutlineContactPage /> Page : <span className="font-sans font-semibold">{book.totalPages}</span> </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
ReadBook.propTypes = {
    books: PropTypes.object.isRequired
}

export default ReadBook;