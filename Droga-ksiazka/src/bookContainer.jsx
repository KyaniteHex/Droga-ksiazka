import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallBook from "./smallBook";

const BookContainer = () => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/ksiazki")
			.then((response) => {
				const booksWithRatings = response.data.map((book) => {
					const averageRating =
						book.opinie && book.opinie.length > 0
							? book.opinie.reduce((acc, opinia) => acc + opinia.ocena, 0) /
							  book.opinie.length
							: 0;
					return { ...book, averageRating };
				});

				const sortedBooks = booksWithRatings.sort(
					(a, b) => b.averageRating - a.averageRating //sortowanie malejace
				);

				setBooks(sortedBooks);
			})
			.catch((err) => {
				console.error("Error fetching books:", err);
				setError("Book not found");
			});
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<section className="all-books-container mt-10 w-10/12">
			<div className="book-describe-line border-t border-gray-300 h-0"></div>
			<div className="all-books-header mb-5 mt-10 pb-3 border-b border-gray-300">
				<div className="all-books-title text-start">
					<span className="text-2xl">Nasze najlepsze książki:</span>
				</div>
			</div>
			<div className="all-books-body grid grid-cols-4 gap-10 place-items-center">
				{books.map((book, index) => (
					<SmallBook key={index} book={book} />
				))}
			</div>
		</section>
	);
};

export default BookContainer;
