import type {Metadata} from 'next';
import ShopFontLayout from '@/app/(routes)/_parts/ShopFontLayout';

export const metadata: Metadata = {
    title: 'About Us',
    description: ''
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ShopFontLayout>
            <div>About Us Layout</div>
            <div>
                {children}
            </div>
        </ShopFontLayout>
    );
}
