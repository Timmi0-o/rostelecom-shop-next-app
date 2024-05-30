import { Ligth } from '@/Icons/Ligth'
import Image from 'next/image'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export const HeatProduct = () => {
	const product = [1, 2, 3, 4, 5, 6, 7]
	return (
		<Section title='Хиты' linkCatalog='/' postTitle>
			<div className='grid grid-cols-4 gap-[32px]'>
				{product.map((i) => (
					<div
						key={i}
						className='flex flex-col items-center w-[352px] h-[492px] px-[16px] border-gray-500 hover:bg-[#2A323F] duration-300'
					>
						<div className='relative flex flex-col items-center justify-center w-[208px] h-[332px] cursor-pointer'>
							<Image src={'/productItem2.png'} fill alt='product' />
							<Ligth />
						</div>
						<div className='w-full mt-[24px]'>
							<p className='text-[16px] text-[#a5a8ad]'>
								Сумка шоппер стеганая
							</p>
							<div className='flex items-center'>
								<div className='size-[4px] bg-[#26da72] rounded-[50%] mr-[4px]'></div>
								<p className='text-[12px] text-[#26da72]'>Есть в наличии</p>
								<p className='text-[12px] text-[#a5a8ad] ml-[16px]'>
									Арт: 3690
								</p>
							</div>
						</div>
						<div className='flex w-full justify-between mt-[24px]'>
							<p className='text-[24px] font-medium'>2 159 ₽</p>
							<Button />
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}
