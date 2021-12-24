import React from 'react';

export default function Controller(props) {
  return (
    <section className='container controller my-5'>
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-md-6'>
          <div className='button-step'>{props.children}</div>
        </div>
      </div>
    </section>
  );
}
