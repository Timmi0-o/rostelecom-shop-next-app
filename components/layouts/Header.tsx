import { Basket } from '@/Icons/Basket'
import { Burger } from '@/Icons/Burger'
import { Compasion } from '@/Icons/Compasion'
import { Heart } from '@/Icons/Heart'
import { Profile } from '@/Icons/Profile'
import { Search } from '@/Icons/Search'
import Image from 'next/image'
import { Container } from '../ui/Container'

export const Header = () => {
	return (
		<div className='shadow-xl'>
			<Container>
				<div className='flex justify-between items-center w-full h-[80px]'>
					<div className='flex items-center cursor-pointer svg-icon-color'>
						<div className='relative flex items-center w-[20px] h-[20px]'>
							<Burger />
						</div>
						<p className='text-[24px] ml-[12px]'>Меню</p>
					</div>
					<div className='relative w-[200px] h-[50px]'>
						<Image src={'/logo.svg'} fill alt='logo' />
					</div>
					<div className='flex items-center gap-[32px]'>
						<Search />
						<Heart />
						<Compasion />
						<Basket />
						<Profile />
					</div>
				</div>
			</Container>
		</div>
	)
}
