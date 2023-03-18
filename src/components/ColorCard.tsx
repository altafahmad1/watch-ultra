type ColorCardProps = {
	className?: string;
	innerRef?: React.Ref<HTMLDivElement>;
};

export default function ColorCard({ className, innerRef }: ColorCardProps) {
	const boxShadows = {
		dark: `dark:shadow-[0px_12px_65px_rgba(245,105,0,0.06),0px_2.6px_14.5px_rgba(245,105,0,0.03),0px_0.8px_4.5px_rgba(245,105,0,0.02)]`,
		light: `shadow-[0px_12px_65px_rgba(0,0,0,0.06),0px_2.6px_14.5px_rgba(0,0,0,0.03),0px_0.8px_4.5px_rgba(0,0,0,0.02)]`,
	};

	return (
		<div
			ref={innerRef}
			className={`w-[250px] h-[400px] flex flex-col p-8 justify-between ${boxShadows.dark} ${boxShadows.light} rounded-3xl opacity-0 transition-opacity duration-500 ${className}`}
		>
			<div>
				<h3 className='mb-4 text-lg text-center'>Band Color</h3>
				<div className='flex justify-between'>
					<button className='w-10 h-10 rounded-full bg-primaryDark'></button>
					<button className='h-10 w-10 rounded-full bg-[#5F5E5B]'></button>
					<button className='h-10 w-10 rounded-full bg-[#DDD4CA]'></button>
				</div>
			</div>
			<div>
				<h3 className='mb-4 text-lg text-center'>Metal Color</h3>
				<div className='flex justify-between'>
					<button className='w-10 h-10 rounded-full bg-primaryDark'></button>
					<button className='h-10 w-10 rounded-full bg-[#5F5E5B]'></button>
					<button className='h-10 w-10 rounded-full bg-[#DDD4CA]'></button>
				</div>
			</div>
			<div className='text-center'>
				<button className=' bg-[#0071E3] px-10 mt-14 py-4 rounded-[25px] text-white opacity-100 transition-opacity duration-500'>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
