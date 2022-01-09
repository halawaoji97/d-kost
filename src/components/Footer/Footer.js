import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='py-5 mt-auto'>
      <div className='container'>
        <div className='row'>
          <div className='col footer-brand'>
            <h1 className='brand'>
              <Link to='/'>AsRog</Link>
            </h1>
          </div>
          <div className='col-sm-10 col-md-4'>
            <ul className='d-flex  footer-list justify-content-between'>
              <li>
                <Link to='/'>Developer</Link>
              </li>
              <li>
                <Link to='/'>Privacy policy</Link>
              </li>
              <li>
                <Link to='/'>Terms & condition</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright text-center'>
        <p>Copyright &copy; 2021 | Asrog | All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
