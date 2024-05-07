import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

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
				<section className='main mt-20'>
					<div className='book-container border-t border-r border-l p-3 border-gray-300 rounded-lg grid grid-cols-4'>
						<div className='book-img'>
							<img
								src='src/img/pan-lodowego-ogrodu-1.jpg'
								alt='Pan Lodowego ogrodu'
							/>
						</div>
						<div className='book-info pt-5 col-span-2'>
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
							<div className='book-info-other grid grid-cols-2'>
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
								<button>
									Pan Lodowego Ogrodu.epub
									<i class='fa-solid fa-download text-4xl mt-5'></i>
								</button>
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
				</section>
				<section className='others-books-container mt-10 w-10/12'>
					<div className='book-desctibe-line border-t border-gray-300 h-0'></div>
					<div className='other-books-header mb-5 mt-10 pb-3 grid grid-cols-2 border-b border-gray-300'>
						<div className='other-books-title text-start'>
							<span className='text-2xl'>Inne książki:</span>
						</div>
						<div className='other-books-nav-btn text-end'>
							<span className='other-books-navigation-btn'>
								<div className='slider-book'></div>
								<button className='border-gray-300 border w-10 h-10 p-1 text-2xl rounded-md'>
									<i class='fa-solid fa-angle-left'></i>
								</button>
								<button className='border-gray-300 border w-10 h-10 p-1 text-2xl rounded-md'>
									<i class='fa-solid fa-angle-right'></i>
								</button>
							</span>
						</div>
					</div>
					<div className='other-books-body grid place-items-center'>
						<div className='other-book-title-slider w-10/12 grid grid-cols-4  gap-10'>
							<div className='other-book-slider-element'>
								<img
									src='src\img\wojna-makowa-1.jpg'
									className='slider-book-img'
									alt=''
								/>
								<span className='slider-book-name'>Wojna Makowa tom 1</span>
								<span className='rates'>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star-half-stroke text-orange-600'></i>
								</span>
							</div>
							<div className='other-book-slider-element'>
								<img
									src='src\img\faceci-w-gumofilcach.jpg'
									className='slider-book-img'
									alt=''
								/>
								<span className='slider-book-name'>Faceci w gumofilcach</span>
								<span className='rates'>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star-half-stroke text-orange-600'></i>
								</span>
							</div>
							<div className='other-book-slider-element'>
								<img
									src='src\img\percy-jackson-zlodziej-pioruna.jpg'
									className='slider-book-img'
								/>
								<span className='slider-book-name'>
									Percy Jackson i bogowie olimpijscy: Złodziej pioruna
								</span>
								<span className='rates'>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star-half-stroke text-orange-600'></i>
								</span>
							</div>
							<div className='other-book-slider-element'>
								<img
									src='src\img\th-big-short.jpg'
									alt='The'
									className='slider-book-img'
								/>
								<span className='slider-book-name'>The Big Short</span>
								<span className='rates'>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star text-orange-600'></i>
									<i className='fa-solid fa-star-half-stroke text-orange-600'></i>
								</span>
							</div>
						</div>
					</div>
				</section>
				<section className='reviews'>
					<div className='reviews-comment'></div>
					<div className='reviews-add-comment'></div>
				</section>
			</div>
		</>
	);
}

export default App;
