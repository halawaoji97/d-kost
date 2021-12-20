import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col footer-brand'>
            <h1 className='brand'>
              <a href='#'>AsRog</a>
            </h1>
          </div>
          <div className='col-4 d-flex justify-content-between footer-list'>
            <ul>
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
