import type {Metadata} from 'next';
import {Open_Sans} from 'next/font/google';
import '@/app/styles/globals.css';

const font = Open_Sans({subsets: ['latin'], weight: ['300', '500', '800']});

export const metadata: Metadata = {
    title: 'Картины на дереве в стиле лофт, Украина',
    description: 'Интернет магазин картин на дереве ручной работы',
    keywords: 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины',
};

export default function LandingLayout({
                                          children
                                      }: {
    children: React.ReactNode
}) {
    return (
        <div className={font.className}>
        {/*<div>*/}
            <div>Landing Layout</div>
            <div>
                {children}
            </div>
        </div>
    );
}
