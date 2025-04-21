import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PHASES = [
  {
    id: 1,
    title: 'Старт',
    icon: <FaRocket />,
    steps: [
      'Обговорення проєкту',
      'Оцінка вартості',
      'Технічне завдання',
      'Авансовий платіж',
    ],
  },
  {
    id: 2,
    title: 'Розробка',
    icon: <FaCode />,
    steps: [
      'Збір інформації',
      'Розробка архітектури',
      'Створення функціоналу',
      'Тестування',
    ],
  },
  {
    id: 3,
    title: 'Запуск',
    icon: <FaCheckCircle />,
    steps: [
      'Фінальні правки',
      'Тестування',
      'Запуск проєкту',
      'Технічна підтримка',
    ],
  },
];

function Purchase() {
  const { ref: purchasesRef, inView: purchasesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 min-h-screen bg-white" id="purchase-scheme">
      <motion.div
        ref={purchasesRef}
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={purchasesInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Заголовок */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Як ми працюємо?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Пропонуємо прозорий процес розробки від ідеї до готового продукту
          </p>
        </motion.div>

        {/* Фази */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PHASES.map((phase) => (
            <motion.div
              key={phase.id}
              className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden group"
              variants={itemVariants}
            >
              {/* Номер фази */}
              <div className="absolute top-4 right-4 text-gray-200 font-bold text-6xl opacity-30">
                {String(phase.id).padStart(2, '0')}
              </div>
              
              {/* Іконка */}
              <div className="text-3xl text-gray-700 mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110">
                {phase.icon}
              </div>
              
              {/* Заголовок */}
              <h3 className="text-2xl font-semibold mb-6 relative z-10">
                {phase.title}
              </h3>
              
              {/* Кроки */}
              <ul className="space-y-3 relative z-10">
                {phase.steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                  >
                    <FaCheckCircle className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Підсумок */}
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-lg text-gray-600 mb-4">
            Розробляємо кастомні рішення під ваші потреби
          </p>
          <p className="text-base text-gray-500">
            Оплата тільки за готовий продукт — без прихованих платежів
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Purchase;