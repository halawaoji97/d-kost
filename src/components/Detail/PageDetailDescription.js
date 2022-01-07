import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { checkoutBooking } from '../../store/actions/checkout';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PageDetailDescription = ({ data }) => {
  // const id = data._id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [dataBooking, setDataBooking] = useState({});
  // const des = useSelector((state) => state.data);
  // if (des === 0) return null;
  console.log(data);

  const startBooking = (e) => {
    e.preventDefault();
    dispatch(checkoutBooking());
    navigate('/checkout', { state: { dataBooking: data } });
  };

  const total_rooms = data.empty_room + data.filled_room;
  if (!data.facilityId) return 'no data';

  return (
    <section className='container page-detail-description my-5'>
      <div className='row justify-content-between'>
        <div className='col-sm-10 p-4 col-md-6 description rounded bg-light'>
          <h4 className='my-4'>About the place</h4>
          {parse(data.description)}
          <p>full address : {data.full_address}</p>
        </div>
        <div className='col-sm-10 p-4 bg-light col-md-5 rounded'>
          <h4 className='my-4'>Facility</h4>
          <div className='facilities d-flex justify-content-around '>
            {data.facilityId.map((facility, index) => {
              return (
                <div
                  key={`facility-${index}`}
                  className='d-flex align-items-center'
                  style={{ marginBottom: 20 }}
                >
                  <span class='material-icons-outlined'>{facility.icon}</span>
                  <span className='ms-2 text-gray-500 font-weight-light'>
                    {facility.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className='room-info  d-flex justify-content-between mt-5'>
            <div className='row justify-content-between'>
              <div className='col'>
                <button type='button' class='btn text-light btn-info'>
                  Total room <span class='badge bg-dark'>{total_rooms}</span>
                </button>
              </div>
              <div className='col'>
                <button type='button' class='btn text-light btn-info'>
                  Available room{' '}
                  <span class='badge bg-dark'>{data.empty_room}</span>
                </button>
              </div>
              <div className='col mt-3'>
                <button type='button' class='btn text-light btn-info'>
                  Price <span class='badge bg-dark'>Rp. {data.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center text-center'>
        <div className='col'>
          <div className='btn-booking my-5 py-5 text-right'>
            <button
              type='button'
              onClick={startBooking}
              className='btn btn-primary rounded btn-lg'
              // checkout={da}
              // setDataBooking={data}
              // dataBooking={dataBooking}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps)(PageDetailDescription);
