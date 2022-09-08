import ImagyneLogo from '@assets/visuals/blue2.png'
import NextImage from 'next/image'
import { Container } from './Container'

export function NavigationBar (): JSX.Element {
    return (
        <nav className=' bg-imagyne-accent shadow-md sticky top-0 left-0'>
            <Container classname='py-1 flex flex-row w-full'>
                  <NextImage 
                        src={ImagyneLogo}
                       width={180}
                       height={70}
                    />
            </Container>
        </nav>
    )
}