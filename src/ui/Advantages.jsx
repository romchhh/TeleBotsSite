import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Advantage from './Advantage';
import Button from './Button';
import './Advantages.css';

const ADVANTAGES = [
  {
    emoji: '🚀',
    title: 'Досвід',
    description: 'Розробляємо Telegram боти, сайти, інтернет-магазини з 2021 року.',
  },
  {
    emoji: '⚡',
    title: 'Швидкість',
    description: 'Оптимізовані процеси розробки без втрати якості.',
  },
  {
    emoji: '🔧',
    title: 'Функціональність',
    description: 'Багатофункціональні боти з підтримкою всіх необхідних функцій.',
  },
  {
    emoji: '🎯',
    title: 'Індивідуальність',
    description: 'Розробка під ваші специфічні потреби.',
  },
  {
    emoji: '🛟',
    title: 'Підтримка',
    description: 'Постійна технічна підтримка та обслуговування.',
  },
  {
    emoji: '👨‍💻',
    title: 'Професіонали',
    description: 'Досвідчена команда розробників.',
  }
];

function Advantages() {
  const { ref: advantagesRef, inView: advantagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='advantages-section' id='advantages'>
      <div className='advantages-container'>
        <div className='advantages-header'>
          <h2>Наші переваги</h2>
          <p>Чому обирають саме нас</p>
        </div>
        
        <div
          ref={advantagesRef}
          className={`advantages-grid ${advantagesInView ? 'visible' : ''}`}
        >
          {ADVANTAGES.map((advantage, index) => (
            <div 
              className='advantage-card' 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="advantage-emoji">{advantage.emoji}</div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className='contact-section'>
          <p>Готові розпочати співпрацю?</p>
          <a href='https://t.me/nowayrm' target='_blank' rel='noopener noreferrer'>
            <Button>Зв'яжіться з нами</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
