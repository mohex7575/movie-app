import React from 'react';

const Spinner = () => {
  return (
    <div style={{
      display: 'inline-block',
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #4CAF50',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
  );
};

export default Spinner;