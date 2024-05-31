import { LinkArrow } from '@/Icons/LinkArrow'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
	title?: string
	linkCatalog?: string
	breadcrumbs?: [string]
	children: ReactNode
	postTitle?: boolean
	linkCatalogName?: string
}

export const Section = ({
	title,
	linkCatalog,
	breadcrumbs,
	children,
	postTitle,
	linkCatalogName,
}: SectionProps) => {
	return (
		<Container>
			<div className={`${breadcrumbs ? 'pt-[24px]' : 'pt-[80px]'}`}>
				{breadcrumbs && (
					<div className='mb-[40px]'>
						{breadcrumbs.map((bread, i) => (
							<span key={i}>{bread}</span>
						))}
					</div>
				)}
				{title && (
					<div
						className={`relative flex w-full mb-[40px] ${
							linkCatalog && 'justify-between'
						}`}
					>
						<p className='text-[42px] font-bold z-10'>{title}</p>
						{linkCatalog && (
							<div className='z-10'>
								<Link href={linkCatalog}>
									<div className='flex items-center gap-[13px] svg-icon-color '>
										<p className='text-[16px] font-medium'>
											{linkCatalogName ? `${linkCatalogName}` : 'Все'}
										</p>
										<div className='relative size-[24px]'>
											<LinkArrow />
										</div>
									</div>
								</Link>
							</div>
						)}
						{postTitle && (
							<div className='absolute text-[376px] text-[#242c39ce] ml-[-12px] mt-[-60px] font-bold leading-[364px] select-none'>
								<span>{title}</span>
							</div>
						)}
					</div>
				)}
				<div className='relative z-10'>{children}</div>
			</div>
		</Container>
	)
}
