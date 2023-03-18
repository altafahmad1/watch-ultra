export default function Header() {
	return (
		<header className='bg-primaryLight text-white px-[10%] py-4 flex h-75px'>
			<div className='basis-1/6'>
				<img src='/logo.svg' className='h-[30px] w-[30px]' alt='apple logo' />
			</div>
			<nav className='flex items-center justify-between text-base basis-4/6'>
				<a href='#' className='text-center'>
					Store
				</a>
				<a href='#' className='text-center'>
					Mac
				</a>
				<a href='#' className='text-center'>
					Iphone
				</a>
				<a href='#' className='text-center'>
					Ipad
				</a>
				<a href='#' className='text-center'>
					Watch
				</a>
				<a href='#' className='text-center'>
					Airpods
				</a>
				<a href='#' className='text-center'>
					TV & Home
				</a>
				<a href='#' className='text-center'>
					Entertainment
				</a>
				<a href='#' className='text-center'>
					Support
				</a>
			</nav>
			<div className='flex items-center justify-end basis-1/6 gap-x-8'>
				<img
					src='/search.svg'
					className='h-[22px] w-[22px]'
					alt='search icon'
				/>
				<img src='/cart.svg' className='h-[22px] w-[22px]' alt='cart icon' />
			</div>
		</header>
	);
}
