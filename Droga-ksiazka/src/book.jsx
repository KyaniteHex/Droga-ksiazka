import { useState } from "react";

const Book = () => {
	const [count, setCount] = useState(0);
	return (
		<>
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
							Dalej jest tylko gorzej. Trwa wojna bogów. Giną śmiertelnicy. Być
							może Vuko zmuszony będzie złamać drugą regułę misji… Nafaszerowany
							magią, naszpikowany akcją. Lodowy Ogród Pana czeka. Nie
							spoczniesz, dopóki nie skończysz.
						</span>
					</div>
					<div className='author-about mt-6'>
						<span className='text-xl block'>O autorze</span>
						<span className='w-3/4 inline-block mt-3'>
							Jarosław Grzędowicz w wieku czterech lat chciał zostać operatorem
							śmieciarki. Później, po niezapomnianych wakacjach w leśniczówce -
							leśnikiem piszącym fantastykę. W międzyczasie chciał być jak Tony
							Halik, Tomek Wilmowski, Jacques Custeau oraz Simon Templar, z tym,
							że równocześnie chciał być pisarzem fantastyki. W kolejnej
							dekadzie rozwoju chciał zostać biologiem oraz pisarzem fantastyki.
							Ze wszystkich młodzieńczych zamiarów udało mu się zrealizować
							tylko jeden. A może aż jeden? Grzędowicz nie lubi przymusu.
							Zapewne, dlatego Pan Lodowego Ogrodu powstawał na przestrzeni
							niemal dziesięciu lat. Jak sam mówi - pisanie powieści trwa tyle
							ile musi trwać. Żaden przymus tu nie pomoże.
						</span>
					</div>
				</section>
			</section>
		</>
	);
};

export default Book;
