import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
    const { bookId, bookName, image, author, category, rating } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 shadow-xl">
                <div className='bg-[#F3F3F3] m-4 rounded-xl'>
                    <figure className="px-8 py-10">
                        <img src={image} alt="Shoes" className="rounded-xl w-52 h-52" />
                    </figure>
                </div>
                <div className='flex gap-3 pl-6 mt-2'>
                    {book.tags.map((tag, index) => (
                        <p key={index} className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1"> {tag}</p>
                    ))}
                </div>
                <div className="card-body mt-[-20px]">
                    <div className='border-dashed border-b pb-4'>
                        <h2 className="text-2xl font-bold">{bookName}</h2>
                        <p className='font-semibold my-2'>By: {author}</p>
                    </div>
                    <div className="flex">
                        <p className="flex items-center font-sans"><span className="text-xl"></span> {category}</p>
                        <p className="flex items-center font-sans gap-1"><span className="text-xl"></span>{rating} <IoIosStarOutline /></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
SingleBook.propTypes = {
    book: PropTypes.object.isRequired
}

export default SingleBook;