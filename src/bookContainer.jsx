import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallBook from "./smallBook";

const BookContainer = ({ headerTitle, sortFunction }) => {
	const [books, setBooks] = useState([]);
	const [descendingBooks, setDescendingBooks] = useState([]);
	const [latestBooks, setLatestBooks] = useState([]);
	const [teenBooks, setTeenBooks] = useState([]);
	const [fantasyBooks, setFantasyBooks] = useState([]);
	const [kidsBooks, setKidsBooks] = useState([]);
	const [searchBooks, setSearchBook] = useState([]);
	const [error, setError] = useState(null);
	console.log(headerTitle);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/ksiazki")
			.then((response) => {
				const shuffledBooks = response.data.sort(() => 0.5 - Math.random());
				setBooks(shuffledBooks);
				setDescendingBooks([...shuffledBooks].sort(sortByRating));
				setLatestBooks([...shuffledBooks].sort(sortByNewest));
				setTeenBooks(
					shuffledBooks.filter(
						(book) => book.gatunek === "literatura młodzieżowa"
					)
				);
				setFantasyBooks(
					shuffledBooks.filter((book) => book.gatunek === "fantasy")
				);
				setKidsBooks(
					shuffledBooks.filter(
						(book) => book.gatunek === "literatura dziecięca"
					)
				);
				setSearchBook(
					shuffledBooks.filter((books) =>
						books.nazwa.toLowerCase().includes(headerTitle.toLowerCase())
					)
				);
			})
			.catch((error) => {
				console.error("Error fetching books:", error);
				setError("Failed to fetch books.");
			});
	}, []);
	console.log(searchBooks);
	const averageRating =
		books.opinie && books.opinie.length > 0
			? books.opinie.reduce((acc, opinia) => acc + opinia.ocena, 0) /
			  books.opinie.length
			: 0;
	const sortByRating = (a, b) => b.averageRating - a.averageRating;
	const sortByNewest = (a, b) => b.rok_wydania - a.rok_wydania;

	if (error) {
		return <div>{error}</div>;
	}
	console.log(searchBooks.length === 0);
	return (
		<section className="all-books-container mt-10 w-10/12">
			<div className="book-describe-line border-t border-gray-300 h-0"></div>
			<div className="all-books-header mb-5 mt-10 pb-3 border-b border-gray-300">
				<div className="all-books-title text-start">
					{sortFunction == "search" && searchBooks.length === 0 && (
						<span className="text-2xl">Nie znaleziono podobnych książek</span>
					)}
					{sortFunction == "search" && searchBooks.length !== 0 && (
						<span className="text-2xl">Wyszukiwania dla "{headerTitle}":</span>
					)}
					{sortFunction !== "search" && (
						<span className="text-2xl">{headerTitle}</span>
					)}
				</div>
			</div>
			<div className="all-books-body grid grid-cols-4 gap-10 place-items-center">
				{(sortFunction === "rating"
					? descendingBooks
					: sortFunction === "newest"
					? latestBooks
					: sortFunction === "teen"
					? teenBooks
					: sortFunction === "fantasy"
					? fantasyBooks
					: sortFunction === "kids"
					? kidsBooks
					: sortFunction === "search"
					? searchBooks
					: books
				).map((book, index) => (
					<SmallBook key={index} book={book} />
				))}
			</div>
		</section>
	);
};

export default BookContainer;
