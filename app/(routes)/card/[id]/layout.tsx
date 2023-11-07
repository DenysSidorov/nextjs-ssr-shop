import type {Metadata} from 'next';
import ShopFontLayout from '@/app/(routes)/_parts/ShopFontLayout';

export const metadata: Metadata = {
    title: 'Card with id',
    description: ''
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ShopFontLayout>
            <div>Card with id Layout</div>
            <div>
                {children}
            </div>
        </ShopFontLayout>
    );
}
