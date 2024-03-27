import { useState } from "react";
import { getBooks } from "../../Utility";
import { getWishList } from "../../Utility/localStorage";
import { Link } from "react-router-dom";
import ReadBook from "../ReadBook/ReadBook";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const readBooks = getBooks();
    const wishListBooks = getWishList();

    return (
        <div>
            <div className="border bg-slate-300 rounded-xl lg:my-10">
                <h2 className="text-5xl font-bold text-center py-6">Books</h2>
            </div>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 bg-green-400 rounded-xl py-3 px-5 text-white font-bold">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </details>
            </div>
            <div className="w-64">
                <div role="tablist" className="tabs tabs-lifted">
                    <Link to='' onClick={() => setTabIndex(0)} className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                    <Link to={`wishList`} onClick={() => setTabIndex(1)} className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>
                </div>
            </div>
            <div className="my-10">
                {tabIndex === 0 ? (
                    <ReadBook books={readBooks} />
                ) : (
                    <WishListBooks books={wishListBooks} />
                )}
            </div>
        </div>
    );
};

export default ListedBooks;
