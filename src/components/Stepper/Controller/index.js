import React from 'react';

export default function Controller(props) {
  return (
    <section className='container my-5'>
      <div className='row d-flex align-items-center justify-content-center'>
        {props.children}
      </div>
    </section>
  );
}
