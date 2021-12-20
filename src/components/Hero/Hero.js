import React from 'react';
import HeroImage from '../../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className='hero rounded bg-light py-5'>
      <div className='container d-flex align-items-center justify-content-start'>
        <div className='row'>
          <div className='col-lg my-5 ps-5 py-5'>
            <h1>
              The best place <br /> to stay is right here
            </h1>
            <p className='mt-2 lh-base'>
              Are you looking for a place that is cheap, <br />
              complete and comfortable? <br />
              do not worry we have provided it for you
            </p>
            <div className='show-me my-5 py-5'>
              <button type='button' className='btn btn-primary  rounded btn-lg'>
                Show Me Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
