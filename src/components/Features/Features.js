import React from 'react';
import FeatureItem from './FeatureItem.js/FeatureItem';

const Features = () => {
  return (
    <section className='features my-5 py-5'>
      <h2 className='text-center'>Explore your stay</h2>
      <div className='container popular my-5'>
        <div className='row d-flex justify-content-around '>
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </div>
    </section>
  );
};

export default Features;
