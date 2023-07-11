import Link from 'next/link';
// import BaseLayout from '@/components/base/base';
import RootLayout from '@/components/base/root';

const heading = 'Hello World';

const paragraph = 'This is the first post in react next framework';

export default function FirstPost() {
  return (
    <RootLayout>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <Link href='/'>Back</Link>
    </RootLayout>
  );
}
