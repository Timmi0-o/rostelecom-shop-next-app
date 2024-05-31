import { Telegram } from '@/Icons/Telegram'
import { Vkontakte } from '@/Icons/Vkontakte'
import { YouTube } from '@/Icons/YouTube'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../ui/Container'

export const Footer = () => {
	return (
		<div className='w-full h-[206px] mt-[120px]'>
			<div className='bg-[#333A47] h-[126px]'>
				<Container>
					<div className='flex justify-between pt-[31px] pb-[44px]'>
						<div className='relative w-[200px] h-[50px]'>
							<Link href={'/'}>
								<Image src={'/logo.svg'} fill alt='logo' />
							</Link>
						</div>
						<div>
							<p className='mb-[8px] hover:text-color-accent cursor-pointer  duration-300'>
								+7 (499) 999-82-83
							</p>
							<p className='hover:text-color-accent cursor-pointer  duration-300'>
								rostelecom.merc@rt.ru
							</p>
						</div>
						<div>
							<p className='mb-[8px] hover:text-color-accent cursor-pointer  duration-300'>
								vc.ru
							</p>
							<p className='hover:text-color-accent cursor-pointer  duration-300'>
								habr.com
							</p>
						</div>
						<div className='flex gap-[32px]'>
							<div className='flex justify-center items-center size-[48px] border-[2px] border-[#ffffff43] rounded-[50%] hover:border-border-accent svg-icon-color duration-300'>
								<Telegram />
							</div>
							<div className='flex justify-center items-center size-[48px] border-[2px] border-[#ffffff43] hover:border-border-accent rounded-[50%] svg-icon-color duration-300'>
								<Vkontakte />
							</div>
							<div className='flex justify-center items-center size-[48px] border-[2px] border-[#ffffff43] hover:border-border-accent rounded-[50%] svg-icon-color duration-300'>
								<YouTube />
							</div>
						</div>
					</div>
				</Container>
			</div>
			<Container>
				<div className='flex items-start pt-[16px] justify-between h-[80px] text-[#A5A8AD] duration-300 text-[12px]'>
					<p>
						© 2023 ПАО «Ростелеком» Все права защищены <br /> (18+)
					</p>
					<div className='flex gap-[32px]'>
						<p className='hover:text-color-accent duration-300 cursor-pointer'>
							Политика обработки данных
						</p>
						<p className='hover:text-color-accent duration-300 cursor-pointer'>
							Политика конфиденциальности
						</p>
					</div>
					<p className='hover:text-color-accent duration-300 cursor-pointer'>
						Мобильная версия
					</p>
				</div>
			</Container>
		</div>
	)
}
