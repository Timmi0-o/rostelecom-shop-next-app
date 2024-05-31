interface ButtonProps {
	title?: string
}

export const Button = ({ title }: ButtonProps) => {
	return (
		<div className='flex justify-center items-center w-[132px] h-[42px] rounded-[32px] bg-accent cursor-pointer'>
			<p className='text-[16px] font-[500]'>{title ? title : 'В корзину'}</p>
		</div>
	)
}
