import React from 'react';

const Footer = () => {
  return (
    <footer className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col footer-brand'>
            <h1 className='brand'>
              <a href='#'>AsRog</a>
            </h1>
          </div>
          <div className='col-sm-10 col-md-4'>
            <ul className='d-flex  footer-list justify-content-between'>
              <li>
                <a href='#'>Developer</a>
              </li>
              <li>
                <a href='#'>Privacy policy</a>
              </li>
              <li>
                <a href='#'>Terms & condition</a>
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
