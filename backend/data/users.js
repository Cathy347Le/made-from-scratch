import bcrypt from 'bcryptjs';

export const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'John Smith',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Jane Smith',
		email: 'jane@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];
