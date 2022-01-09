import React from 'react';
import InputField from './InputField';
import BgAuth from '../../assets/images/most-popular.jpg';

const Auth = () => {
  return (
    <div className='auth'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='card py-5 px-5'>
              <h2 className='mb-5'>Daftar</h2>
              <form action=''>
                <InputField
                  label='Nama Lengkap'
                  name='name'
                  id='name'
                  placeholder='Nama Lengkap'
                  className='form-control'
                  type='text'
                />
                <InputField
                  label='Email'
                  name='email'
                  id='email'
                  placeholder='Alamat email'
                  className='form-control'
                  type='email'
                />
                <InputField
                  label='Alamat Sekarang'
                  name='alamat'
                  id='alamat'
                  placeholder='Alamat sekarang'
                  className='form-control'
                  type='text'
                />
                <InputField
                  label='Kata Sandi'
                  name='password'
                  id='password'
                  placeholder='Kata sandi'
                  className='form-control'
                  type='password'
                />
                <button type='button' className='btn btn-primary'>
                  Daftar
                </button>
              </form>
            </div>
          </div>
          <div className='col-6'>
            <div class='card bg-dark text-white'>
              <img src={BgAuth} class='card-img' alt='...' />
              <div class='card-img-overlay'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class='card-text'>Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
