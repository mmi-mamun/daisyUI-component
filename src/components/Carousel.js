import React from 'react';
import banner1 from '../assets/banner/banner-1.jpg';
import banner2 from '../assets/banner/banner-2.jpg';
import banner3 from '../assets/banner/banner-3.jpg';
import banner5 from '../assets/banner/banner-5.jpg';

const Carousel = () => {

    let i = 1;
    function myLoop() {
        const slides = document.querySelectorAll(".slideBTN");
        setTimeout(function () {
            if (i < slides.length) {
                slides[i].click();
                i++;
            }
            if (i >= slides.length) {
                i = 0;
            }
            myLoop();
        }, 3000)
    }
    window.addEventListener("load", () => {
        myLoop();
    })
    return (

        <div>
            <div id="carouselExampleSlidesOnly" className="carousel max-h-[600px] w-full slide relative" data-bs-ride="carousel">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} className="w-full object-cover" alt='banner-1' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner2} className="w-full object-cover" alt='banner-2' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner3} className="w-full object-cover" alt='banner-3' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={banner5} className="w-full object-cover" alt='banner-4' />
                </div>
            </div>
            <div className="flex justify-center w-full py-3 gap-2">
                <a href="#item1" className="slideBTN btn btn-xs">1</a>
                <a href="#item2" className="slideBTN btn btn-xs">2</a>
                <a href="#item3" className="slideBTN btn btn-xs">3</a>
                <a href="#item4" className="slideBTN btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;