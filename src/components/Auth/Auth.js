import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../store/actions/auth';
// import InputField from './InputField';

const initialState = {
  full_name: '',
  email: '',
  full_address: '',
  phone_number: '',
  password: '',
  confirm_password: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const swithMode = () => {
  //   setIsSignup((prevIsSignup) => !prevIsSignup);
  // };

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.error(error);
    console.log('fail');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='auth my-5'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='card bg-light py-5 px-5'>
              <form onSubmit={handleSubmit}>
                <h2 className='mb-5 text-center'>
                  {isSignup ? 'Daftar' : 'Login'}
                </h2>
                {/* {isSignup && (
                  <>
                    <InputField
                      label='Nama Lengkap'
                      name='full_name'
                      id='full_name'
                      placeholder='Nama Lengkap'
                      className='form-control'
                      type='text'
                      handleChange={handleChange}
                    />
                    <InputField
                      label='Nomor Hp'
                      name='phone_number'
                      id='phone_number'
                      placeholder='Nomor hp yang aktif'
                      className='form-control'
                      type='text'
                      handleChange={handleChange}
                    />
                    <InputField
                      label='Alamat Sekarang'
                      name='full_address'
                      id='full_address'
                      placeholder='Alamat sekarang'
                      className='form-control'
                      type='text'
                      handleChange={handleChange}
                    />
                  </>
                )}
                <InputField
                  label='Email'
                  name='email'
                  id='email'
                  placeholder='Alamat email'
                  className='form-control'
                  type='email'
                  handleChange={handleChange}
                />
                <InputField
                  label='Kata Sandi'
                  name='password'
                  id='password'
                  placeholder='Kata sandi'
                  className='form-control'
                  type='password'
                  handleChange={handleChange}
                />
                {isSignup && (
                  <InputField
                    label='Konfirmasi Kata Sandi'
                    name='confirm_password'
                    id='confirm_password'
                    placeholder='Ulangi kata sandi'
                    className='form-control'
                    type='password'
                    handleChange={handleChange}
                  />
                )} */}
                <div className='row my-5 justify-content-center text-center'>
                  {/* <div className='col-sm-12 col-lg-6 col-md-6'>
                    <button type='submit' className='btn btn-primary'>
                      {isSignup ? 'Register' : 'Login'}
                    </button>
                  </div> */}
                  <div className='col-sm-12 col-lg-6 col-md-6'>
                    <GoogleLogin
                      clientId='68476784938-tjno59vdipmpc9euviso9ehpc71ai7on.apps.googleusercontent.com'
                      render={(renderProps) => (
                        <button
                          type='button'
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className='btn btn-primary'
                        >
                          Login with Google
                        </button>
                      )}
                      onSuccess={googleSuccess}
                      onFailure={googleFailure}
                      cookiePolicy='single_host_origin'
                    />
                  </div>
                </div>

                {/* <div className='row text-center mt-5'>
                  <div className='col-12'>
                    <button
                      style={{ width: '100%' }}
                      onClick={swithMode}
                      type='button'
                      className='btn text-secondary btn-light '
                    >
                      {isSignup
                        ? 'Sudah punya akun? Login'
                        : 'Belum punya akun? Daftar'}
                    </button>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
