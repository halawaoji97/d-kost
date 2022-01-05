import React from 'react';

const FeaturedImage = ({ data }) => {
  console.log(data.featureId);
  return (
    <section className='container featured-image'>
      <div className='row'>
        {data.featureId.map((item, index) => {
          return (
            <div key={index} className='col-sm-10 feature-item my-2 col-md-4'>
              <figure className='figure'>
                <img
                  src={`https://staycation-bwa-mern.herokuapp.com/${item.imageUrl}`}
                  className='figure-img img-fluid rounded'
                  alt={item.title}
                />
                <div className='figure-caption d-flex justify-content-center align-items-center'>
                  {item.title}
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
