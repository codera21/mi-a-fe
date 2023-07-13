import RootLayout from '@/components/base/root';
import { MenuBarItems } from '@/components/base/menu';

export default function UserIndex() {
  return (
    <RootLayout activeClass={MenuBarItems.LIST_USERS}>
      <p>In this page the User menu link is active</p>
    </RootLayout>
  );
}
