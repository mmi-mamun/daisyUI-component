import React from 'react';

const Keyboard = () => {
    return (
        <section className='py-24'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your text</span>
                    <span className="label-text-alt">Alt label</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Hi, Azam vai"></textarea>
                <label className="label">
                    <span className="label-text-alt">Golam</span>
                    <span className="label-text-alt">Azam</span>
                </label>
            </div>
            <div>
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd">q</kbd>
                    <kbd className="kbd">w</kbd>
                    <kbd className="kbd">e</kbd>
                    <kbd className="kbd">r</kbd>
                    <kbd className="kbd">t</kbd>
                    <kbd className="kbd">y</kbd>
                    <kbd className="kbd">u</kbd>
                    <kbd className="kbd">i</kbd>
                    <kbd className="kbd">o</kbd>
                    <kbd className="kbd">p</kbd>
                </div>
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd">a</kbd>
                    <kbd className="kbd">s</kbd>
                    <kbd className="kbd">d</kbd>
                    <kbd className="kbd">f</kbd>
                    <kbd className="kbd">g</kbd>
                    <kbd className="kbd">h</kbd>
                    <kbd className="kbd">j</kbd>
                    <kbd className="kbd">k</kbd>
                    <kbd className="kbd">l</kbd>
                </div>
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd">z</kbd>
                    <kbd className="kbd">x</kbd>
                    <kbd className="kbd">c</kbd>
                    <kbd className="kbd">v</kbd>
                    <kbd className="kbd">b</kbd>
                    <kbd className="kbd">n</kbd>
                    <kbd className="kbd">m</kbd>
                    <kbd className="kbd">/</kbd>
                </div>
            </div>
        </section>

    );
};

export default Keyboard;