import { Brendlive } from '@/components/layouts/Brendlive'
import { Category } from '@/components/layouts/Category'
import { ProductAccent } from '@/components/layouts/ProductAccent'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<div className='bg-banner h-[800px]'>
				<Container>
					<div className='relative'>
						<div className='relative text-[60px] font-bold text-[#000000c4] w-fit pt-[108px]'>
							<p className='bg-[#E8E9EA] rounded-se-[6px] w-fit h-[70px] pl-[22px] pr-[20px] leading-[60px]'>
								Будь
							</p>
							<p className='bg-[#E8E9EA] rounded-se-[6px] w-fit pb-[10px] pl-[22px] pr-[20px] leading-[60px] mt-[-10px]'>
								на стиле
							</p>
							<div className='absolute right-0 bottom-[-27px] w-[45px] h-[27px]'>
								<Image src={'/textBgSubTitile.svg'} fill alt='' />
							</div>
						</div>
						<span className='text-[268px] font-bold leading-[312px]'>
							Ростелеком
						</span>
						<span className='absolute top-[280px] left-[190px] text-[22px] font-normal'>
							{'[ с новой коллекцией «Line» ]'}
						</span>
					</div>
					<div className='absolute top-[20px] right-0 flex gap-[4px] bg-[#10182840] w-fit py-[4px] pl-[8px] pr-[4px] rounded-[18px]'>
						<span className='text-[#A5A8AD]'>Реклама</span>
						<div className='relative size-[24px]'>
							<Image src={'/i.svg'} fill alt='Информация' />
						</div>
					</div>
				</Container>
			</div>
			<Category />
			<ProductAccent />
			<Brendlive />
		</>
	)
}
