import type {Metadata} from 'next';
import ShopFontLayout from '@/app/(routes)/_parts/ShopFontLayout';

export const metadata: Metadata = {
    title: 'Shop',
    description: ''
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ShopFontLayout>
            <div>Shop Layout</div>
            <div>
                {children}
            </div>
        </ShopFontLayout>
    );
}
