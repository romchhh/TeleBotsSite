import React from 'react';
import { useInView } from 'react-intersection-observer';
import Advantage from './Advantage';
import Button from './Button';
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';
import './Advantages.css'; // Імпортуємо CSS-файл

const ADVANTAGES = [
  {
    img: 'advantage_1.PNG',
    title: 'ДОСВІД',
    description:
      'Ми займаємося розробкою Telegram ботів з 2021 року. Наш досвід допомагає створювати рішення для будь-яких задач клієнтів.',
  },
  {
    img: 'advantage_2.PNG',
    title: 'ШВИДКІСТЬ',
    description:
      'Наш досвід і оптимізовані процеси дозволяють нам розробляти боти швидко, не жертвуючи якістю та надійністю.',
  },
  {
    img: 'advantage_6.PNG',
    title: 'ФУНКЦІОНАЛЬНІСТЬ',
    description:
      'Ми розробляємо багатофункціональні чат-боти, які підтримують повідомлення, обробку заявок, платежі та багато іншого.',
  },
  {
    img: 'advantage_4.PNG',
    title: 'ІНДИВІДУАЛЬНИЙ ПІДХІД',
    description:
      'Кожен бот розробляється з урахуванням потреб клієнта, щоб задовольнити специфічні вимоги бізнесу.',
  },
  {
    img: 'advantage_5.PNG',
    title: 'ТЕХНІЧНА ПІДТРИМКА',
    description:
      'Забезпечуємо технічну підтримку та обслуговування ваших ботів, щоб гарантувати їх стабільну роботу.',
  },
  {
    img: 'advantage_7.PNG',
    title: 'КОМАНДА ПРОФЕСІОНАЛІВ',
    description:
      'Наша команда має досвід роботи з Telegram API та сучасними технологіями для створення надійних рішень.',
  },
  {
    img: 'advantage_3.PNG',
    title: 'ІНТЕГРАЦІЇ',
    description:
      'Можемо інтегрувати ваш бот із зовнішніми системами та платформами для автоматизації бізнес-процесів.',
  },
  {
    img: 'advantage_8.PNG',
    title: 'ПЕРСОНАЛІЗАЦІЯ',
    description:
      'Ми надаємо можливість створити унікальні Telegram боти для бізнесу з персоналізованим дизайном та функціоналом.',
  },
];

function Advantages() {
  const { ref: advantagesRef, inView: advantagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className='min-h-screen advantages flex flex-col justify-center items-center gap-24 py-10 bg-gradient-to-b from-gray-50 to-gray-100'
      id='advantages'
    >
      <div className='text-center'>
        <h2 className='text-5xl font-bold mb-8'>
          <HighlightedTextWithDots
            colorText="#333333"
            colorBackground="#e0e0e0"
            colorDots="#4a4a4a"
            widthDots={10}
            widthBorder={4}
          >
            Наші переваги
          </HighlightedTextWithDots>
        </h2>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          <HighlightedTextWithDots
            colorText="#333333"
            colorBackground="#e0e0e0"
            colorDots="#4a4a4a"
            widthDots={8}
            widthBorder={3}
          >
            Чому саме ми?
          </HighlightedTextWithDots>
        </p>
      </div>
      <div
        ref={advantagesRef}
        className={`container grid xl:grid-cols-4 gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center content-center transition-all duration-1000 ${
          advantagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {ADVANTAGES.map((advantage, index) => (
          <div 
            className='advantage-item bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105' 
            key={index}
          >
            <Advantage
              src={advantage.img}
              title={<span className="text-black font-bold text-xl">{advantage.title}</span>}
              index={index + 1}
            >
              <p className="text-gray-600 mt-4">{advantage.description}</p>
            </Advantage>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <p className='text-xl text-gray-600 mb-8'>
          <HighlightedTextWithDots
            colorText="#333333"
            colorBackground="#e0e0e0"
            colorDots="#4a4a4a"
            widthDots={8}
            widthBorder={3}
          >
            Готові розпочати співпрацю?
          </HighlightedTextWithDots>
        </p>
        <a 
          href='https://t.me/nowayrm' 
          target='_blank' 
          rel='noopener noreferrer'
          className='inline-block transform hover:scale-105 transition-transform duration-300'
        >
          <Button className='text-white'>Зв'яжіться з нами</Button>
        </a>
      </div>
    </section>
  );
}

export default Advantages;
