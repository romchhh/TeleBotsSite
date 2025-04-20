import React from 'react';
import { useInView } from 'react-intersection-observer';
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';

function Projects() {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id='projects' 
      className='min-h-screen flex items-center justify-center py-12 bg-gradient-to-b from-gray-50 to-gray-100'
      ref={projectsRef}
    >
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold mb-8'>
            <HighlightedTextWithDots
              colorText="#333333"
              colorBackground="#e0e0e0"
              colorDots="#4a4a4a"
              widthDots={10}
              widthBorder={4}
            >
              240+ реалізованих проєктів
            </HighlightedTextWithDots>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            <HighlightedTextWithDots
              colorText="#333333"
              colorBackground="#e0e0e0"
              colorDots="#4a4a4a"
              widthDots={8}
              widthBorder={3}
            >
              TeleBots – ваш надійний партнер з розробки чат-ботів
            </HighlightedTextWithDots>
          </p>
          <p className='text-lg text-gray-600 mt-4 max-w-3xl mx-auto'>
            Ми глибоко пірнаємо в процеси Вашої компанії, доточуючи кожен з них до ідеалу
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105'>
            <div className='text-4xl font-bold text-gray-800 mb-4'>3 роки</div>
            <div className='text-lg text-gray-600'>
              експертизи в автоматизації бізнес-процесів
            </div>
          </div>
          <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105'>
            <div className='text-4xl font-bold text-gray-800 mb-4'>85%</div>
            <div className='text-lg text-gray-600'>
              замовників прийшли по рекомендації клієнтів та партнерів
            </div>
          </div>
          <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105'>
            <div className='text-4xl font-bold text-gray-800 mb-4'>5 000 000+</div>
            <div className='text-lg text-gray-600'>
              активних користувачів в розроблених чат-ботах
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
