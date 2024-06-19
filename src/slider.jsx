import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallBook from "./smallBook";

const Slider = () => {
	const [books, setBooks] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/ksiazki")
			.then((response) => {
				const shuffledBooks = response.data.sort(() => 0.5 - Math.random());
				setBooks(shuffledBooks);
			})
			.catch((error) => {
				console.error("Error fetching books:", error);
			});
	}, []);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? books.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === books.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<section className="others-books-container mt-10 w-10/12">
			<div className="book-desctibe-line border-t border-gray-300 h-0"></div>
			<div className="other-books-header mb-5 mt-10 pb-3 grid grid-cols-2 border-b border-gray-300">
				<div className="other-books-title text-start">
					<span className="text-2xl">Inne książki:</span>
				</div>
				<div className="other-books-nav-btn text-end">
					<span className="other-books-navigation-btn">
						<button
							onClick={handlePrevClick}
							className="border-gray-300 border w-10 h-10 p-1 text-2xl rounded-md"
						>
							<i className="fa-solid fa-angle-left"></i>
						</button>
						<button
							onClick={handleNextClick}
							className="border-gray-300 border w-10 h-10 p-1 text-2xl rounded-md"
						>
							<i className="fa-solid fa-angle-right"></i>
						</button>
					</span>
				</div>
			</div>
			<div className="other-books-body grid place-items-center">
				<div className="other-book-title-slider w-10/12 grid grid-cols-5 gap-10">
					{books.slice(currentIndex, currentIndex + 5).map((book, index) => (
						<SmallBook key={index} book={book} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Slider;
