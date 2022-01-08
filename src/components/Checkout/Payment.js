import React from 'react';
import logoBca from '../../assets/images/logo-bca.jpg';
import logoMandiri from '../../assets/images/logo-mandiri.jpg';
import InputFile from '../../components/Input/InputFile';
import InputText from '../Input/InputText';

const Payment = (props) => {
  const { data, detailPage, checkout } = props;
  return (
    <div className='container' style={{ marginBottom: 30 }}>
      <div className='row justify-content-center align-items-center'>
        <div
          className='col-sm-10 px-5 col-md-6  py-5'
          style={{ paddingRight: 80 }}
        >
          <p className='mb-4'>Transfer Pembayaran:</p>
          <p>Total: Rp. {detailPage.price}</p>
          <div className='row mt-4'>
            <div className='col-6 col-md-3  text-right'>
              <img src={logoBca} alt='bank central asia' width='60' />
            </div>
            <div className='col'>
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>2208 1996</dd>
                <dd>Halawa Oji</dd>
              </dl>
            </div>
          </div>
          <div className='row'>
            <div className='col-6 col-md-3 text-right'>
              <img src={logoMandiri} alt='mandiri' width='60' />
            </div>
            <div className='col'>
              <dl>
                <dd>Bank Mandiri</dd>
                <dd>2208 1996</dd>
                <dd>Halawa Oji</dd>
              </dl>
            </div>
          </div>
        </div>

        <div className='col-sm-10 col-md-5 px-5 py-5'>
          <label htmlFor='proof_payment'>Upload Bukti Transfer</label>
          <InputFile
            accept='image/*'
            id='proof_payment'
            name='proof_payment'
            value={data.proof_payment}
            onChange={props.onChange}
          />
          <label htmlFor='bank_name'>Asal Bank</label>
          <InputText
            id='bank_name'
            name='bank_name'
            type='text'
            value={data.bank_name}
            onChange={props.onChange}
          />

          <label htmlFor='bank_holder'>Nama Pengirim</label>
          <InputText
            id='bank_holder'
            name='bank_holder'
            type='text'
            value={data.bank_holder}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
