import { MenuBarItems } from '@/components/base/menu';
import RootLayout from '@/components/base/root';

export default function StaticDash() {
  return (
    <RootLayout activeClass={MenuBarItems.INVOICE}>
      <div id='app'>
        <nav id='navbar-main' className='navbar is-fixed-top'>
          <div className='navbar-brand'>
            <a className='navbar-item is-hidden-desktop jb-aside-mobile-toggle'>
              <span className='icon'>
                <i className='mdi mdi-forwardburger mdi-24px'></i>
              </span>
            </a>
            <div className='navbar-item has-control'>
              <div className='control'>
                <input placeholder='Search everywhere...' className='input' />
              </div>
            </div>
          </div>
          <div className='navbar-brand is-right'>
            <a
              className='navbar-item is-hidden-desktop jb-navbar-menu-toggle'
              data-target='navbar-menu'
            >
              <span className='icon'>
                <i className='mdi mdi-dots-vertical'></i>
              </span>
            </a>
          </div>
          <div className='navbar-menu fadeIn animated faster' id='navbar-menu'>
            <div className='navbar-end'>
              <div className='navbar-item has-dropdown has-dropdown-with-icons has-divider is-hoverable'>
                <a className='navbar-link is-arrowless'>
                  <span className='icon'>
                    <i className='mdi mdi-menu'></i>
                  </span>
                  <span>Sample Menu</span>
                  <span className='icon'>
                    <i className='mdi mdi-chevron-down'></i>
                  </span>
                </a>
                <div className='navbar-dropdown'>
                  <a href='profile.html' className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-account'></i>
                    </span>
                    <span>My Profile</span>
                  </a>
                  <a className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-settings'></i>
                    </span>
                    <span>Settings</span>
                  </a>
                  <a className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-email'></i>
                    </span>
                    <span>Messages</span>
                  </a>
                  <hr className='navbar-divider' />
                  <a className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-logout'></i>
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
                  <span className='icon'>
                    <i className='mdi mdi-chevron-down'></i>
                  </span>
                </a>
                <div className='navbar-dropdown'>
                  <a href='profile.html' className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-account'></i>
                    </span>
                    <span>My Profile</span>
                  </a>
                  <a className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-settings'></i>
                    </span>
                    <span>Settings</span>
                  </a>
                  <a className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-email'></i>
                    </span>
                    <span>Messages</span>
                  </a>
                  <hr className='navbar-divider' />
                  <a className='navbar-item'>
                    <span className='icon'>
                      <i className='mdi mdi-logout'></i>
                    </span>
                    <span>Log Out</span>
                  </a>
                </div>
              </div>
              <a
                href='https://justboil.me/bulma-admin-template/free-html-dashboard/'
                title='About'
                className='navbar-item has-divider is-desktop-icon-only'
              >
                <span className='icon'>
                  <i className='mdi mdi-help-circle-outline'></i>
                </span>
                <span>About</span>
              </a>
              <a title='Log out' className='navbar-item is-desktop-icon-only'>
                <span className='icon'>
                  <i className='mdi mdi-logout'></i>
                </span>
                <span>Log out</span>
              </a>
            </div>
          </div>
        </nav>
        <aside className='aside is-placed-left is-expanded'>
          <div className='aside-tools'>
            <div className='aside-tools-label'>
              <span>
                <b>Admin</b> One HTML
              </span>
            </div>
          </div>
          <div className='menu is-menu-main'>
            <p className='menu-label'>General</p>
            <ul className='menu-list'>
              <li>
                <a
                  href='index.html'
                  className='is-active router-link-active has-icon'
                >
                  <span className='icon'>
                    <i className='mdi mdi-desktop-mac'></i>
                  </span>
                  <span className='menu-item-label'>Dashboard</span>
                </a>
              </li>
            </ul>
            <p className='menu-label'>Examples</p>
            <ul className='menu-list'>
              <li>
                <a href='tables.html' className='has-icon'>
                  <span className='icon has-update-mark'>
                    <i className='mdi mdi-table'></i>
                  </span>
                  <span className='menu-item-label'>Tables</span>
                </a>
              </li>
              <li>
                <a href='forms.html' className='has-icon'>
                  <span className='icon'>
                    <i className='mdi mdi-square-edit-outline'></i>
                  </span>
                  <span className='menu-item-label'>Forms</span>
                </a>
              </li>
              <li>
                <a href='profile.html' className='has-icon'>
                  <span className='icon'>
                    <i className='mdi mdi-account-circle'></i>
                  </span>
                  <span className='menu-item-label'>Profile</span>
                </a>
              </li>
              <li>
                <a className='has-icon has-dropdown-icon'>
                  <span className='icon'>
                    <i className='mdi mdi-view-list'></i>
                  </span>
                  <span className='menu-item-label'>Submenus</span>
                  <div className='dropdown-icon'>
                    <span className='icon'>
                      <i className='mdi mdi-plus'></i>
                    </span>
                  </div>
                </a>
                <ul>
                  <li>
                    <a href='#void'>
                      <span>Sub-item One</span>
                    </a>
                  </li>
                  <li>
                    <a href='#void'>
                      <span>Sub-item Two</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p className='menu-label'>About</p>
            <ul className='menu-list'>
              <li>
                <a
                  href='https://github.com/vikdiesel/admin-one-bulma-dashboard'
                  target='_blank'
                  className='has-icon'
                >
                  <span className='icon'>
                    <i className='mdi mdi-github-circle'></i>
                  </span>
                  <span className='menu-item-label'>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href='https://justboil.me/bulma-admin-template/free-html-dashboard/'
                  className='has-icon'
                >
                  <span className='icon'>
                    <i className='mdi mdi-help-circle'></i>
                  </span>
                  <span className='menu-item-label'>About</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <section className='section is-title-bar'>
          <div className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <ul>
                  <li>Admin</li>
                  <li>Dashboard</li>
                </ul>
              </div>
            </div>
            <div className='level-right'>
              <div className='level-item'>
                <div className='buttons is-right'>
                  <a
                    href='https://github.com/vikdiesel/admin-one-bulma-dashboard'
                    target='_blank'
                    className='button is-primary'
                  >
                    <span className='icon'>
                      <i className='mdi mdi-github-circle'></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='hero is-hero-bar'>
          <div className='hero-body'>
            <div className='level'>
              <div className='level-left'>
                <div className='level-item'>
                  <h1 className='title'>Dashboard</h1>
                </div>
              </div>
              <div className='level-right' style={{ display: 'none' }}>
                <div className='level-item'></div>
              </div>
            </div>
          </div>
        </section>
        <section className='section is-main-section'>
          <div className='tile is-ancestor'>
            <div className='tile is-parent'>
              <div className='card tile is-child'>
                <div className='card-content'>
                  <div className='level is-mobile'>
                    <div className='level-item'>
                      <div className='is-widget-label'>
                        <h3 className='subtitle is-spaced'>Clients</h3>
                        <h1 className='title'>512</h1>
                      </div>
                    </div>
                    <div className='level-item has-widget-icon'>
                      <div className='is-widget-icon'>
                        <span className='icon has-text-primary is-large'>
                          <i className='mdi mdi-account-multiple mdi-48px'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tile is-parent'>
              <div className='card tile is-child'>
                <div className='card-content'>
                  <div className='level is-mobile'>
                    <div className='level-item'>
                      <div className='is-widget-label'>
                        <h3 className='subtitle is-spaced'>Sales</h3>
                        <h1 className='title'>$7,770</h1>
                      </div>
                    </div>
                    <div className='level-item has-widget-icon'>
                      <div className='is-widget-icon'>
                        <span className='icon has-text-info is-large'>
                          <i className='mdi mdi-cart-outline mdi-48px'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tile is-parent'>
              <div className='card tile is-child'>
                <div className='card-content'>
                  <div className='level is-mobile'>
                    <div className='level-item'>
                      <div className='is-widget-label'>
                        <h3 className='subtitle is-spaced'>Performance</h3>
                        <h1 className='title'>256%</h1>
                      </div>
                    </div>
                    <div className='level-item has-widget-icon'>
                      <div className='is-widget-icon'>
                        <span className='icon has-text-success is-large'>
                          <i className='mdi mdi-finance mdi-48px'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <header className='card-header'>
              <p className='card-header-title'>
                <span className='icon'>
                  <i className='mdi mdi-finance'></i>
                </span>
                Performance
              </p>
              <a href='#' className='card-header-icon'>
                <span className='icon'>
                  <i className='mdi mdi-reload'></i>
                </span>
              </a>
            </header>
            <div className='card-content'>
              <div className='chart-area'>
                <div style={{ height: '100%' }}>
                  <div className='chartjs-size-monitor'>
                    <div className='chartjs-size-monitor-expand'>
                      <div></div>
                    </div>
                    <div className='chartjs-size-monitor-shrink'>
                      <div></div>
                    </div>
                  </div>
                  <canvas
                    id='big-line-chart'
                    width='2992'
                    height='1000'
                    className='chartjs-render-monitor'
                    style={{
                      display: 'block',
                      height: '400px',
                      width: '1197px',
                    }}
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className='card has-table has-mobile-sort-spaced'>
            <header className='card-header'>
              <p className='card-header-title'>
                <span className='icon'>
                  <i className='mdi mdi-account-multiple'></i>
                </span>
                Clients
              </p>
              <a href='#' className='card-header-icon'>
                <span className='icon'>
                  <i className='mdi mdi-reload'></i>
                </span>
              </a>
            </header>
            <div className='card-content'>
              <div className='b-table has-pagination'>
                <div className='table-wrapper has-mobile-cards'>
                  <table className='table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>City</th>
                        <th>Progress</th>
                        <th>Created</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Rebecca Bauch</td>
                        <td data-label='Company'>Daugherty-Daniel</td>
                        <td data-label='City'>South Cory</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='79'
                          >
                            79
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Oct 25, 2020'
                          >
                            Oct 25, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/felicita-yundt.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Felicita Yundt</td>
                        <td data-label='Company'>Johns-Weissnat</td>
                        <td data-label='City'>East Ariel</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='67'
                          >
                            67
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Jan 8, 2020'
                          >
                            Jan 8, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Mr. Larry Satterfield V</td>
                        <td data-label='Company'>Hyatt Ltd</td>
                        <td data-label='City'>Windlerburgh</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='16'
                          >
                            16
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Dec 18, 2020'
                          >
                            Dec 18, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Mr. Broderick Kub</td>
                        <td data-label='Company'>Kshlerin, Bauch and Ernser</td>
                        <td data-label='City'>New Kirstenport</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='71'
                          >
                            71
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Sep 13, 2020'
                          >
                            Sep 13, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/barry-weber.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Barry Weber</td>
                        <td data-label='Company'>
                          Schulist, Mosciski and Heidenreich
                        </td>
                        <td data-label='City'>East Violettestad</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='80'
                          >
                            80
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Jul 24, 2020'
                          >
                            Jul 24, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/bert-kautzer-md.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Bert Kautzer MD</td>
                        <td data-label='Company'>Gerhold and Sons</td>
                        <td data-label='City'>Mayeport</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='62'
                          >
                            62
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Mar 30, 2020'
                          >
                            Mar 30, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/lonzo-steuber.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Lonzo Steuber</td>
                        <td data-label='Company'>Skiles Ltd</td>
                        <td data-label='City'>Marilouville</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='17'
                          >
                            17
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Feb 12, 2020'
                          >
                            Feb 12, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/jonathon-hahn.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Jonathon Hahn</td>
                        <td data-label='Company'>Flatley Ltd</td>
                        <td data-label='City'>Billiemouth</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='74'
                          >
                            74
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Dec 30, 2020'
                          >
                            Dec 30, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/ryley-wuckert.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Ryley Wuckert</td>
                        <td data-label='Company'>Heller-Little</td>
                        <td data-label='City'>Emeraldtown</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='54'
                          >
                            54
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Jun 28, 2020'
                          >
                            Jun 28, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='is-image-cell'>
                          <div className='image'>
                            <img
                              src='https://avatars.dicebear.com/v2/initials/sienna-hayes.svg'
                              className='is-rounded'
                            />
                          </div>
                        </td>
                        <td data-label='Name'>Sienna Hayes</td>
                        <td data-label='Company'>Conn, Jerde and Douglas</td>
                        <td data-label='City'>Jonathanfort</td>
                        <td data-label='Progress' className='is-progress-cell'>
                          <progress
                            max='100'
                            className='progress is-small is-primary'
                            value='55'
                          >
                            55
                          </progress>
                        </td>
                        <td data-label='Created'>
                          <small
                            className='has-text-grey is-abbr-like'
                            title='Mar 7, 2020'
                          >
                            Mar 7, 2020
                          </small>
                        </td>
                        <td className='is-actions-cell'>
                          <div className='buttons is-right'>
                            <button
                              className='button is-small is-primary'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-eye'></i>
                              </span>
                            </button>
                            <button
                              className='button is-small is-danger jb-modal'
                              data-target='sample-modal'
                              type='button'
                            >
                              <span className='icon'>
                                <i className='mdi mdi-trash-can'></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='notification'>
                  <div className='level'>
                    <div className='level-left'>
                      <div className='level-item'>
                        <div className='buttons has-addons'>
                          <button type='button' className='button is-active'>
                            1
                          </button>
                          <button type='button' className='button'>
                            2
                          </button>
                          <button type='button' className='button'>
                            3
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='level-right'>
                      <div className='level-item'>
                        <small>Page 1 of 3</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='footer'>
          <div className='container-fluid'>
            <div className='level'>
              <div className='level-left'>
                <div className='level-item'>© 2020, JustBoil.me</div>
                <div className='level-item'>
                  <a
                    href='https://github.com/vikdiesel/admin-one-bulma-dashboard'
                    style={{ height: '20px' }}
                  >
                    <img src='https://img.shields.io/github/v/release/vikdiesel/admin-one-bulma-dashboard?color=%23999' />
                  </a>
                </div>
              </div>
              <div className='level-right'>
                <div className='level-item'>
                  <div className='logo'>
                    <a href='https://justboil.me'>
                      <img src='img/justboil-logo.svg' alt='JustBoil.me' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div id='sample-modal' className='modal'>
        <div className='modal-background jb-modal-close'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Confirm action</p>
            <button
              className='delete jb-modal-close'
              aria-label='close'
            ></button>
          </header>
          <section className='modal-card-body'>
            <p>
              This will permanently delete <b>Some Object</b>
            </p>
            <p>This is sample modal</p>
          </section>
          <footer className='modal-card-foot'>
            <button className='button jb-modal-close'>Cancel</button>
            <button className='button is-danger jb-modal-close'>Delete</button>
          </footer>
        </div>
        <button
          className='modal-close is-large jb-modal-close'
          aria-label='close'
        ></button>
      </div>
    </RootLayout>
  );
}
