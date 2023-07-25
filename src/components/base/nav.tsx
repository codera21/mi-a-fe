import { MdiIcon } from '@/components/icons';
import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiApplicationCog,
  mdiChevronDown,
  mdiDotsVertical,
  mdiEmail,
  mdiHeart,
  mdiLogout,
  mdiMenu,
  mdiSettingsHelper,
} from '@mdi/js';

export function Navbar() {
  return (
    <nav id='navbar-main' className='navbar mb-2'>
      <div className='navbar-brand'>
        <a className='navbar-item'>
          {/* <MdiIcon path={mdiForwardburger} /> */}
          <p className='is-uppercase is-family-monospace subtitle is-size-3'>
            Project MI-A
          </p>
        </a>
      </div>
      <div className='navbar-brand is-right'>
        <a
          className='navbar-item is-hidden-desktop jb-navbar-menu-toggle'
          data-target='navbar-menu'
        >
          <MdiIcon path={mdiDotsVertical} />
        </a>
      </div>
      <div className='navbar-menu fadeIn animated faster' id='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item has-dropdown has-dropdown-with-icons has-divider is-hoverable'>
            <a className='navbar-link is-arrowless'>
              <MdiIcon path={mdiMenu} />
              <span>Sample Menu</span>
              <MdiIcon path={mdiChevronDown} />
            </a>
            <div className='navbar-dropdown'>
              <a href='profile.html' className='navbar-item'>
                <span className='icon'>
                  <Icon path={mdiAccount} />
                </span>
                <span>My Profile</span>
              </a>
              <a className='navbar-item'>
                <span className='icon'>
                  <Icon path={mdiSettingsHelper} />
                </span>
                <span>Settings</span>
              </a>
              <a className='navbar-item'>
                <span className='icon'>
                  <Icon path={mdiEmail} />
                </span>
                <span>Messages</span>
              </a>
              <hr className='navbar-divider' />
              <a className='navbar-item'>
                <span className='icon'>
                  <Icon path={mdiLogout} />
                </span>
                <span>Log Out</span>
              </a>
            </div>
          </div>
          <div className='navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable'>
            <a className='navbar-link is-arrowless'>
              <div className='is-user-avatar'>
                <img
                  src='https://avatars.dicebear.com/v2/initials/john-doe.svg'
                  alt='John Doe'
                />
              </div>
              <div className='is-user-name'>
                <span>John Doe</span>
              </div>

              <MdiIcon path={mdiChevronDown} />
            </a>
            <div className='navbar-dropdown'>
              <a href='profile.html' className='navbar-item'>
                <MdiIcon path={mdiAccount} />
                <span>My Profile</span>
              </a>
              <a className='navbar-item'>
                <MdiIcon path={mdiApplicationCog} />
                <span>Settings</span>
              </a>
              <hr className='navbar-divider' />
              <a className='navbar-item'>
                <MdiIcon path={mdiLogout} />
                <span>Log Out</span>
              </a>
            </div>
          </div>
          <a
            href='https://justboil.me/bulma-admin-template/free-html-dashboard/'
            title='About'
            className='navbar-item has-divider is-desktop-icon-only'
          >
            <MdiIcon path={mdiHeart} color='#BB46FB' />
            <span>About</span>
          </a>
          <a title='Log out' className='navbar-item is-desktop-icon-only'>
            <MdiIcon path={mdiLogout} />
            <span>Log out</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
