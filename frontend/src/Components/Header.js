import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.scss';
import navlogo from './assets/baking-icon-32x32.png';
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../Actions/userActions';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		// console.log('logout');
		dispatch(logout());
	};

	return (
		<Navbar bg='primary' variant='dark'>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>
						<img
							alt=''
							src={navlogo}
							width='32'
							height='32'
							className='d-inline-block align-top'
						/>{' '}
						Made from Scratch
					</Navbar.Brand>
				</LinkContainer>
				<Nav className='me-auto'>
					<LinkContainer to='/'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/our-story'>
						<Nav.Link>Our Story</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/faq'>
						<Nav.Link>FAQ</Nav.Link>
					</LinkContainer>
				</Nav>
				<Nav className='ml-auto'>
					<LinkContainer to='/cart'>
						<Nav.Link>Cart</Nav.Link>
					</LinkContainer>
					{userInfo ? (
						<NavDropdown title={userInfo.name} id='username'>
							<LinkContainer to='/profile'>
								<NavDropdown.Item>Profile</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Item onClick={logoutHandler}>
								Logout
							</NavDropdown.Item>
						</NavDropdown>
					) : (
						<LinkContainer to='/login'>
							<Nav.Link>
								<i className='fas fa-user'></i> Sign In
							</Nav.Link>
						</LinkContainer>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
