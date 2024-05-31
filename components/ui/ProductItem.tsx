'use client'
import { Ligth } from '@/Icons/Ligth'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './Button'

interface ProductItemProps {
	imgLink: string
	title: string
	availability?: boolean
	article: number
	price: number
}
export const ProductItem = ({
	imgLink,
	title,
	availability,
	article,
	price,
}: ProductItemProps) => {
	const [isBuyAvalible, setIsBuyAvalible] = useState(false)
	return (
		<div
			onMouseEnter={() => setIsBuyAvalible(!isBuyAvalible)}
			onMouseLeave={() => setIsBuyAvalible(!isBuyAvalible)}
			className='flex flex-col items-center w-[352px] h-[492px] px-[16px] border-gray-500 hover:bg-[#2A323F] duration-300'
		>
			<div className='relative flex flex-col items-center justify-center w-[208px] h-[332px] cursor-pointer'>
				<Image src={imgLink} fill alt='product' />
				<Ligth />
			</div>
			<div className='w-full mt-[24px]'>
				<p className='text-[16px] text-[#a5a8ad]'>{title}</p>
				<div className='flex items-center'>
					<div className='size-[4px] bg-[#26da72] rounded-[50%] mr-[4px]'></div>
					<p className='text-[12px] text-[#26da72]'>
						{availability ? 'Есть в наличии' : 'Нет в наличии'}
					</p>
					<p className='text-[12px] text-[#a5a8ad] ml-[16px]'>{`Арт: ${article}`}</p>
				</div>
			</div>
			<div className='flex w-full justify-between mt-[24px]'>
				<p className='text-[24px] font-medium'>{`${price} ₽`}</p>
				<div
					className={`duration-300 ${
						isBuyAvalible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<Button />
				</div>
			</div>
		</div>
	)
}
