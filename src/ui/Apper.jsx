import React from 'react';
import { FaBrain, FaFileAlt, FaExchangeAlt, FaBolt, FaClock } from 'react-icons/fa';

const services = [
  {
    icon: <FaBrain />,
    title: 'Проводимо спільні брейнштормінги щодо функціонала чат-бота',
    color: 'from-purple-500 to-purple-700',
    top: '20%',
    left: '15%',
  },
  {
    icon: <FaFileAlt />,
    title: 'Допомагаємо сформувати технічне завдання на чат-бот',
    color: 'from-yellow-500 to-yellow-700',
    top: '40%',
    left: '70%',
  },
  {
    icon: <FaExchangeAlt />,
    title: 'Трансформуємо Ваші ідеї в реальний продукт',
    color: 'from-red-500 to-red-700',
    top: '60%',
    left: '30%',
  },
  {
    icon: <FaBolt />,
    title: 'Включаємо потужну експертизу в розробці чат-ботів у Ваш проект',
    color: 'from-yellow-500 to-yellow-700',
    top: '30%',
    left: '50%',
  },
  {
    icon: <FaClock />,
    title: 'Швидко реалізовуємо першу версію чат-бота',
    color: 'from-purple-500 to-purple-700',
    top: '70%',
    left: '80%',
  },
];

function Apper() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 overflow-hidden relative">
      <div className="container mx-auto text-center mb-20">
        <h2 className="text-5xl font-bold mb-10">Що ми пропонуємо?</h2>
      </div>
      {services.map((service, index) => (
        <div
          key={index}
          className={`p-8 rounded-xl bg-gradient-to-r ${service.color} shadow-xl flex items-center justify-center transform transition-transform duration-500 hover:scale-105 active:scale-100 cursor-pointer absolute bg-opacity-70`}
          style={{
            top: service.top,
            left: service.left,
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px', // Ensures each block is bigger but not overly large
          }}
        >
          <div className="mr-6 p-4 rounded-full bg-white text-gray-900 shadow-lg">
            {service.icon}
          </div>
          <div className="text-left text-xl">{service.title}</div>
        </div>
      ))}
    </section>
  );
}

export default Apper;
