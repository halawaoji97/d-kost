import React from 'react';

const FeaturedImage = ({ data }) => {
  console.log(data.url);
  return (
    <section className='container featured-image'>
      <div className='row'>
        {data.map((item, index) => {
          return (
            <div key={index} className='col-sm-10 feature-item my-2 col-md-4'>
              <figure className='figure'>
                <img
                  src={item.url}
                  className='figure-img img-fluid rounded'
                  alt={item.name}
                />
                <div className='figure-caption d-flex justify-content-center align-items-center'>
                  {item.name}
                </div>
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedImage;
