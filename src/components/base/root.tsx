import './globals.scss';
import Footer from './footer';
import { Navbar } from './nav';
import { MenuBar } from './menu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className='columns'>
        <div className='column is-one-quarter'>
          <MenuBar />
        </div>
        <div className='column'>{children}</div>
      </div>

      <Footer />
    </>
  );
}
