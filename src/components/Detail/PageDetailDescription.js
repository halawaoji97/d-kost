import React from 'react';
import parse from 'html-react-parser';

const PageDetailDescription = ({ data }) => {
  return (
    <section className='container page-detail-description my-5'>
      <div className='row justify-content-between'>
        <div className='col-sm-10 p-4 col-md-6 description rounded bg-light'>
          <h4 className='my-4'>About the place</h4>
          {parse(data.description)}
        </div>
        <div className='col-sm-10 p-4 bg-light col-md-5 rounded'>
          <h4 className='my-4'>Facility</h4>
          <div className='facilities d-flex justify-content-around '>
            {data.facilities.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className='d-flex align-items-center'
                  style={{ marginBottom: 20 }}
                >
                  <span class='material-icons-outlined'>{feature.icon}</span>{' '}
                  <span className='ms-2 text-gray-500 font-weight-light'>
                    {feature.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='justify-content-center'>
        <div className='col'>
          <div className='btn-booking my-5 py-5 text-right'>
            <button type='button' className='btn btn-primary  rounded btn-lg'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageDetailDescription;
