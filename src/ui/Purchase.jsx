import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaFileInvoice,
  FaSearch,
  FaClipboardList,
  FaCar,
} from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { RiAuctionFill } from 'react-icons/ri';
import PurchaseItem from './PurchaseItem';

// Оновлений масив з новими іконками та більш захоплюючими описами
const PURCHASES = [
  {
    img: <FaFileInvoice size={24} className="icon" />,
    title: 'Заявка на сайті або в телеграмі',
    description: 'Залиште заявку на нашому сайті або напишіть нам в телеграмі, і ми зв\'яжемося з вами найближчим часом.',
  },
  {
    img: <FaSearch size={24} className="icon" />,
    title: 'Консультація та аудит',
    description: 'Ми проведемо консультацію та аудит вашого бізнесу, щоб зрозуміти ваші потреби та підібрати оптимальний функціонал.',
  },
  {
    img: <FaClipboardList size={24} className="icon" />,
    title: 'Проєктування функціоналу',
    description: 'Ми розробляємо детальний план функціоналу вашого чат-бота, враховуючи всі ваші вимоги.',
  },
  {
    img: <RiAuctionFill size={24} className="icon" />,
    title: 'Розробка чат-бота',
    description: 'Наша команда професіоналів розробляє чат-бота з урахуванням всіх ваших потреб та вимог.',
  },
  {
    img: <GiAutoRepair size={24} className="icon" />,
    title: 'Тестування результатів',
    description: 'Ми ретельно тестуємо чат-бота, щоб забезпечити його стабільну та надійну роботу.',
  },
  {
    img: <FaCar size={24} className="icon" />,
    title: 'Запуск проєкту',
    description: 'Ми запускаємо ваш чат-бот та надаємо повну підтримку для забезпечення його успішної роботи.',
  },
];

function Purchase() {
  const { ref: purchasesRef, inView: purchasesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id='purchase-scheme'
      className='min-h-screen flex items-center justify-center py-5'
    >
      <div className='container flex flex-col gap-24'>
        <h2 className='text-5xl font-bold lg:text-left text-center'>
          Як ми працюємо?
        </h2>
        <div
          ref={purchasesRef}
          className={`inline-flex gap-4 flex-wrap justify-center m-auto transition-opacity duration-1000 ${
            purchasesInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {PURCHASES.map((item, index) => (
            <PurchaseItem index={index + 1} title={item.title} key={index} description={item.description}>
              {item.img}
            </PurchaseItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Purchase;
