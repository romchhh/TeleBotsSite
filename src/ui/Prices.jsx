import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

const PRICE_PLANS = [
	{
	  title: 'Lite',
	  description: 'Для малого бізнесу: автоматизуйте відповіді на популярні запитання та оптимізуйте час. Це найкращий старт для тих, хто хоче зекономити на рутині.',
	  originalPrice: '1500 грн',
	  discountedPrice: '1000 грн',
	  orderText: 'Замовити зараз',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка бота під ваші потреби',
		'Одне оновлення протягом місяця',
		'Хостинг у подарунок на 6 місяців',
		'24/7 моніторинг сервера',
	  ],
	},
	{
	  title: 'Standart',
	  description: 'Оптимальний вибір для середнього бізнесу. Бот із зворотнім зв’язком і функціями, що збільшать вашу конверсію.',
	  originalPrice: '4000 грн',
	  discountedPrice: '3000 грн',
	  orderText: 'Замовити вигідно',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка індивідуального сценарію',
		'Форма для отримання заявок',
		'Функція зв’язку з менеджером',
		'Три оновлення протягом місяця',
		'6 місяців хостингу в подарунок',
		'24/7 моніторинг сервера',
	  ],
	},
	{
	  title: 'Premium',
	  description: 'Ідеально для великого бізнесу. Бот з інтеграцією бази даних та можливістю масштабування під будь-які потреби.',
	  originalPrice: '8000 грн',
	  discountedPrice: '6000 грн',
	  orderText: 'Замовити найкраще',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка складного сценарію',
		'Інтеграція з базами даних',
		'Функція зворотнього зв’язку',
		'Форма заявок для клієнтів',
		'Три оновлення протягом двох місяців',
		'Хостинг 6 місяців безкоштовно',
		'Моніторинг сервера 24/7',
	  ],
	},
  ];

function Prices() {
  const { ref: pricesRef, inView: pricesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className='min-h-screen prices flex flex-col justify-center items-center gap-24 py-10'
      id='prices'
    >
      <h2 className='text-4xl font-bold text-black'>Ціни на розробку</h2>
      <div
        ref={pricesRef}
        className={`container grid xl:grid-cols-3 gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center content-center transition-opacity duration-1000 ${
          pricesInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {PRICE_PLANS.map((plan, index) => (
          <div
            className='price-item p-6 border rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl'
            key={index}
          >
            <h3 className='text-2xl font-bold mb-4'>{plan.title}</h3>
            <p className='text-lg mb-2'>{plan.description}</p>
            <div className='text-xl font-semibold text-green-600 mb-4'>
              <span className='line-through text-gray-500'>{plan.originalPrice}</span>
              <span className='ml-2'>{plan.discountedPrice}</span>
            </div>
            <a
              href={plan.orderLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='bg-blue-500 text-white px-4 py-2 rounded-full mb-6'>
                {plan.orderText}
              </Button>
            </a>
            <div className='features text-left'>
              <h4 className='font-semibold mb-2'>Що входить:</h4>
              <ul className='list-disc list-inside space-y-1'>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prices;
