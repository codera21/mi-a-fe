export function MenuBar() {
  return (
    <aside className='menu'>
      <p className='menu-label'>Billing Management</p>
      <ul className='menu-list'>
        <li>
          <a className='is-active'>Dashboard</a>
        </li>
        <li>
          <a>Invoice</a>
        </li>
        <li>
          <ul>
            <li>
              <a>Create</a>
            </li>
            <li>
              <a>List</a>
            </li>
          </ul>
        </li>
      </ul>
      <p className='menu-label'>Users Management</p>
      <ul className='menu-list'>
        <li>
          <a>Users</a>
        </li>
        <li>
          <a>Customers</a>
        </li>
      </ul>
    </aside>
  );
}
