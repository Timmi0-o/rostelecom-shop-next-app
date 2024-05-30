import localFont from 'next/font/local'

export const rostelecomBasis = localFont({
	src: [
		{
			path: '../public/fonts/RostelecomBasis-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/RostelecomBasis-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/RostelecomBasis-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
})