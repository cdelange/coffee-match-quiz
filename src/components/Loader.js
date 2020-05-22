import React from 'react';
import coffeeBean from '../assets/bean.png';

function Loader() {
  return (
    <div className="row" >
    <div className='loader col-xs-12'>
        <div>
            <img src={coffeeBean} />
        </div>
        <div>
            <img src={coffeeBean} />
        </div>
        <div>
            <img src={coffeeBean} />
        </div>
    </div>
    </div>
  );
}

export default Loader;
