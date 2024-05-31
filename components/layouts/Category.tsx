import Image from 'next/image'
import { Section } from '../ui/Section'

export const Category = () => {
	return (
		<>
			<Section title='Категории' linkCatalog='/'>
				<div className='flex'>
					<div className='relative min-w-[357px] size-[736px] mr-[32px] cursor-pointer duration-300'>
						<Image
							className='img-rounded cursor-pointer duration-300 img-rounded'
							src={'/clothes.png'}
							alt='Одежда'
							width={736}
							height={736}
						/>
					</div>
					<div className='grid grid-cols-2 gap-[32px] max-w-[736px]'>
						<div className='relative size-[352px]'>
							<Image
								className='img-rounded cursor-pointer duration-300'
								src={'/accessories.png'}
								fill
								alt=''
							/>
						</div>
						<div className='relative size-[352px]'>
							<Image
								className='img-rounded cursor-pointer duration-300'
								src={'/souvenirs.png'}
								fill
								alt=''
							/>
						</div>
						<div className='relative w-[736px] h-[352px]'>
							<Image
								className='img-rounded cursor-pointer duration-300'
								src={'/chancellery.png'}
								fill
								alt=''
							/>
						</div>
					</div>
				</div>
			</Section>
		</>
	)
}
