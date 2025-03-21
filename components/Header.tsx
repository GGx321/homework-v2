import Link from 'next/link';
import DropDown from '@/components/DropDown';
import AnimatedText from '@/components/AnimatedText';

export default function Header() {
    return (
        <div className='flex fixed top-0 left-0 justify-between items-center bg-bg-dark w-full py-4 text-white px-[5%] z-50'>
            <div className='loader animate-jump-in animate-delay-[600ms] animate-ease-out'></div>
            <div className='flex items-center space-x-12'>
                <Link href="/" className='animate-fade-down animate-delay-[300ms] animate-ease-out hover:text-purple-text'>
                <AnimatedText text='Home' />
                </Link>
                <Link href="#projects" className='animate-fade-down animate-delay-[600ms] animate-ease-out hover:text-purple-text'>
                <AnimatedText text='Проекты' />
                </Link>
                <DropDown />
            </div>
        </div>
    );
}