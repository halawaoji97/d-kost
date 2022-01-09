import React from 'react';
import Item from './Item/Item';
import Fade from 'react-reveal/Fade';
import Loading from '../Loading';

const Items = ({ refMostItemsPopular, data }) => {
  if (!data) return Loading();
  return (
    <Fade>
      <section className='items my-5 py-5' ref={refMostItemsPopular}>
        <div className='container my-3'>
          <h3>Most Popular</h3>
          <p>one of kost that is very much in demand by many young people.</p>
          <div className='row'>
            {data.map((item, index) => {
              return (
                <Fade bottom delay={500 * index}>
                  <div className='col-lg-3 col-sm-10 col-md-6 my-3'>
                    <Item key={index} item={item} setCurrentId={item._id} />
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Items;
