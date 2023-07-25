import './globals.scss';
import Footer from './footer';
import { Navbar } from './nav';
import { MenuBar, MenuBarItems } from './menu';

export default function RootLayout({
  activeClass,
  children,
}: {
  activeClass: MenuBarItems;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className='columns '>
        <div className='column is-one-fifth'>
          <MenuBar activeClass={activeClass} />
        </div>
        <div className='column'>{children}</div>
      </div>

      <Footer />
    </>
  );
}
