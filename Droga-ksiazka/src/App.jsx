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
					<div className='header-top flex h-56 mb-6 items-center'>
						<div className='logo '>
							<a href='#' className='pt-2 block'>
								<img
									src='src\img\logo-no-background.png'
									alt='Logo'
									className='w-48'
								/>
							</a>
						</div>
						<div className='search-bar w-4/6'>
							<span className='ml-4 pl-2.5 border-l border-t border-b border-gray-300 rounded-md text-start items-end h-12 text-3xl'>
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
					<nav>
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
					<div className='book-container border-t border-r border-l p-3 border-gray-300 rounded-lg grid grid-cols-[30%_40%]'>
						<div className='book-img'>
							<img
								src='src/img/Pan Lodowego Ogrodu.jpg'
								alt='Pan Lodowego ogrodu'
							/>
						</div>
						<div className='book-info pt-5'>
							<span className='book-name text-2xl font-semibold'>
								Pan Lodowego Ogrodu
							</span>
							<span className='book-author block font-medium'>
								Andrzej Grzędowicz
							</span>
							<p className='book-rate mt-4 text-s'>
								<span className='mr-5'>
									Ocena:
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star-half-stroke text-orange-600'></i>
								</span>
								<span className='mr-5'>Średnia: 4.9</span>
								<span>Ilość ocen: 34</span>
							</p>
							<div className='book-info-other grid grid-cols-[150px_minmax(900px,1fr)] grid-flow-row mt-5 text-start'>
								<span>Wydawnictwo: Fabryka słów</span>
								<span>Format: 15.0x22.cm</span>
								<span>Seria: Pan lodowego ogrodu</span>
								<span>Rok wydania: 2022</span>
								<span>Ilość stron: 504</span>
							</div>
							<div className='download mt-10'>
								<span>Aby pobrać w formacie epub kliknij poniżej</span>
								<div>
									<span>
										<i class='fa-solid fa-arrow-down-long mt-2'></i>
									</span>
								</div>
								<span>
									Pan Lodowego Ogrodu.epub
									<i class='fa-solid fa-download text-4xl mt-5'></i>
								</span>
							</div>
						</div>
					</div>
					<section className='book-describe mt-20 w-full'>
						<span className='text-2xl'>Opis</span>
						<div className='book-desctibe-line border-t border-gray-300 h-0'></div>
						<div className='describe'>
							<span className='w-3/4 inline-block mt-5'>
								Vuko Drakkainen samotnie rusza na poszukiwanie zaginionej
								ekspedycji naukowej, badającej człekopodobną cywilizację planety
								Midgaard. Misja: odesłać na Ziemię lub zlikwidować i zatrzeć
								ślady. Pod żadnym pozorem nie może ingerować w rozwój nieznanej
								kultury. Trafia na zły czas. Planeta wita go mgłą i śmiercią.
								Dalej jest tylko gorzej. Trwa wojna bogów. Giną śmiertelnicy.
								Być może Vuko zmuszony będzie złamać drugą regułę misji…
								Nafaszerowany magią, naszpikowany akcją. Lodowy Ogród Pana
								czeka. Nie spoczniesz, dopóki nie skończysz.
							</span>
						</div>
						<div className='author-about mt-6'>
							<span className='text-xl block'>O autorze</span>
							<span className='w-3/4 inline-block mt-3'>
								Jarosław Grzędowicz w wieku czterech lat chciał zostać
								operatorem śmieciarki. Później, po niezapomnianych wakacjach w
								leśniczówce - leśnikiem piszącym fantastykę. W międzyczasie
								chciał być jak Tony Halik, Tomek Wilmowski, Jacques Custeau oraz
								Simon Templar, z tym, że równocześnie chciał być pisarzem
								fantastyki. W kolejnej dekadzie rozwoju chciał zostać biologiem
								oraz pisarzem fantastyki. Ze wszystkich młodzieńczych zamiarów
								udało mu się zrealizować tylko jeden. A może aż jeden?
								Grzędowicz nie lubi przymusu. Zapewne, dlatego Pan Lodowego
								Ogrodu powstawał na przestrzeni niemal dziesięciu lat. Jak sam
								mówi - pisanie powieści trwa tyle ile musi trwać. Żaden przymus
								tu nie pomoże.
							</span>
						</div>
					</section>
					<section className='others-books border border-t-gray-300 mt-5'>
						<div className='other-books-header h-20 mt-5'>
							<span className='other-books-title text-2xl inline-block w-3/4 text-start'>
								Inne książki:{' '}
							</span>
							<span className='other-books-navigation-btn inline-block w-1/4 text-end'>
								<div className='slider-book'></div>
								<button className='border-gray-300 border w-10 h-10 p-1 text-2xl rounded-md'>
									<i class='fa-solid fa-angle-left'></i>
								</button>
								<button className='border-gray-300 border w-10 h-10 p-1 text-2xl rounded-md'>
									<i class='fa-solid fa-angle-right'></i>
								</button>
							</span>
						</div>
            <div className="other-book-title-slider">
              
            </div>
					</section>
					<section className='reviews'>
						<div className='reviews-comment'></div>
						<div className='reviews-add-comment'></div>
					</section>
				</section>
			</div>
		</>
	);
}

export default App;
