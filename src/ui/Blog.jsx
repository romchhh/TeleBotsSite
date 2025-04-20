import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import Button from './Button'; // Assuming Button is in the same folder
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    title: 'Як створити свого першого Telegram бота',
    image: '/blog1.png',
    link: '/blog/your-first-telegram-bot',
  },
  {
    title: 'Інтеграція Telegram бота з іншими сервісами',
    image: '/blog2.jpg',
    link: '/blog/integrations',
  },
  {
    title: 'Як я розробляю телеграм боти?',
    image: '/blog3.png',
    link: '/blog/developing',
  },
  {
    title: 'Налаштування воронок для продаж з допомогою чат-ботів',
    image: '/blog4.png',
    link: '/blog/magnetto',
  },
  {
    title: 'Інтернет магазини в телеграмі',
    image: '/blog5.png',
    link: '/blog/e-commerce',
  },
  {
    title: 'Розробка сайтів від TeleBots',
    image: '/blog6.png',
    link: '/blog/sites',
  },
  {
    title: 'Як Telegram боти допомагають збільшити продажі та лояльність клієнтів',
    image: '/blog7.png',
    link: '/blog/increase-sales',
  },
  {
    title: 'Телеграм боти для збору даних від клієнтів',
    image: '/blog8.png',
    link: '/blog/feedback',
  },
  {
    title: 'Як заробляти з допомогою телеграм ботів?',
    image: '/blog9.png',
    link: '/blog/how-to-earn-money',
  },
  {
    title: 'Перспективи телеграм ботів в Україні на 2025 рік',
    image: '/blog10.png',
    link: '/blog/perspectives-in-ukraine',
  },
  {
    title: 'Штучний інтелект в телеграм ботах',
    image: '/blog11.png',
    link: '/blog/ai-in-bots',
  },
  {
    title: 'Налаштування бота для збору лідів та збільшення конверсії',
    image: '/blog12.png',
    link: '/blog/more-leads',
  },
  {
    title: 'Як монетизувати телеграм бота',
    image: '/blog13.png',
    link: '/blog/how-to-monetize-telegram-bot',
  },
  {
    title: 'Парсери від TeleBots',
    image: '/blog14.png',
    link: '/blog/parsers_telebots',
  },
];



const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Блог про чат-боти та інші технології</title>
        <meta name="description" content="Дізнайтеся все про чат-боти, їхні переваги та можливості. Читайте статті, відео та огляди наших проектів." />
        <meta name="keywords" content="чат-боти, технології, інновації, розробка, автоматизація, боти з ШІ, інтернет магазини в телеграмі, налаштування воронок для продаж з допомогою чат-ботів, як заробляти з допомогою телеграм ботів, перспективи телеграм ботів в Україні на 2025 рік, штучний інтелект в телеграм ботах, налаштування бота для збору лідів та збільшення конверсії, як монетизувати телеграм бота" />
      </Helmet>

      {/* Introduction Section */}
      <div className="p-6 flex-grow mt-20">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 rounded-lg">
          Блог
        </h1>
        <p className="text-2xl mb-10 text-gray-700 text-center">
          Ласкаво просимо до нашого блогу! Тут ви знайдете корисну <br />
          інформацію, новини в світі чат-ботів та не тільки.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <a
              href={post.link}
              key={index}
              className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                  {post.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Centered Button */}
      <div className="flex items-center justify-center">
        <a
          href="https://t.me/nowayrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center justify-center text-white">
            Замовити розробку
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Blog;