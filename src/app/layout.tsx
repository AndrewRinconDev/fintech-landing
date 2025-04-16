import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import ThemeProviderClient from '@/providers/ThemeProvider';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fintech Digital',
  description: 'Catálogo de productos financieros digitales',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProviderClient>
          <main className="min-h-screen">
            <div className="min-h-screen bg-gray-50">
              <Header />

              {children}
            </div>
          </main>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
