import React from 'react';

const Countdown = () => {
    return (
        <section className='py-32 text-center w-full'>
            <div className="flex gap-5 mx-auto w-[400px] justify-between">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 40 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </section>
    );
};

export default Countdown;