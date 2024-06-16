import React from "react";
import StarRating from "./starRates";

const Comment = ({ book_opinia }) => {
	console.log(book_opinia.data_dodania);
	console.log("dupa");
	return (
		<div className='comments mt-16 bg-orange-100 pt-2 pb-3 px-5 grid grid-cols-4 grid-rows-3 rounded-md'>
			{book_opinia.nazwa_uzytkownika !== undefined && (
				<span className='text-start text-md ps-4 pt-4'>{book_opinia.nazwa_uzytkownika}</span>
			)}
			<span className='text-start text-md pt-4'>
				Ocena:
				<StarRating averageRating={book_opinia.ocena} />
			</span>

			<span className='text-start text-md pt-4'>Data dodania opinii</span>
			{book_opinia.data_dodania !== undefined && (
				<span className='text-start text-md pt-4'>{book_opinia.data_dodania.match(/(.*)T/)[1]}
				</span>
			)}
			<div className='opinia col-span-4 row-span-2 pt-5 px-12 border-orange-200 border-t-2 text-start align-text-bottom'>
				<span className='text-center'>{book_opinia.recenzja}</span>
			</div>
		</div>
	);
};

export default Comment;
