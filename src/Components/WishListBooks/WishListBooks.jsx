import PropTypes from 'prop-types';

const WishListBooks = ({ books }) => {
    return (
        <div>
            {books.map(book => (
                <div key={book.bookId} className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={book.image} alt="Book" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{book.bookName}</h2>
                        <p>Click the button to add to wishlist.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
WishListBooks.propTypes = {
    books: PropTypes.object.isRequired
}

export default WishListBooks;