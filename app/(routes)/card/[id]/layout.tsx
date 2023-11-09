import type {Metadata} from 'next';
import ShopLayout from '@/app/(routes)/_parts/ShopLayout';

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
        <ShopLayout>
            <div>Card with id Layout</div>
            <div>
                {children}
            </div>
        </ShopLayout>
    );
}
