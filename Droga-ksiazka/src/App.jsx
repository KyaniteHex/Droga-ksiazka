import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='container pt-2 text-center bg-white w-4/6 h-screen'>
				<header>
					<div className='header-top'>
						<a href='#' className='pt-2 h-40 w-40 block ml-14'>
							<img
								src='src\img\logo-no-background.png'
								alt='Logo'
								className='w-40'
							/>
						</a>
						<span className='ml-24 mb-20 pl-2.5  border-l border-t border-b border-gray-300 rounded-md h-12 bottom-24 text-3xl'>
							<input
								type='text'
								placeholder='Wyszukaj książki w naszej bazie'
								className='w-6/12 h-full px-4 outline-none'
							/>
							<button className=' w-1/12 rounded-r-lg bg-[#ff7f50] h-10'>
								<i className='fas fa-search'></i>
							</button>
						</span>
					</div>
					<nav className='mt-10'>
						<ul className='bg-[#d28140] rounded-xl w-11/12 mx-auto flex justify-center text-[#f1eee8]'>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'
								>
									Bestsellery
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'
								>
									Premiery i nowości
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'
								>
									Uwielbiane przez redakcję
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'
								>
									Fantastyka
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'
								>
									Dla dzieci
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block px-4 py-2'
								>
									Dodaj książkę
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<section className='main mt-20 w-full '>
					<div className='book-container border border-gray-300 w-auto p-4'>
						<div className='book-img w-1/2 inline-block'>
							<img
								src='src/img/Pan Lodowego Ogrodu.jpg'
								alt='Pan Lodowego ogrodu'
							/>
						</div>
						<div className='book-info w-1/2 inline-block'>
							<span className='book-name text-2xl'>Pan Lodowego Ogrodu</span>
							<span className='book-author block'>Andrzej Grzędowicz</span>
							<p className='book-rate mt-4 text-xs'>
								<span>
									Ocena: <i className='fas fa-star text-orangered'></i>
									<i className='fas fa-star text-orangered'></i>
									<i className='fas fa-star text-orangered'></i>
									<i className='fas fa-star text-orangered'></i>
									<i className='fas fa-star text-orangered'></i>
								</span>
								<span>Średnia: 4.9</span>
								<span>Ilość ocen: 34</span>
							</p>
							<table className='mt-4 text-xs'>
								<tr>
									<th>Wydawnictwo:</th>
									<td>Fabryka słów</td>
									<th>Format:</th>
									<td>15.0x22.0cm</td>
								</tr>
								<tr>
									<th>Seria:</th>
									<td>Bogaty ojciec</td>
									<th>Rok wydania:</th>
									<td>2022</td>
								</tr>
							</table>
						</div>
						<div className='book-describe'></div>
						<div className='others-books'></div>
						<div className='reviews'>
							<div className='reviews-comment'></div>
							<div className='reviews-add-comment'></div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
