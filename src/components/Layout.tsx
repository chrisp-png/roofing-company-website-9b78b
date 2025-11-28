import { Outlet } from 'react-router-dom';
import Header from './Header';
import FooterNew from './FooterNew';
import MobileBottomBarNew from './MobileBottomBarNew';

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      <Header />

      <main>
        <Outlet />
      </main>

      <FooterNew />
      <MobileBottomBarNew />
    </div>
  );
}
