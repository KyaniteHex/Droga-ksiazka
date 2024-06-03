import { useState } from "react";
import Book from "./book.jsx";
import Slider from "./slider.jsx";
import Reviews from "./reviews.jsx"
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='container pt-2 bg-white w-4/6 grid place-items-center'>
				<header>
					<div className='header-top h-56 mb-6 grid grid-cols-4 place-items-center w-full'>
						<div className='logo w-52'>
							<a href='#'>
								<img src='src\img\logo-no-background.png' alt='Logo' />
							</a>
						</div>
						<div className='search-bar w-full col-span-3'>
							<span className='ml-4 pl-2.5 border-l border-t border-b border-gray-300 rounded-md text-start h-12 text-3xl '>
								<input
									type='text'
									placeholder='Wyszukaj książki w naszej bazie'
									className='w-8/12 px-4 outline-none'
								/>
								<button className=' w-1/12 rounded-r-lg bg-[#ff7f50] h-10 inline-table'>
									<i className='fas fa-search'></i>
								</button>
							</span>
						</div>
					</div>
					<nav className='grid place-items-center'>
						<ul className='bg-[#d28140] rounded-xl w-11/12 text-[#f1eee8] gap-6 grid grid-cols-6'>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'>
									Bestsellery
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'>
									Premiery i nowości
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'>
									Uwielbiane przez redakcję
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'>
									Fantastyka
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'>
									Dla dzieci
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'>
									Dodaj książkę
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<Book />
				<Slider />
				<Reviews />
			</div>
		</>
	);
}

export default App;
