import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
	return <div className='relative max-w-[1504px] mx-auto'>{children}</div>
}
