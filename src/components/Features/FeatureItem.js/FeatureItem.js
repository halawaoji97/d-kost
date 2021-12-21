import React from 'react';

const FeatureItem = ({ data }) => {
  return (
    <>
      <div className='col-sm-10 col-md-3 mt-3 '>
        <div className='card bg-light'>
          <div className='card-body d-flex justify-content-evenly align-items-center'>
            <div className='feature-text'>
              <h3 className='card-title' style={{ fontSize: '26px' }}>
                {data.area}{' '}
                <span
                  className='card-text text-secondary'
                  style={{ fontSize: '16px' }}
                >
                  Area
                </span>
              </h3>
            </div>
            <div className='icon-feature'>
              <span
                className='material-icons-outlined text-primary'
                style={{ fontSize: '48px' }}
              >
                place
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-10 col-md-3 mt-3 '>
        <div className='card bg-light'>
          <div className='card-body d-flex justify-content-evenly align-items-center'>
            <div className='feature-text'>
              <h3 className='card-title' style={{ fontSize: '26px' }}>
                {data.rooms}+{' '}
                <span
                  className='card-text text-secondary'
                  style={{ fontSize: '16px' }}
                >
                  Rooms
                </span>
              </h3>
            </div>
            <div className='icon-feature'>
              <span
                className='material-icons-outlined text-primary'
                style={{ fontSize: '48px' }}
              >
                roofing
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-10 col-md-3 mt-3 '>
        <div className='card bg-light'>
          <div className='card-body d-flex justify-content-evenly align-items-center'>
            <div className='feature-text'>
              <h3 className='card-title' style={{ fontSize: '26px' }}>
                {data.availaleRoom}+{' '}
                <span
                  className='card-text text-secondary'
                  style={{ fontSize: '16px' }}
                >
                  Available room
                </span>
              </h3>
            </div>
            <div className='icon-feature'>
              <span
                className='material-icons-outlined text-primary'
                style={{ fontSize: '48px' }}
              >
                bed
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureItem;
