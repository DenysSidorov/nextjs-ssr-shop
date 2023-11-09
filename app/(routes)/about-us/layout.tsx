import type {Metadata} from 'next';
import ShopLayout from '@/app/(routes)/_parts/ShopLayout';

export const metadata: Metadata = {
    title: 'About Us',
    description: '',
    keywords: []
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ShopLayout>
            <div>About Us Layout</div>
            <div>
                {children}
            </div>
        </ShopLayout>
    );
}
