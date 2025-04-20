import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';

function Portfolio() {
	const [selectedWork, setSelectedWork] = useState(null);
	const { ref: portfolioRef, inView: portfolioInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const works = [
		{
			title: "Телеграм бот для арбітражної команди Space Traffic",
			image: 'port11.png',
			alt: 'Зображення телеграм боту для арбітражу трафіка',
			largeImage: 'port1.png',
		},
		{
			title: 'Чат бот для суши бару Samurai Sushi',
			image: 'port22.png',
			alt: 'Телеграм бот для суши бару',
			largeImage: 'port2.png'
		},
		{
			title: 'Телеграм бот для бронювання поїздок Ukr Bus',
			image: 'port33.png',
			alt: 'Телеграм бот для бронювання поїздок Ukr Bus',
			largeImage: 'port3.png'
		},
		{
			title: 'Чат-бот для запису на вебінар',
			image: 'port44.png',
			alt: 'Чат-бот для запису на вебінар',
			largeImage: 'port4.png'
		},
		{
			title: 'Чат бот для Electro-Motors',
			image: 'port55.png',
			alt: 'Чат бот для Electro-Motors',
			largeImage: 'port5.png'
		},
		{
			title: 'Чат-бот інтернет-магазин для продажі футбольної атрибутики',
			image: 'port66.png',
			alt: 'Чат-бот інтернет-магазин для продажі футбольної атрибутики',
			largeImage: 'port6.png'
		},
		{
			title: 'Чат бот для Normalno Auto ',
			image: 'port77.png',
			alt: 'Чат бот для Normalno Auto ',
			largeImage: 'port7.png'
		},
		{
			title: 'Чат бот для платформи Sale Nice Device',
			image: 'port88.png',
			alt: 'Чат бот для платформи Sale Nice Device',
			largeImage: 'port8.png'
		},
		{
			title: 'Телеграм бот для підбору квартири в оренду',
			image: 'port99.png',
			alt: 'Телеграм бот для підбору квартири в оренду',
			largeImage: 'port9.png'
		},
		{
			title: 'Чат бот для магазину косметики Cosmy',
			image: 'port1010.png',
			alt: 'Чат бот для магазину косметики Cosmy',
			largeImage: 'port10.png'
		},
	];

	const openWork = (work) => {
		setSelectedWork(work);
	};

	const closeWork = () => {
		setSelectedWork(null);
	};

	return (
		<section 
			id='portfolio' 
			className='min-h-screen py-12 bg-gradient-to-b from-gray-50 to-gray-100'
			ref={portfolioRef}
		>
			<div className='container'>
				<div className='w-full text-center mb-16'>
					<h2 className='text-5xl font-bold mb-8'>
						<HighlightedTextWithDots
							colorText="#333333"
							colorBackground="#e0e0e0"
							colorDots="#4a4a4a"
							widthDots={10}
							widthBorder={4}
						>
							Наше портфоліо
						</HighlightedTextWithDots>
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-4'>
						<HighlightedTextWithDots
							colorText="#333333"
							colorBackground="#e0e0e0"
							colorDots="#4a4a4a"
							widthDots={8}
							widthBorder={3}
						>
							Яке неможливо приховувати
						</HighlightedTextWithDots>
					</p>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Натискайте на кейси та переглядайте результати впроваджених технічних рішень, впевнені, Ви будете в захваті 🤩
					</p>
				</div>

				<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
					portfolioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
					{works.map((work, index) => (
						<div
							key={index}
							onClick={() => openWork(work)}
							className='group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer bg-white'
						>
							<div className='relative'>
								<img
									src={work.image}
									alt={work.title}
									loading="lazy"
									className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110'
									style={{ height: '24rem' }}
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300'>
									{work.title}
								</h3>
							</div>
						</div>
					))}
				</div>

				{selectedWork && (
					<div
						className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm'
						onClick={closeWork}
					>
						<div
							className='bg-white rounded-2xl p-6 relative max-w-4xl w-full mx-4'
							onClick={(e) => e.stopPropagation()}
						>
							<h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>
								{selectedWork.title}
							</h2>
							<img
								src={selectedWork.largeImage}
								alt={selectedWork.title}
								className='w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg'
							/>
							<button
								onClick={closeWork}
								className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl transition-colors duration-300'
							>
								&times;
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Portfolio;
