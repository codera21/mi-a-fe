import Link from 'next/link';
// import BaseLayout from '@/components/base/base';
import RootLayout from '@/components/base/root';
import { MenuBarItems } from '@/components/base/menu';

const heading = 'Hello World';

const paragraph = 'This is the first post in react next framework';

export default function FirstPost() {
  return (
    <RootLayout activeClass={MenuBarItems.DASHBOARD}>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <Link href='/'>Back</Link>
    </RootLayout>
  );
}
