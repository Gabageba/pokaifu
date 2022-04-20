import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = (props) => {
  return (
    // <div>
    //   <img src={preloader} alt="preloader"/>
    // </div>
    <div className="lds-heart">
      <div></div>
    </div>
  );
};

export default Preloader;