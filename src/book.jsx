import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "./starRates";

const Book = () => {
	const { currentBook } = useParams();
	const [book, setBook] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/ksiazka/${currentBook}`)
			.then((response) => {
				setBook(response.data);
			})
			.catch((err) => {
				setError("Book not found");
			});
	}, [currentBook]);

	if (error) {
		return <div>{error}</div>;
	}

	if (!book) {
		return <div>Ładowanie...</div>;
	}
	const averageRating =
		book.opinie.reduce((acc, opinia) => acc + opinia.ocena, 0) /
		book.opinie.length;
	return (
		<section className="main mt-16">
			<div className="book-container pl-10  grid grid-cols-4">
				<div className="book-img">
					<img src={`/assets/books/${book.nazwa_pliku}.jpg`} alt={book.nazwa} />
				</div>
				<div className="book-info pl-20 pt-5 col-span-2">
					<span className="book-name text-2xl font-semibold">{book.nazwa}</span>
					<span className="book-author block font-medium">{book.autor}</span>
					<p className="book-rate mt-4 text-s">
						<StarRating averageRating={averageRating} />
						<span className="ml-5">Ilość ocen: {book.opinie.length}</span>
					</p>
					<div className="book-info-other grid grid-cols-2">
						{book.wydawnictwo !== "" && (
							<span>Wydawnictwo: {book.wydawnictwo}</span>
						)}
						{book.format !== "" && <span>Format: {book.format}</span>}
						{book.seria !== "" && <span>Seria: {book.seria}</span>}
						{book.rok_wydania !== "" && (
							<span>Rok wydania: {book.rok_wydania}</span>
						)}
						{book.gatunek !== "" && <span>Gatunek: {book.gatunek}</span>}

						{book.ilosc_stron !== "" && (
							<span>Ilość stron: {book.ilosc_stron}</span>
						)}
					</div>

					<div className="download mt-10">
						<span>Aby pobrać w formacie epub kliknij poniżej</span>
						<div></div>
						<button>
							<i className="fa-solid fa-download text-4xl mt-5"></i>
						</button>
					</div>
				</div>
			</div>
			<section className="book-describe mt-16 w-full">
				<span className="text-2xl">Opis</span>
				<div className="book-desctibe-line border-t border-gray-200 h-0"></div>
				<div className="describe">
					<span className="w-3/4 inline-block mt-5 text-lg">{book.opis}</span>
				</div>
				{book.o_autorze !== "" && (
					<div className="author-about mt-6">
						<span className="text-2xl block">O autorze</span>
						<span className="w-3/4 inline-block mt-3">{book.o_autorze}</span>
					</div>
				)}
			</section>
		</section>
	);
};

export default Book;
