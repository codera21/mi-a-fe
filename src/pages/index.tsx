import { MenuBarItems } from '@/components/base/menu';
import RootLayout from '@/components/base/root';
import { BreadCrumb } from '@/components/breadcrumb';
import { Headline } from '@/components/headline';

const breadCrumb = ['Admin', 'Dashboard'];
const title = 'Dashboard';

export default function Home() {
  return (
    <RootLayout activeClass={MenuBarItems.DASHBOARD}>
      <div className='container'>
        <BreadCrumb path={breadCrumb} />
        <Headline title={title} />
      </div>
    </RootLayout>
  );
}
