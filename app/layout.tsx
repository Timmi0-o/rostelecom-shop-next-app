import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const rostelecomBasis = localFont({
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

export const metadata: Metadata = {
	title: 'Rostelecom SHOP',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={rostelecomBasis.className}>{children}</body>
		</html>
	)
}
