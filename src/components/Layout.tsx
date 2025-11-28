import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black pb-20 md:pb-0">
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur">
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
