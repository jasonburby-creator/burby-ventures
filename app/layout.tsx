import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.burbyventures.com'),
  title: {
    default: 'Jason Burby — Executive Coaching & Advisory for Leaders and Agency CEOs',
    template: '%s · Jason Burby',
  },
  description:
    'Executive coaching for senior leaders, plus coaching and advisory for the founders and CEOs of creative, digital, and media agencies. ICF, Hudson, and Hogan certified, with 20+ years building teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Spline+Sans:wght@400;500;600&family=Spline+Sans+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
