import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar fixed-top navbar-expand-lg bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Asrog
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggler'
          aria-controls='navbarToggler'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='material-icons md-48'>menu</span>
        </button>
        <div className='collapse navbar-collapse py-3' id='navbarToggler'>
          <ul className='navbar-nav ms-auto mb-3 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;