import ShopLayout from '@/app/(routes)/_parts/ShopLayout';

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <ShopLayout>
            {children}
        </ShopLayout>
    );
}
