import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "./comment";

const Reviews = () => {
	const { currentBook } = useParams();
	const [book, setBook] = useState(null);
	const [error, setError] = useState(null);
	const [newReview, setNewReview] = useState({
		ocena: 5,
		recenzja: "",
		nazwa_uzytkownika: "",
	});

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/ksiazka/${currentBook}`)
			.then((response) => {
				setBook(response.data);
			})
			.catch((err) => {
				setError("");
			});
	}, [currentBook]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewReview({ ...newReview, [name]: value });
	};

	const handleSubmitReview = async () => {
		try {
			const response = await axios.post(
				`http://localhost:5000/api/ksiazka/${currentBook}/dodaj-recenzje`,
				newReview
			);
			const updatedBook = response.data;
			setBook(updatedBook);
			setNewReview({
				ocena: 5,
				recenzja: "",
				nazwa_uzytkownika: "",
			});
		} catch (error) {
			console.error("Błąd dodawania recenzji:", error);
		}
	};

	if (error) {
		return <div>{error}</div>;
	}

	if (!book) {
		return <div>Ładowanie...</div>;
	}

	const ratesSum = book.opinie.reduce((acc, opinia) => acc + opinia.ocena, 0);
	const averageRating = ratesSum / book.opinie.length;
	const percentageReview = (averageRating / 5) * 100;
	const percentageRate = (book, rateNumber) => {
		const ratingArray = book.opinie.map((opinia) => opinia.ocena);
		return Math.floor(
			(ratingArray.filter((v) => v === rateNumber).length /
				ratingArray.length) *
				100
		);
	};
	console.log(percentageRate(book, 5), "%");

	return (
		<>
			<section className="reviews w-10/12 mt-10 border-t border-gray-300">
				<div className="reviewes-title mt-10 text-start">
					<span className="text-2xl">Recenzje: </span>
				</div>
				<div className="reviews-summary flex place-items-center mt-5">
					<div className="">
						<div className="rate-rounded rounded-full border border-orange-400 w-32 h-32 flex place-items-center place-content-center">
							<div
								className="bg-orange-200 rounded-full place-content-center"
								style={{ height: percentageReview, width: percentageReview }}
							>
								<span className="rate-ratio text-xl font-bold">4.9</span>
							</div>
						</div>
					</div>
					<div className="w-full">
						<div className="rate-stars-scale grid grid-rows-5 gap-3 mt-5 place-items-end">
							<div className="rating-slider flex w-3/4">
								<span className="text-sm">
									5 <i className="fa-solid fa-star text-orange-400"></i>
								</span>
								<div className="bg-orange-200 mx-2 w-2/3 rounded-lg">
									<div
										className={`bg-orange-400 w-[${percentageRate(
											book,
											5
										)}%\]  h-full rounded-lg`}
									></div>
								</div>
								<span className="flex">{percentageRate(book, 5)}%</span>
							</div>

							<div className="rating-slider flex w-3/4">
								<span className="text-sm">
									4 <i className="fa-solid fa-star  text-orange-400"></i>
								</span>
								<div className="bg-orange-200 mx-2 w-2/3 rounded-lg">
									<div
										className={`bg-orange-400 w-[${percentageRate(
											book,
											4
										)}%\] h-full rounded-lg`}
									></div>
								</div>
								<span className="flex">{percentageRate(book, 4)}%</span>
							</div>
							<div className="rating-slider flex w-3/4">
								<span className="text-sm">
									3 <i className="fa-solid fa-star text-orange-400"></i>
								</span>
								<div className="bg-orange-200 mx-2 w-2/3 rounded-lg">
									<div
										className={`bg-orange-400 w-[${percentageRate(
											book,
											3
										)}%\]  h-full rounded-lg`}
									></div>
								</div>
								<span className="flex">{percentageRate(book, 3)}%</span>
							</div>
							<div className="rating-slider flex w-3/4">
								<span className="text-sm">
									2 <i className="fa-solid fa-star text-orange-400"></i>
								</span>
								<div className="bg-orange-200 mx-2 w-2/3 rounded-lg">
									<div
										className={`bg-orange-400 w-[${percentageRate(
											book,
											2
										)}%\]  h-full rounded-lg`}
									></div>
								</div>
								<span className="flex">{percentageRate(book, 2)}%</span>
							</div>
							<div className="rating-slider flex w-3/4">
								<span className="text-sm">
									1 <i className="fa-solid fa-star text-orange-400"></i>
								</span>
								<div className="bg-orange-200 mx-2 w-2/3 rounded-lg">
									<div
										className={`bg-orange-400 w-[${percentageRate(
											book,
											1
										)}%\]  h-full rounded-lg`}
									></div>
								</div>
								<span className="flex">{percentageRate(book, 1)}%</span>
							</div>
						</div>
					</div>
				</div>
				<div className="book-desctibe-line mt-16 border-t border-gray-200 h-0"></div>
				<div className="add-recent w-5/6 mt-16 p-6 mx-auto rounded-lg">
					<div className="reviews-comment text-center">
						<span className="text-xl font-">
							Czytałeś? Tutaj możesz podzielić się swoją opinią
						</span>
					</div>
					<div className="reviews-add-comment mt-4">
						<div className="flex justify-center">
							<label className="mr-4 text-lg" htmlFor="rating">
								Twoja ocena:
							</label>
							<select
								id="rating"
								name="ocena"
								value={newReview.ocena}
								onChange={handleInputChange}
								className="border border-gray-300 rounded px-2 py-1"
							>
								<option value="5">5 Gwiazdek</option>
								<option value="4">4 Gwiazdki</option>
								<option value="3">3 Gwiazdki</option>
								<option value="2">2 Gwiazdki</option>
								<option value="1">1 Gwiazdka</option>
							</select>
						</div>
						<div className="book-desctibe-line mt-5 border-t border-gray-200 h-0"></div>
						<textarea
							className="w-full resize-none mt-6 border-b-2 border-gray-300 rounded p-2 outline-none"
							rows="4"
							placeholder="Twoja opinia..."
							name="recenzja"
							value={newReview.recenzja}
							onChange={handleInputChange}
						></textarea>

						<div className="grid grid-cols-4">
							<input
								type="text"
								placeholder="nazwa użytkownika"
								name="nazwa_uzytkownika"
								value={newReview.nazwa_uzytkownika}
								onChange={handleInputChange}
								className="border-gray-300 border-b rounded-lg w-3/4 outline-none pl-3 col-start-1 col-end-3"
							/>
							<button
								className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 col-start-4 col-end-4"
								onClick={handleSubmitReview}
							>
								Dodaj recenzję
							</button>
						</div>

						<div className="book-desctibe-line mt-5 border-t border-gray-200 h-0"></div>
						{book.opinie.map(
							(opinia) =>
								opinia.recenzja !== "" && (
									<Comment key={opinia._id} book_opinia={opinia} />
								)
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Reviews;
