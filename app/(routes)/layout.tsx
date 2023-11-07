import '../styles/globals.css';
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
