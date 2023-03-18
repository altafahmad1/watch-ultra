export default function Main() {
	return (
		<main className='flex items-center justify-center h-screen'>
			<div className='relative font-bold text-[130px]'>
				<h1 className='dark:text-primaryDark text-center leading-[9rem]'>
					WATCH
					<br />
					ULTRA
				</h1>
				<img
					src='/watch-orange.png'
					className='absolute left-0 right-0 mx-auto top-[50%] -translate-y-[50%] w-[400px]'
					alt='Orange Colored Watch'
				/>
				<h1 className='z-10 absolute bottom-0 main-heading-light dark:main-heading-dark text-center leading-[9rem]'>
					WATCH
					<br />
					ULTRA
				</h1>
			</div>
		</main>
	);
}
