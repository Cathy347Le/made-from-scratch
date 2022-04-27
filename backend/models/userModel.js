import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

//For user login, creating a method called matchPassword that searches if the entered password matches the hashed password in the system.
//This is how you can add methods to mongoose models
//The benefit of this way is preventing from duplication of validation methods in multiple places
//Do not declare methods using ES6 arrow functions (=>). Arrow functions explicitly prevent binding this, so your method will not have access to the document and the above examples will not work.
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//This will run before the data for a new user is saved
userSchema.pre('save', async function (next) {
	//Function only runs if password was modified
	//If user updated something in their profile, like email, we don't want to rehash their password
	if (!this.isModified('password')) {
		next();
	}

	//Salting is simply the addition of a unique, random string of characters known only to the site to each password before it is hashed, typically this “salt” is placed in front of each password. The salt value needs to be stored by the site, which means sometimes sites use the same salt for every password
	const salt = await bcrypt.genSalt(10);

	//Taking the plain text password and encrypting it
	this.password = await bcrypt.hash(this.password, salt);
});

//How a model is created from the schema
const User = mongoose.model('User', userSchema);

export default User;
