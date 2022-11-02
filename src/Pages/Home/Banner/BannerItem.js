import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="banner-img">
          <img src={image} className="w-full rounded-xl" alt="" />
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3">
          <h1 className="text-6xl font-bold text-white">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4">
          <p className="text-xl text-white w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/3">
          <button className="btn btn-secondary mr-5">Button</button>
          <button className="btn btn-outline btn-secondary">Button</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-14 bottom-5">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;