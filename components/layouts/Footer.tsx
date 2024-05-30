import Image from 'next/image'
import { Container } from '../ui/Container'

export const Footer = () => {
	return (
		<div className='w-full h-[206px] mt-[120px]'>
			<div className='bg-[#333A47] h-[126px]'>
				<Container>
					<div className='flex justify-between pt-[31px] pb-[44px]'>
						<div className='relative w-[200px] h-[50px]'>
							<Image src={'/logo.svg'} fill alt='logo' />
						</div>
						<div>
							<p className='mb-[8px]'>+7 (499) 999-82-83</p>
							<p>rostelecom.merc@rt.ru</p>
						</div>
						<div>
							<p className='mb-[8px]'>vc.ru</p>
							<p>habr.com</p>
						</div>
						<div className='flex gap-[32px]'>
							<div className='flex place-content-center size-[48px] border-[2px] border-[#ffffff43] rounded-[50%] hover:border-[#7700FF] duration-300'>
								TG
							</div>
							<div className='flex place-content-center size-[48px] border-[2px] border-[#ffffff43] rounded-[50%] hover:border-[#7700FF] duration-300'>
								VK
							</div>
							<div className='flex place-content-center size-[48px] border-[2px] border-[#ffffff43] rounded-[50%] hover:border-[#7700FF] duration-300'>
								YT
							</div>
						</div>
					</div>
				</Container>
			</div>
			<Container>
				<div className='flex items-center justify-between h-[80px] text-[#A5A8AD] duration-300 text-[12px]'>
					<p>
						© 2023 ПАО «Ростелеком» Все права защищены <br /> (18+)
					</p>
					<div className='flex gap-[32px]'>
						<p className='hover:text-[#7700FF] duration-300 cursor-pointer'>
							Политика обработки данных
						</p>
						<p className='hover:text-[#7700FF] duration-300 cursor-pointer'>
							Политика конфиденциальности
						</p>
					</div>
					<p className='hover:text-[#7700FF] duration-300 cursor-pointer'>
						Мобильная версия
					</p>
				</div>
			</Container>
		</div>
	)
}
