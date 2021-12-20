import React from 'react';
import imgFeatures from '../../assets/images/pict1.jpg';

const Features = () => {
  return (
    <section className='features my-5'>
      <h1 className='text-center'>Explore your stay</h1>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-3 col-sm-10 col-md-4'>
            <div className='card'>
              <img src={imgFeatures} class='card-img-top' alt='...' />
              <div className=''>
                <h5 className='card-title'>
                  <a href='' className='stretched-link'>
                    Kelapa Gading
                  </a>
                </h5>
                <p className='card-text'>700.000 / month</p>
                <div className='rating'>
                  <p>4.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
