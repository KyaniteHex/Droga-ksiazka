import { useState } from "react";

const Slider = () => {
	const [count, setCount] = useState(0);
	return (
		<>
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
		</>
	);
};
export default Slider;