import Link from 'next/link';

export enum MenuBarItems {
  DASHBOARD,
  INVOICE,
  CREATE_INVOICE,
  LIST_INVOICE,
  LIST_USERS,
  LIST_CUSTOMERS,
}

type MenuBarParams = {
  activeClass: MenuBarItems;
};

type MenuItemParams = {
  value: string;
  isActive: boolean;
  linkTo: string;
};

export function MenuBar({ activeClass }: MenuBarParams) {
  return (
    <aside className='menu mx-3 my-2'>
      <ul className='menu-list'>
        <MenuBarItem
          value='Dashboard'
          linkTo='/'
          isActive={activeClass === MenuBarItems.DASHBOARD}
        />

        <div className='menu-label'>
          <p>Billing</p>
        </div>

        <MenuBarItem
          value='Invoice'
          linkTo='/'
          isActive={activeClass === MenuBarItems.INVOICE}
        />

        <li>
          <ul>
            <MenuBarItem
              value='Create'
              linkTo='/'
              isActive={activeClass === MenuBarItems.CREATE_INVOICE}
            />

            <MenuBarItem
              value='List'
              linkTo='/'
              isActive={activeClass === MenuBarItems.LIST_INVOICE}
            />
          </ul>
        </li>
      </ul>
      <p className='menu-label'>Users Management</p>
      <ul className='menu-list'>
        <MenuBarItem
          value='Users'
          linkTo='/users'
          isActive={activeClass === MenuBarItems.LIST_USERS}
        />

        <MenuBarItem
          value='Customers'
          linkTo='/users'
          isActive={activeClass === MenuBarItems.LIST_CUSTOMERS}
        />
      </ul>
    </aside>
  );
}

export function MenuBarItem({
  value,
  isActive,
  linkTo,
}: MenuItemParams): React.ReactNode {
  return (
    <li>
      <Link href={linkTo} className={`${isActive ? 'is-active' : ''}`}>
        {value}
      </Link>
    </li>
  );
}
