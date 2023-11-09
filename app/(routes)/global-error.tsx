'use client';

export default function RootLayoutErrorHandler({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <div>Error was accured, try visit us later</div>
        <div>
            <button onClick={() => window?.location?.reload()}>Try again</button>
        </div>
        {children}
        </body>
        </html>
    );
}
