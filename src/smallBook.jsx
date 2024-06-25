import React from "react";
import StarRating from "./starRates";

const SmallBook = ({ book }) => {
	const averageRating =
		book.opinie && book.opinie.length > 0
			? book.opinie.reduce((acc, opinia) => acc + opinia.ocena, 0) /
			  book.opinie.length
			: 0;
	return (
		<div className="other-book-slider-element place-items-center">
			<a href={`/ksiazka/${book.nazwa_pliku}`} className="row-span-2">
				<img
					src={`/assets/books/${book.nazwa_pliku}.jpg`}
					className="slider-book-img"
					alt={book.nazwa}
				/>
			</a>
			<p className="slider-book-name">{book.nazwa}</p>
			<p className="text-xs">
				<StarRating averageRating={averageRating} />
			</p>
		</div>
	);
};

export default SmallBook;
