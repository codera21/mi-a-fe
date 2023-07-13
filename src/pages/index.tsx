import { MenuBarItems } from '@/components/base/menu';
import RootLayout from '@/components/base/root';
import Link from 'next/link';
export default function Home() {
  return (
    <RootLayout activeClass={MenuBarItems.DASHBOARD}>
      <section className='hero is-info is-medium'>
        <div className='hero-body'>
          <p className='title'>Hero Title</p>
          <p className='subtitle'>Hero subtitle</p>
        </div>
      </section>
      <section>
        <br />
        <br />
        <h1 className='is-size-1'>Hello Hello</h1>
        <Link href='/posts/first-post'>To Posts</Link>
        <br />
        <br />
      </section>
    </RootLayout>
  );
}
