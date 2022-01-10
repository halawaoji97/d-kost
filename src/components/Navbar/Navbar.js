import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BrandImage from '../../assets/images/LOGO.png';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <nav className='navbar fixed-top navbar-expand-lg bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={BrandImage} alt='Garos' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggler'
          aria-controls='navbarToggler'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='material-icons-outlined'>menu</span>
        </button>
        <div className='collapse navbar-collapse py-3' id='navbarToggler'>
          <ul className='navbar-nav ms-auto mb-3 d-flex justify-content-center aligns-item-center'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Features
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                About
              </Link>
            </li>
            {user && (
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  {user?.result.name}
                </Link>
              </li>
            )}
            {!user && (
              <li
                className='nav-item text-center'
                style={{
                  display: 'block',
                  width: 120,
                  borderRadius: 12,
                  color: '#d3ecff',
                }}
              >
                <Link
                  className='nav-link btn-info link-signin'
                  to='/auth'
                  style={{ borderRadius: 12, color: '#d3ecff', padding: '7' }}
                >
                  Signin
                </Link>
              </li>
            )}
            {user && (
              <li
                className='nav-item text-center'
                style={{
                  display: 'block',
                  width: 120,
                  borderRadius: 12,
                  color: '#d3ecff',
                }}
              >
                <button
                  type='button'
                  onClick={logout}
                  className='nav-link btn-info link-signin'
                  style={{ borderRadius: 12, color: '#d3ecff', padding: '7' }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
