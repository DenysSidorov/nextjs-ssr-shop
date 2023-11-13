import type {Metadata} from 'next';
import ShopLayout from '@/app/(routes)/_parts/ShopLayout';

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
