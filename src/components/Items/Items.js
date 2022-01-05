import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item/Item';

const Items = ({ setCurrentId, refMostItemsPopular, data }) => {
  // const { data, refMostItemsPopular } = props;
  console.log(data);
  const items = useSelector((state) => state.items.mostPicked);
  if (!items.length === 0) return null;
  // console.log(items);
  return (
    <section className='items my-5 py-5' ref={refMostItemsPopular}>
      <div className='container my-3'>
        <h3>Most Popular</h3>
        <p>one of kost that is very much in demand by many young people.</p>
        <div className='row'>
          {data.map((item, index) => {
            return <Item key={index} item={item} setCurrentId={item._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Items;
