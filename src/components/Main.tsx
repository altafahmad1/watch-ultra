import { useRef } from 'react';

export default function Main() {
	const headingRef = useRef<HTMLHeadingElement>(null);
	const headingRef2 = useRef<HTMLHeadingElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const backBtnRef = useRef<HTMLButtonElement>(null);
	const customizeBtnRef = useRef<HTMLButtonElement>(null);

	const moveMainImage = () => {
		imageRef.current?.classList.remove('left-0', 'right-0', 'top-[50%]');
		imageRef.current?.classList.add('left-0', 'right-[500px]', 'top-[70%]');
	};
	const resetMainImage = () => {
		imageRef.current?.classList.remove('left-0', 'right-[500px]', 'top-[70%]');
		imageRef.current?.classList.add('left-0', 'right-0', 'top-[50%]');
	};

	const toggleCustomize = () => {
		headingRef.current?.classList.toggle('opacity-100');
		headingRef2.current?.classList.toggle('opacity-100');
		headingRef.current?.classList.toggle('opacity-0');
		headingRef2.current?.classList.toggle('opacity-0');
		backBtnRef.current?.classList.toggle('opacity-0');
		customizeBtnRef.current?.classList.toggle('opacity-100');
		customizeBtnRef.current?.classList.toggle('opacity-0');
	};

	return (
		<main className='relative flex flex-col h-[calc(100vh-75px)] items-center justify-center'>
			<button
				onClick={() => {
					toggleCustomize();
					resetMainImage();
				}}
				ref={backBtnRef}
				className='absolute flex items-center top-[10%] left-[10%] opacity-0 transition-opacity duration-500'
			>
				<svg
					className='dark:fill-white fill-black'
					width='12'
					height='20'
					viewBox='0 0 18 30'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M16.8608 4.58864L6.4643 14.9851L16.8608 25.3816C17.9058 26.4266 17.9058 28.1147 16.8608 29.1597C15.8158 30.2047 14.1277 30.2047 13.0827 29.1597L0.78376 16.8608C-0.261246 15.8158 -0.261246 14.1277 0.78376 13.0827L13.0827 0.783754C14.1277 -0.261251 15.8158 -0.261251 16.8608 0.783754C17.879 1.82876 17.9058 3.54364 16.8608 4.58864Z' />
				</svg>
				<span className='ml-2'>Back</span>
			</button>
			<div className='relative font-bold text-[130px] w-full'>
				<h1
					ref={headingRef}
					className='dark:text-primaryDark text-center leading-[9rem] transition-opacity opacity-100 duration-500'
				>
					WATCH
					<br />
					ULTRA
				</h1>
				<img
					ref={imageRef}
					src='/watch-orange.png'
					className='absolute left-0 right-0 mx-auto top-[50%] -translate-y-[50%] w-[400px] transition-all duration-500'
					alt='Orange Colored Watch'
				/>
				<h1
					ref={headingRef2}
					className='z-10 absolute left-0 right-0 mx-auto bottom-0 main-heading-light dark:main-heading-dark text-center leading-[9rem] transition-opacity opacity-100 duration-500'
				>
					WATCH
					<br />
					ULTRA
				</h1>
			</div>
			<button
				ref={customizeBtnRef}
				onClick={() => {
					toggleCustomize();
					moveMainImage();
				}}
				className='bg-[#0071E3] px-10 mt-14 py-4 rounded-[25px] text-white opacity-100 transition-opacity duration-500'
			>
				Customize
			</button>
		</main>
	);
}
