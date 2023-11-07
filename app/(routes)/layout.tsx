import '@/app/styles/globals.css';
import '@/app/styles/reset.scss';
// here we shoud put reset.css and other globals styles

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div>General Layout</div>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
