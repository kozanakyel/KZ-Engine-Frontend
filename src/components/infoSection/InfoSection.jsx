import React from 'react';

const InfoSection = (props) => {
  const info = props.info;
  const headerApp = props.head;
  const colorApp = props.color;
  const image = props.image;

  return (
    <>
      <div
        className={'pt-5 m-5 text-center bg-' + colorApp}
        style={{ borderTop: '1px solid white' }}
      >
        
        <div className="container mb-3">
          <div
            className={`d-flex flex-column flex-sm-row justify-content-${
              image ? 'between' : 'center'
            }`}
          >
            
            <h1 className="text-warning font-weight-bold">{headerApp}</h1>
            <div className="flex-grow-1">{info}</div>
            {image && (
              <img
                src={image}
                alt="Image"
                style={{ maxWidth: '100%', maxHeight: '200px' }}
                className='m-3'
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
