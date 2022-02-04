import React from 'react';
import './ProductRating.scss';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const ProductRating = ({ value, text, color }) => {
  return (
    <div className="rating" style={{ color: color }}>
      <span>
        {value >= 1 ? (
          <BsStarFill />
        ) : value >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <BsStarFill />
        ) : value >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <BsStarFill />
        ) : value >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <BsStarFill />
        ) : value >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <BsStarFill />
        ) : value >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      {/* <span>{text ? text : ""}</span> */}
      <span style={{ color: '#000' }} className="review-text">
        {text && text}
      </span>
    </div>
  );
};

ProductRating.defaultProps = {
  color: '#593196',
};

export default ProductRating;
