import { useState } from "react";
import { getBooks } from "../../Utility";
import { getWishList } from "../../Utility/localStorage";
import { Link } from "react-router-dom";
import ReadBook from "../ReadBook/ReadBook";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [sortedReadBooks, setSortedReadBooks] = useState([]);
    const [sortedWishListBooks, setSortedWishListBooks] = useState([]);
    const readBooks = getBooks();
    const wishListBooks = getWishList();

    const handleSortBy = (order) =>{
        const sorted = [...readBooks].sort((x, y) => y[order] - x[order]);
        setSortedReadBooks(sorted);
        const sortedWishList = [...wishListBooks].sort((x, y) => y[order] - x[order]);
        setSortedWishListBooks(sortedWishList);
    }

    return (
        <div>
            <div className="border bg-slate-300 rounded-xl lg:my-10">
                <h2 className="text-5xl font-bold text-center py-6">Books</h2>
            </div>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 bg-green-400 rounded-xl py-3 px-5 text-white font-bold">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleSortBy('rating')}>Rating</a></li>
                        <li><a onClick={() => handleSortBy('totalPages')}>Number of pages</a></li>
                        <li><a onClick={() => handleSortBy('yearOfPublishing')}>Published year</a></li>
                    </ul>
                </details>
            </div>
            <div className="lg:w-[400px]">
                <div role="tablist" className="tabs tabs-lifted">
                    <Link to='' onClick={() => setTabIndex(0)} className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}> <span className="font-bold text-[16px]">Read Books</span> </Link>
                    <Link to={`wishList`} onClick={() => setTabIndex(1)} className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}><span className="font-bold text-[16px]">Wishlist Books</span></Link>
                </div>
            </div>
            <div className="my-10">
                {tabIndex === 0 ? (
                    <ReadBook books={sortedReadBooks.length > 0 ? sortedReadBooks : readBooks} />
                ) : (
                    <WishListBooks books={sortedWishListBooks.length > 0 ? sortedWishListBooks : wishListBooks}/>
                )}
            </div>
        </div>
    );
};

export default ListedBooks;
