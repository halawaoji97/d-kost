const Loading = () => {
  return (
    <div className='row d-flex py-5 justify-content-center'>
      <div
        className='spinner-grow'
        style={{ width: '3rem', height: '3rem' }}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
