import React from 'react';
import Item from './Item/Item';

const Items = (props) => {
  const { data, refMostItemsPopular } = props;
  return (
    <section className='items my-5 py-5' ref={refMostItemsPopular}>
      <div className='container my-3'>
        <h3>Most Popular</h3>
        <p>one of kost that is very much in demand by many young people.</p>
        <div className='row'>
          {data.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Items;
