import React from 'react';
import Item from './Item/Item';

const Features = () => {
  return (
    <section className='features my-5 py-5'>
      <h2 className='text-center'>Explore your stay</h2>
      <div className='container popular my-3'>
        <h3>Most Popular</h3>
        <p>one of kost that is very much in demand by many young people.</p>
        <div className='row'>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </section>
  );
};

export default Features;
