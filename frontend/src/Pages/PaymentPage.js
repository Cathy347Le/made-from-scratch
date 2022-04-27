import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../Components/FormContainer';
import CheckoutSteps from '../Components/CheckoutSteps';
import { savePaymentMethod } from '../Actions/cartActions';

const PaymentPage = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	if (!shippingAddress.address) {
		history.push('/shipping');
	}

	const [paymentMethod, setPaymentMethod] = useState('');

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		history.push('/place-order');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>
					<Col>
						<Form.Check
							type='radio'
							label='PayPal or Credit Card'
							id='PayPal'
							name='paymentMethod'
							value='PayPal'
							checked={paymentMethod === 'PayPal'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
						<Form.Check
							type='radio'
							label='Stripe'
							id='Stripe'
							name='paymentMethod'
							value='Stripe'
							checked={paymentMethod === 'Stripe'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
					</Col>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default PaymentPage;
