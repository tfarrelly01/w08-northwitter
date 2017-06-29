import React from 'react';

import NavLink from './NavLink';

class NavBar extends React.Component {
  render() {
    return (
      <nav className='component-NavBar navbar navbar-default'>
        <div className='container'>
          <div className="navbar-left">
            <ul className='nav navbar-nav'>
              <li>
                <NavLink icon="home">Home</NavLink>
              </li>
              <li>
                <NavLink icon="flash">Moments</NavLink>
              </li>
              <li>
                <NavLink icon="bell">Notifications</NavLink>
              </li>
              <li>
                <NavLink icon="envelope">Messages</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
