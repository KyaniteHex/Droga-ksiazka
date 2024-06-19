import { Routes, Route } from "react-router-dom";
import BookContainer from "./bookContainer.jsx";
import Searchbar from "./searchbar.jsx";
import Book from "./book.jsx";
import Slider from "./slider.jsx";
import Reviews from "./reviews.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	console.log(window.location.pathname);
	return (
		<>
			<div className="container pt-2 bg-white w-4/6 grid place-items-center">
				<header>
					<div className="header-top h-56 mb-6 grid grid-cols-4 place-items-center w-full">
						<div className="logo w-52">
							<a href="#">
								<img src={"/logo.png"} alt="Logo" />
							</a>
						</div>
						<Searchbar />
					</div>
					<nav className="grid place-items-center">
						<ul className="bg-[#d28140] rounded-xl w-11/12 text-[#f1eee8] gap-6 grid grid-cols-6">
							<li>
								<a
									href="/"
									rel="noopener noreferrer"
									className="inline-block px-4 py-2"
								>
									Bestsellery
								</a>
							</li>
							<li>
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block px-4 py-2"
								>
									Premiery i nowości
								</a>
							</li>
							<li>
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block px-4 py-2"
								>
									Młodzieżowe
								</a>
							</li>
							<li>
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block px-4 py-2"
								>
									Fantastyka
								</a>
							</li>
							<li>
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block px-4 py-2"
								>
									Dla dzieci
								</a>
							</li>
							<li>
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block px-4 py-2"
								>
									Dodaj książkę
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className="books-list flex place-content-center">
					{window.location.pathname == "/" && <BookContainer />}
				</div>

				{window.location.pathname !== "/" && (
					<>
						<Routes>
							<Route path="/ksiazka/:currentBook" element={<Book />} />
						</Routes>
						<Slider />
						<Routes>
							<Route path="/ksiazka/:currentBook" element={<Reviews />} />
						</Routes>
					</>
				)}
			</div>
		</>
	);
}

export default App;
