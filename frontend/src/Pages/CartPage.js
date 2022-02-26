import React, { useEffect } from 'react';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import ErrorMessage from '../Components/ErrorMessage';
import { addToCart } from '../Actions/cartActions';

const CartPage = () => {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  //params.id is the product ID from the URL

  //Capture just the quantity value from the URL
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  console.log(params.id, location.search, qty);

  useEffect(() => {
    if (params.id) {
      dispatch(addToCart(params.id, qty));
    }
  }, [dispatch, params.id, qty]);

  return <div>This is the Cart page</div>;
};

export default CartPage;
