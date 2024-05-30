import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { rostelecomBasis } from '@/utils/fonts'
import type { Metadata } from 'next'
import './globals.css'

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
			<body className={rostelecomBasis.className}>
				<div className='bg-main min-h-[100vh] text-[#E8E9EA]'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
