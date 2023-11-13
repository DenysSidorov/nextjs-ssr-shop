import {Open_Sans} from 'next/font/google';
import '@/app/styles/globals.css';
import '@/app/styles/main.scss';

const font = Open_Sans({subsets: ['latin'], weight: ['300', '500', '800']});

export default function LandingLayout({
                                          children
                                      }: {
    children: React.ReactNode
}) {
    return (
        <div className={font.className}>
            <div>Landing Layout</div>
            <div>
                {children}
            </div>
        </div>
    );
}
