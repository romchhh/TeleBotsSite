import { toast } from 'react-toastify';
import Button2 from './Button2';
import Input from './Input';
import PhoneInput from './PhoneInput';

function Hero() {
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const name = formData.get('name');
		const phone = formData.get('phone');

		if (name === '' || phone === '') {
			toast.error('Введіть всі дані!', {
				position: 'top-right',
				autoClose: 5000,
			});
			return;
		}

		try {
			const response = await fetch('http://localhost:5000/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, phone }),
			});

			if (response.ok) {
				toast.success('Повідомлення надіслано!', {
					position: 'top-right',
					autoClose: 4000,
				});
			} else {
				throw new Error('Failed to send email');
			}
		} catch (error) {
			toast.error('Не вдалося надіслати повідомлення. Спробуйте пізніше.', {
				position: 'top-right',
				autoClose: 4000,
			});
		}
	};

	return (
		<section className='hero z-0'>
			<div className='container h-full relative'>
				<div className='absolute top-1/2 translate-y-[-50%] flex items-center justify-between w-full left-1/2 translate-x-[-50%] gap-5 lg:flex-row flex-col sm:mt-0 mt-8'>
				<h1 className='xl:text-3xl md:text-2xl text-xl text-white font-bold uppercase bg-black/45 xl:px-16 xl:py-6 sm:px-10 px-4 py-3 rounded-2xl text-center'>
				Розробка чат ботів на замовлення <br />
					<span className='xl:text-lg lg:text-md text-xs'>
					Налаштовуйте автовідповіді, <br /> запускайте розсилки <br />
					і автоматизуйте бізнес-процеси <br /> за допомогою ботів
					</span>
					</h1>
					<form
    className='w-full 2xl:max-w-[450px] max-w-[300px] flex flex-col items-center md:p-10 p-4 rounded-2xl gap-6 sm:gap-12 shadow-slate-800'
    style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', background: 'linear-gradient(to right, #4B0000, #8B0000)' }}
>
    <h2 className='md:text-2xl text-xl font-bold text-white uppercase max-w-[300px] text-center'>
        Безкоштовна консультація
    </h2>
    <Input name='name' type='text' required={true}>
        Ваше Ім&apos;я
    </Input>
    <PhoneInput name='phone' required={true}>
        Номер телефону
    </PhoneInput>
    <a
        href='https://t.me/nowayrm'
        className='text-accent w-full hover:bg-light-gray bg-white text-center py-2 rounded'
        target='_blank'
        rel='noopener noreferrer'
    >
        Зв'яжіться з нами
    </a>
</form>
				</div>
			</div>
		</section>
	);
}

export default Hero;