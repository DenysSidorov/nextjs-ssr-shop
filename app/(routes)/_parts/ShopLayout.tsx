import {Goblin_One} from 'next/font/google';
import '@/app/styles/globals.css';
import '@/app/styles/main.scss';
import MainContent from '@/app/ui/shop-layout/MainContent';
import FooterSection from '@/app/ui/footer/FooterSection';
import SocialMedia from '@/app/ui/social-media/SocialMedia';
import MainMenu from '@/app/ui/main-menu/MainMenu';

const font = Goblin_One({weight: ['400'], subsets: ['latin']});

export default function ShopLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className={font.className} style={{width: '100%', height: '100%'}}>
            <div className='wrapper'>
                <div className='content'>
                    <MainMenu />
                    <MainContent>
                        {children}
                    </MainContent>
                </div>
                <FooterSection />
                <SocialMedia />
            </div>
        </div>
    );
}
