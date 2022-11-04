import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, price, img} = service
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className='h-[260px]' alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-xl text-orange-500 font-semibold">
              Price: ${price}
            </p>
            <Link to={`/checkout/${_id}`}>
              <FaArrowRight className="text-orange-500"></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;