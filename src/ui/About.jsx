import React from 'react';
import { useInView } from 'react-intersection-observer';
import Auction from './Auction';
import Button from './Button';

function About() {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: auctionsRef, inView: auctionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='about' className='min-h-screen about relative flex flex-col'>
      <div className='container flex-1 flex items-center'>
        <div className='w-full flex md:justify-end justify-center items-center'>
          <div
            ref={textRef}
            className={`2xl:max-w-[500px] md:max-w-[400px] w-full px-10 md:px-0 flex flex-col gap-7 text-lg z-40 py-10 xl:py-0 transition-opacity duration-1000 ${
              textInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className='text-5xl font-bold text-center'><br />Про нас</h2>
            <p className='font-bold text-xl'>
              TeleBots - це молода але досвідчена команда, яка займається розробкою чат-ботів в телеграм, Вайбері, Інстаграмі.
            </p>
            <p className='text-lg font-semibold'>
				Ми створюємо:<br />

				• Телеграм-боти для автоматизації продажів, підтримки клієнтів чи управління бізнесом.<br />
				• Чат-боти, які допомагають швидко обробляти заявки або спілкуватися з клієнтами.<br />
				• Сайти – від простих лендінгів до складних платформ.<br />
				• Парсери для збору даних з необхідних джерел.<br />
				• Автоворонка для автоматизації продажів і комунікації з лідами.<br />
				</p>
				<p className='text-lg font-semibold'>
					Ми будуємо бізнес по-європейськи! Позаштатне гасло компанії «задоволений клієнт - вище доходів», тому у нас 101% задоволених клієнтів!
				</p>
				<p className='text-lg font-semibold'>
					Ми на зв'язку 24/7, тому залишайте вашу заявку в формі, або пишіть нам на телеграм і ми безкоштовно прокунсультуємо вас!				</p>

            <div className='flex justify-center'>
              <a href='https://t.me/nowayrm' target='_blank' rel='noopener noreferrer'>
                <Button className='text-white'>Зв'яжіться з нами</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={auctionsRef}
        className={`w-full bg-white py-5 z-40 transition-opacity duration-1000 ${
          auctionsInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='container flex items-center lg:justify-between gap-12 lg:gap-4 xl:gap-0 flex-wrap justify-center'>
          <Auction src='adesa.png' alt='adesa auction' />
          <Auction src='iaai.png' alt='iaai auction' />
          <Auction src='copart.png' alt='copart auction' />
          <Auction src='partners.png' alt='partners auction' />
          <Auction src='shabo.png' alt='partners auction' />
          <Auction src='manheim.png' alt='manheim auction' />
          <Auction src='culture.png' alt='manheim auction' />
          <Auction src='cosmy.jpg' alt='manheim auction' />
          <Auction src='carmax.png' alt='carmax auction' className='max-h-10' />
        </div>
      </div>
    </section>
  );
}

export default About;
