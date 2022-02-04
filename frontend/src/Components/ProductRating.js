import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const ProductRating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1 ? (
              <BsStarFill />
            ) : value >= 0.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2 ? (
              <BsStarFill />
            ) : value >= 1.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3 ? (
              <BsStarFill />
            ) : value >= 2.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4 ? (
              <BsStarFill />
            ) : value >= 3.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5 ? (
              <BsStarFill />
            ) : value >= 4.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

ProductRating.defaultProps = {
  color: '#f8e825',
};

export default ProductRating;
