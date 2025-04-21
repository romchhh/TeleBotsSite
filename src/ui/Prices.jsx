import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import './Prices.css';

const PRICE_PLANS = [
	{
	  title: 'Lite',
	  description: 'Для малого бізнесу: автоматизуйте відповіді та оптимізуйте час',
	  price: '1000₴',
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
	  description: 'Оптимальний вибір для середнього бізнесу з розширеним функціоналом',
	  price: '3000₴',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка індивідуального сценарію',
		'Форма для отримання заявок',
		'Функція зв\'язку з менеджером',
		'Три оновлення протягом місяця',
		'6 місяців хостингу в подарунок',
		'24/7 моніторинг сервера',
	  ],
	},
	{
	  title: 'Premium',
	  description: 'Комплексне рішення для великого бізнесу з повною інтеграцією',
	  price: '6000₴',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка складного сценарію',
		'Інтеграція з базами даних',
		'Функція зворотнього зв\'язку',
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
    <section className="prices-section" id="prices">
      <div className="prices-container">
        <div className="prices-header">
          <h2>Ціни на розробку</h2>
          <p>Оберіть оптимальне рішення для вашого бізнесу</p>
        </div>
        
        <div
          ref={pricesRef}
          className={`prices-grid ${pricesInView ? 'visible' : ''}`}
        >
          {PRICE_PLANS.map((plan, index) => (
            <div className={`price-card ${index === 1 ? 'featured' : ''}`} key={index}>
              <div className="price-card-content">
                <h3>{plan.title}</h3>
                <p className="description">{plan.description}</p>
                <div className="price">{plan.price}</div>
                
                <a href={plan.orderLink} target="_blank" rel="noopener noreferrer">
                  <button className="order-button">
                    Замовити
                  </button>
                </a>

                <div className="features">
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Prices;
