import React from 'react';
import Button from './Button';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

const PRICE_PLANS = [
  {
    title: 'Lite',
    description:
      'Для малого бізнесу: автоматизуйте відповіді на популярні запитання та оптимізуйте час. Це найкращий старт для тих, хто хоче зекономити на рутині.',
    originalPrice: '1500 грн',
    discountedPrice: '1000 грн',
    orderText: 'Замовити зараз',
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
    description:
      'Оптимальний вибір для середнього бізнесу. Бот із зворотнім зв\'язком і функціями, що збільшать вашу конверсію.',
    originalPrice: '4000 грн',
    discountedPrice: '3000 грн',
    orderText: 'Замовити вигідно',
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
    description:
      'Ідеально для великого бізнесу. Бот з інтеграцією бази даних та можливістю масштабування під будь-які потреби.',
    originalPrice: '8000 грн',
    discountedPrice: '6000 грн',
    orderText: 'Замовити найкраще',
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

const FAQS = [
  {
    question: 'Як довго триває розробка бота?',
    answer: 'Час розробки залежить від складності проекту, але в середньому це займає від 1 до 3 тижнів.',
  },
  {
    question: 'Чи можна інтегрувати бота з моєю CRM системою?',
    answer: 'Так, ми можемо інтегрувати бота з вашою CRM системою для більш ефективного управління клієнтами.',
  },
  {
    question: 'Чи надаєте ви підтримку після запуску бота?',
    answer: 'Так, ми надаємо 24/7 підтримку та моніторинг сервера для забезпечення безперебійної роботи бота.',
  },
  {
    question: 'Які мови підтримує бот?',
    answer: 'Бот може підтримувати будь-яку мову, яку ви оберете. Ми можемо налаштувати бота для роботи з кількома мовами.',
  },
  {
    question: 'Чи можна змінити дизайн бота?',
    answer: 'Так, ми можемо створити унікальний дизайн для вашого бота, включаючи аватарки, супутні зображення та брендування.',
  },
  {
    question: 'Які платежні системи підтримує бот?',
    answer: 'Бот може інтегруватися з різними платежними системами, такими як PayPal, Stripe, LiqPay та іншими.',
  },
  {
    question: 'Чи можна додати функцію онлайн-консультацій?',
    answer: 'Так, ми можемо додати функцію онлайн-консультацій, що дозволить вашим клієнтам зв\'язуватися з вами в режимі реального часу.',
  },
  {
    question: 'Які гарантії ви надаєте?',
    answer: 'Ми надаємо гарантію на наші послуги та підтримку протягом 6 місяців після запуску бота.',
  },
  {
    question: 'Чи можна інтегрувати бота з соціальними мережами?',
    answer: 'Так, ми можемо інтегрувати бота з різними соціальними мережами, такими як Facebook, Instagram, Twitter та іншими.',
  },
  {
    question: 'Які функції можна додати до бота?',
    answer: 'Ви можете додати різні функції, такі як запис на послуги, відстеження замовлень, опитування клієнтів та інше.',
  },
  {
    question: 'Чи можна налаштувати бота для роботи в різних часових зонах?',
    answer: 'Так, ми можемо налаштувати бота для роботи в різних часових зонах, щоб він міг обслуговувати клієнтів з різних частин світу.',
  },
  {
    question: 'Які технології ви використовуєте для розробки ботів?',
    answer: 'Ми використовуємо сучасні технології, такі як Python, Node.js, та різні фреймворки для розробки ботів.',
  },
  {
    question: 'Чи можна додати функцію відстеження замовлень?',
    answer: 'Так, ми можемо додати функцію відстеження замовлень, що дозволить вашим клієнтам відстежувати статус своїх замовлень.',
  },
  {
    question: 'Чи можна інтегрувати бота з моєю системою управління замовленнями?',
    answer: 'Так, ми можемо інтегрувати бота з вашою системою управління замовленнями для більш ефективного управління замовленнями.',
  },
  {
    question: 'Чи можна налаштувати бота для роботи з кількома мовами?',
    answer: 'Так, ми можемо налаштувати бота для роботи з кількома мовами, що дозволить вам обслуговувати клієнтів з різних країн.',
  },
];

export async function getServerSideProps() {
  // Отримання даних з API або бази даних
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}

const Page = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Ціни на розробку чат ботів, сайтів, парсерів, інтернет магазинів, ботів з ші</title>
        <meta name="description" content="Ціни на розробку телеграм ботів, скільки коштує створити телеграм бота, ціни на розробку чат ботів та сайтів, розробка телеграм ботів, розробка чат ботів, розробка сайтів" />
        <meta name="keywords" content="Ціни на розробку телеграм ботів, скільки коштує створити телеграм бота, ціни на розробку чат ботів та сайтів, розробка телеграм ботів, розробка чат ботів, розробка сайтів, розробник, ціна телеграм ботів, ціна чат ботів, ціна сайтів, ціна парсерів, ціна інтернет магазинів, ціна ботів з ші, розробити телеграм бот, розробити чат бот, розробити сайт, розробити парсер, розробити інтернет магазин, розробити бот з ші" />
      </Helmet>
      
      {/* Introduction Section */}
      <div className="p-8 flex-grow mt-20 max-w-4xl mx-auto">
        <a href='https://t.me/TeleBotsNowayrmChannel' target='_blank' rel='noopener noreferrer'>
          <img src='/about.jpg' alt='Telegram Channel Banner' className='w-full max-w-4xl mb-10 rounded-lg shadow-lg' />
        </a>
        
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Кожний бот унікальний
        </h1>
        <p className="text-xl text-left text-gray-700 mb-6">
          Кожний чат бот є унікальним кейсом, що створений вирішувати проблему, чи розв'язувати питання
          характерні саме для вашого випадку, напрямку бізнесу чи потреби. Саме завдяки своїй
          універсальності телеграм боти й здобули такого розповсюдження, та почали повсемісну
          інтеграцію в бізнеси які раніше обходились без цифрових рішень (салони краси, кафе та
          ресторани).
        </p>
        <p className="text-xl text-left text-gray-700">
          Виходячи з цього ми розглядаємо кожне звернення індивідуально, та вираховуємо вартість
          реалізації вашої ідеї.
        </p>
      </div>

      {/* Price Plans Section */}
      <div className="p-8 flex-grow mt-10 max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-800 hover:text-gray-600 transition-colors duration-300">
          Вартість розробки Telegram ботів
        </h2>

        <div className="grid xl:grid-cols-3 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {PRICE_PLANS.map((plan, index) => (
            <div
              className="price-item p-8 border rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl bg-white"
              key={index}
            >
              <h3 className="text-2xl font-bold mb-6">{plan.title}</h3>
              <p className="text-lg mb-4">{plan.description}</p>
              <div className="text-xl font-semibold text-green-600 mb-6">
                <span className="line-through text-gray-500">{plan.originalPrice}</span>
                <span className="ml-2 text-blue-600">{plan.discountedPrice}</span>
              </div>
              <a href={plan.orderLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-500 text-white px-6 py-3 rounded-full mb-6 hover:bg-blue-600 transition-colors">
                  {plan.orderText}
                </Button>
              </a>
              <div className="features text-left text-gray-700">
                <h4 className='font-semibold mb-4'>Що входить:</h4>
                <ul className='list-disc list-inside space-y-2'>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 p-10 mt-16 text-center rounded-2xl shadow-xl">
        <h3 className="text-3xl font-extrabold text-black-700 mb-6">Часто задавані питання</h3>
        <Accordion>
          {FAQS.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header style={{ backgroundColor: '#1f2937', borderRadius: '0.5rem', color: '#ffffff' }}>
                {faq.question}
              </Accordion.Header>
              <Accordion.Body 
                style={{ 
                  backgroundColor: '#e5e7eb', // Сірий колір для фону відповіді
                  borderRadius: '0.5rem', 
                  color: '#333333', 
                  padding: '1rem',
                  marginTop: '0.5rem', // Відступ зверху для кращого візуального розділення
                  border: '1px solid #d1d5db', // Легка рамка для акценту
                }}
              >
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* Additional Information Section */}
      <div className="bg-blue-50 p-12 mt-20 text-center rounded-2xl shadow-xl max-w-6xl mx-auto">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-8">Головне в дрібницях</h3>
        <p className="text-xl text-gray-700">
          Розробка чат-боту це не лише написання коду. Все починається з написання сценарію та
          текстової частини й ми можемо вам у цьому допомогти. Для надання боту привабливого та
          індивідуального вигляду наші дизайнери створять для вас унікальне оформлення - аватарки,
          супутні зображення, брендування для ваших матеріалів. А вже готового бота ми розміщуємо
          на наших серверах та контролюємо його безперебійну роботу.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-50 p-12 mt-20 text-center rounded-2xl shadow-xl max-w-6xl mx-auto">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-8">Зв'яжіться з нами</h3>
        <p className="text-xl text-gray-700 mb-6">
          Якщо у вас є питання або ви хочете дізнатися більше про наші послуги, будь ласка, зв'яжіться з нами.
        </p>
        <a href="https://t.me/nowayrm" target="_blank" rel="noopener noreferrer">
          <Button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Зв'язатися з нами
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Page;