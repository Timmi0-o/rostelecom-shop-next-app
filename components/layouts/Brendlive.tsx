import Image from 'next/image'
import { Section } from '../ui/Section'

export const Brendlive = () => {
	return (
		<Section linkCatalog='/' linkCatalogName='блог' title='Жизнь нашего бренда'>
			<div className='flex gap-[31px] w-full'>
				{brendImage.map((img, i) => (
					<div key={i} className='relative size-[480px]'>
						<Image
							className='img-rounded duration-300'
							src={img}
							fill
							alt='brendImage'
						/>
					</div>
				))}
			</div>
		</Section>
	)
}

const brendImage = ['/world.png', '/clothes.png', '/clothes.png']
