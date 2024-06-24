import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <SyncLoader color="#36D7B7" size={16} margin={4} />
    </div>
  );
};

export default LoadingSpinner;
