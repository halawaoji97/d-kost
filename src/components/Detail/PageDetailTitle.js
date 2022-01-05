import React from 'react';

const PageDetailTitle = ({ data }) => {
  console.log(data);
  return (
    <section className='container page-detail-title spacing-sm'>
      <div className='row align-items-center mt-5 py-5 justify-content-center'>
        <div className='col-auto text-center'>
          <h1 className='h2'>Kost {data.title}</h1>
          <span>{data.city}</span>
        </div>
      </div>
    </section>
  );
};

export default PageDetailTitle;
