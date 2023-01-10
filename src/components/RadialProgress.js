import React from 'react';

const RadialProgress = () => {
    return (
        <div className='py-28'>
            <div className="radial-progress" style={{ "--value": 0 }}>0%</div>
            <div className="radial-progress" style={{ "--value": 20 }}>20%</div>
            <div className="radial-progress" style={{ "--value": 60 }}>60%</div>
            <div className="radial-progress" style={{ "--value": 80 }}>80%</div>
            <div className="radial-progress" style={{ "--value": 100 }}>100%</div>
        </div>
    );
};

export default RadialProgress;