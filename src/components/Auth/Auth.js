import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const swithMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

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
  return (
    <div className='auth my-5'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='card bg-light py-5 px-5'>
              <form action=''>
                <h2 className='mb-5'>{isSignup ? 'Daftar' : 'Login'}</h2>
                {isSignup && (
                  <>
                    <InputField
                      label='Nama Lengkap'
                      name='name'
                      id='name'
                      placeholder='Nama Lengkap'
                      className='form-control'
                      type='text'
                    />
                    <InputField
                      label='Nomor Hp'
                      name='nomor_hp'
                      id='nomor_hp'
                      placeholder='Nomor hp yang aktif'
                      className='form-control'
                      type='text'
                    />
                    <InputField
                      label='Alamat Sekarang'
                      name='alamat'
                      id='alamat'
                      placeholder='Alamat sekarang'
                      className='form-control'
                      type='text'
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
                />
                <InputField
                  label='Kata Sandi'
                  name='password'
                  id='password'
                  placeholder='Kata sandi'
                  className='form-control'
                  type='password'
                />
                {isSignup && (
                  <InputField
                    label='Konfirmasi Kata Sandi'
                    name='konfirmasi_password'
                    id='konfirmasi_password'
                    placeholder='Ulangi kata sandi'
                    className='form-control'
                    type='password'
                  />
                )}
                <div className='row my-5'>
                  <div className='col-sm-12 col-lg-6 col-md-6'>
                    <button type='submit' className='btn btn-primary'>
                      {isSignup ? 'Register' : 'Login'}
                    </button>
                  </div>
                  <div className='col-sm-12 col-lg-6 col-md-6'>
                    <GoogleLogin
                      clientId='68476784938-tjno59vdipmpc9euviso9ehpc71ai7on.apps.googleusercontent.com'
                      render={(renderProps) => (
                        <button
                          type='button'
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className='btn btn-light'
                        >
                          {isSignup ? ' Google Sign Up' : ' Google Sign In'}
                        </button>
                      )}
                      onSuccess={googleSuccess}
                      onFailure={googleFailure}
                      cookiePolicy='single_host_origin'
                    />
                  </div>
                </div>

                <div className='row text-center mt-5'>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
