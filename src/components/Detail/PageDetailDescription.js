import React from 'react';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
import { checkoutBooking } from '../../store/actions/checkout';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import Loading from '../Loading';
import formattingRupiah from '../utils/formattingRupiah';

const PageDetailDescription = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startBooking = (e) => {
    e.preventDefault();
    dispatch(checkoutBooking());

    navigate('/checkout', {
      state: { dataBooking: data },
    });
  };

  const total_rooms = data.empty_room + data.filled_room;

  if (!data.facilityId) return Loading();

  return (
    <Fade>
      <section className='container page-detail-description my-5'>
        <div className='row justify-content-between'>
          <div className='col-sm-10 p-4 col-md-6 description rounded bg-light'>
            <h4 className='my-4'>About the place</h4>
            <Fade bottom delay={300}>
              {parse(data.description)}
              <p>full address : {data.full_address}</p>
            </Fade>
          </div>
          <div className='col-sm-10 p-4 bg-light col-md-5 rounded'>
            <h4 className='my-4'>Facility</h4>
            <div className='facilities d-flex justify-content-around '>
              {data.facilityId.map((facility, index) => {
                return (
                  <Fade bottom delay={300 * index}>
                    <div
                      key={`facility-${index}`}
                      className='d-flex align-items-center'
                      style={{ marginBottom: 20 }}
                    >
                      <span className='material-icons-outlined'>
                        {facility.icon}
                      </span>
                      <span className='ms-2 text-gray-500 font-weight-light'>
                        {facility.name}
                      </span>
                    </div>
                  </Fade>
                );
              })}
            </div>
            <Fade bottom delay={300}>
              <div className='room-info  d-flex justify-content-between mt-5'>
                <div className='row justify-content-between'>
                  <div className='col'>
                    <button type='button' className='btn text-light btn-info'>
                      Total room{' '}
                      <span className='badge bg-dark'>{total_rooms}</span>
                    </button>
                  </div>
                  <div className='col'>
                    <button type='button' className='btn text-light btn-info'>
                      Available room{' '}
                      <span className='badge bg-dark'>{data.empty_room}</span>
                    </button>
                  </div>
                  <div className='col mt-3'>
                    <button type='button' className='btn text-light btn-info'>
                      Price{' '}
                      <span className='badge bg-dark'>
                        {formattingRupiah(data.price)}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
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
    </Fade>
  );
};
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps)(PageDetailDescription);
