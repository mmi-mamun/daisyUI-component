import React from 'react';

const Progress = () => {
    return (
        <div className='py-28'>
            <progress className="progress progress-success w-56" value="0" max="100"></progress>
            <progress className="progress progress-success w-56" value="10" max="100"></progress>
            <progress className="progress progress-success w-56" value="40" max="100"></progress>
            <progress className="progress progress-success w-56" value="70" max="100"></progress>
            <progress className="progress progress-success w-56" value="100" max="100"></progress>
        </div>
    );
};

export default Progress;