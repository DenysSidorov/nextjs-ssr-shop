import {Goblin_One} from 'next/font/google';
import '@/app/styles/globals.css';

const font = Goblin_One({weight: ['400'], subsets: ['latin']});

export default function ShopFontLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className={font.className}>
            {children}
        </div>
    );
}
