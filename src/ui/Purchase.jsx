import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';

function Purchase() {
  const { ref: purchasesRef, inView: purchasesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="purchase-scheme"
      className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-b from-gray-50 to-gray-100"
      ref={purchasesRef}
    >
      <div className="container flex flex-col gap-16 px-4 md:px-8">
        {/* Заголовок */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={purchasesInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-bold mb-8">
            <HighlightedTextWithDots
              colorText="#333333"
              colorBackground="#e0e0e0"
              colorDots="#4a4a4a"
              widthDots={10}
              widthBorder={4}
            >
              Як ми працюємо?
            </HighlightedTextWithDots>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <HighlightedTextWithDots
              colorText="#333333"
              colorBackground="#e0e0e0"
              colorDots="#4a4a4a"
              widthDots={8}
              widthBorder={3}
            >
              Ми пропонуємо повний цикл розробки, від початкового обговорення до запуску вашого проєкту
            </HighlightedTextWithDots>
          </p>
        </motion.div>

        {/* Таймлайн */}
        <motion.div
          className="relative"
          initial="hidden"
          animate={purchasesInView ? 'visible' : 'hidden'}
          variants={staggerChildren}
        >
          {/* Лінія таймлайну */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 opacity-20"></div>

          {/* Фаза 1: Старт */}
          <motion.div className="flex flex-col md:flex-row items-center mb-16" variants={fadeInUp}>
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">01. Старт</h3>
              <ul className="text-lg text-gray-600 space-y-3 list-none">
                {[
                  'Загальне обговорення проєкту',
                  'Орієнтовна оцінка вартості та строків',
                  'Укладення попередніх домовленостей',
                  'Розробка технічного завдання',
                  'Уточнення вартості та строків',
                  'Авансовий платіж (40%)',
                ].map((item, index) => (
                  <li key={index} className="flex items-center justify-end gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span>{item}</span>
                    <FaCheckCircle className="text-gray-600 w-5 h-5" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center my-6 md:my-0">
              <motion.div
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gray-800 text-2xl z-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaRocket />
              </motion.div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:hidden" />
          </motion.div>

          {/* Фаза 2: Розробка */}
          <motion.div className="flex flex-col md:flex-row items-center mb-16" variants={fadeInUp}>
            <div className="md:w-1/2 md:pr-12 md:hidden" />
            <div className="flex items-center justify-center my-6 md:my-0">
              <motion.div
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gray-800 text-2xl z-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaCode />
              </motion.div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">02. Розробка</h3>
              <ul className="text-lg text-gray-600 space-y-3 list-none">
                <li className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FaCheckCircle className="text-gray-600 w-5 h-5" />
                  Отримання додаткової інформації
                </li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FaCheckCircle className="text-gray-600 w-5 h-5 mt-1" />
                  <span>
                    Розробка бета-версії проєкту:
                    <ul className="pl-6 space-y-1 mt-1 list-disc">
                      <li>Базова архітектура</li>
                      <li>Дизайн UI та UX</li>
                      <li>Розробка функціоналу</li>
                      <li>Налаштування інтеграцій</li>
                      <li>Тестування</li>
                    </ul>
                  </span>
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FaCheckCircle className="text-gray-600 w-5 h-5" />
                  Здача бета-версії та переліку правок
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Фаза 3: Запуск */}
          <motion.div className="flex flex-col md:flex-row items-center" variants={fadeInUp}>
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">03. Запуск</h3>
              <ul className="text-lg text-gray-600 space-y-3 list-none">
                {[
                  'Внесення правок',
                  'Корегування текстів',
                  'Здача першого месенджеру',
                  'Розробка додаткових месенджерів',
                  'Здача фінальної версії проєкту',
                  'Технічна підтримка',
                ].map((item, index) => (
                  <li key={index} className="flex items-center justify-end gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span>{item}</span>
                    <FaCheckCircle className="text-gray-600 w-5 h-5" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center my-6 md:my-0">
              <motion.div
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gray-800 text-2xl z-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaCheckCircle />
              </motion.div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:hidden" />
          </motion.div>
        </motion.div>

        {/* Перенесений текст по центру */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={purchasesInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <HighlightedTextWithDots
              colorText="#333333"
              colorBackground="#e0e0e0"
              colorDots="#4a4a4a"
              widthDots={8}
              widthBorder={3}
            >
              Ми розробляємо все кодом, створюючи повністю кастомне рішення під ваші потреби
            </HighlightedTextWithDots>
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Ви платите лише за готовий продукт — без щомісячних платежів чи додаткових витрат!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Purchase;