import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = (props) => {
  const params = useParams();

  return <div>This is the Single Product page</div>;
};

export default SingleProduct;
