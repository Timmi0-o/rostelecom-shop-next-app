import { ProductItem } from '../ui/ProductItem'
import { Section } from '../ui/Section'

export const ProductAccent = () => {
	const productGroup = [
		{ title: 'Новинки', group: 'new', linkCatalog: '/', postTitle: true },
		{ title: 'Хиты', group: 'heat', linkCatalog: '/', postTitle: true },
	]

	return (
		<>
			{productGroup.map((group, i) => (
				<Section
					key={i}
					title={group.title}
					linkCatalog={group.linkCatalog}
					postTitle={group.postTitle}
				>
					<div className='grid grid-cols-4 gap-[32px]'>
						{products.map(
							(product, i) =>
								product.group === group.group && (
									<div key={i}>
										<ProductItem
											imgLink={product.imgLink}
											title={product.title}
											availability={product.availability}
											article={product.article}
											price={product.price}
										/>
									</div>
								)
						)}
					</div>
				</Section>
			))}
		</>
	)
}

const products = [
	{
		imgLink: '/productItem.png',
		title: 'Сумка шоппер стеганая',
		availability: true,
		article: 1749,
		price: 3598,
		group: 'new',
	},
	{
		imgLink: '/productItem2.png',
		title: 'Куртка ахуенная',
		availability: true,
		article: 172,
		price: 1399,
		group: 'heat',
	},
	{
		imgLink: '/productItem.png',
		title: 'Сумка школьная',
		availability: true,
		article: 84512,
		price: 1999,
		group: 'new',
	},
	{
		imgLink: '/productItem2.png',
		title: 'Куртка простая для лохов',
		availability: true,
		article: 57256,
		price: 399,
		group: 'heat',
	},
]
