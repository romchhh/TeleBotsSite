import React from 'react';

function Reviews() {
    const reviews = [
        {
            name: 'Данііл Бережанський',
            text: 'Чудовий сервіс! Я дуже задоволений. Хоч і виникли проблеми на етапі розробки, але команда допомогла їх вирішити.',
            photo: 'photo1.png',
            alt: 'Телеграм бот відгук'
        },
        {
            name: 'Андрій Коваль (Власник мережі каналів)',
            text: 'Роботою дуже задоволений, вдалось реалізувати мою ідею з ботом, дослухались до моїх думок і підказували на етапі розробки функціоналу. Тому раджу кожному хто задумується над створенням бота. Дякую',
            photo: 'photo2.png',
            alt: 'Телеграм бот відгук'
        },
        {
            name: 'Роман (Арбітраж)',
            text: 'И спасибо тебе за бота, Очень классный и удобный бот получился⚡️',
            photo: 'photo3.png',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Анна Коваленко',
            text: 'Відмінний сервіс, констультували на кожному етапі розробки бота, дякую за допомогу!',
            photo: 'photo4.png',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Богдан Тимченко (Мережа косметики Cosmy)',
            text: 'Все пройшло на вищому рівні. Ви молодець, дякую 🙏🏻',
            photo: 'photo5.png',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Софія Павлік (Дизайнер)',
            text: 'Команда допомогала мені з стартапом з першого етапу, консультували, пропонували, були повністю задіяні в проєкті, якщо плануєте розробку чат-бота, звертайтесь до цієї команди, не пожалієте. 10 з 10❤️',
            photo: 'photo6.png',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Андрій Костюков (Бізнес)',
            text: 'Після кількох невдалих спроб знайти професійний сервіс для мого стартапу, я нарешті знайшов цю команду.',
            photo: 'photo7.png',
            alt: 'Телеграм-бот відгук'
        },
        {
            name: 'Вiталiй Левченко',
            text: 'Привіт, воу оце крутяк ☺️. Наша компанія шукала спосіб швидко та якісно покращити підтримку клієнтів, Роман допоміг вирішити нашу проблему.',
            photo: 'photo8.png',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Григорій Малюк',
            text: 'Я завжди скептично ставився до сервісів, але тут якість розробки та комунцікацій мене задоволнила.',
            photo: 'photo9.png',
            alt: 'Телеграм-бот відгук'
        },
    ];

    return (
        <section id='reviews' className='py-10'>
            <div className='container'>
                <div className='w-full text-center mb-10'>
                    <h2 className='text-3xl font-bold mb-5'>Відгуки клієнтів</h2>
                    <hr className='border-t-2 border-gray-300 mx-auto w-1/4 mb-5' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {reviews.map((review, index) => (
                        <div key={index} className='bg-white p-5 rounded-lg shadow-lg'>
                            <img
                                src={review.photo}
                                alt={review.name}
                                className='w-20 h-20 rounded-full mx-auto mb-4 sm:w-24 sm:h-24'
                            />
                            <h3 className='text-lg font-semibold text-center'>{review.name}</h3>
                            <p className='text-gray-600 text-center'>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews;
