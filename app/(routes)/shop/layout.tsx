import type {Metadata} from 'next';
import ShopLayout from '@/app/(routes)/_parts/ShopLayout';

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
        <ShopLayout>
            <div>Shop Layout</div>
            <div>
                {children}
            </div>
        </ShopLayout>
    );
}
