# MADE FROM SCRATCH - STEP BY STEP

#### SETUP FRONTEND AND UPDATE PUBLIC FOLDER

- Update site meta data in public/index.html
- Add cupcake favicon - sizes 16, 32, 192, and 512
- Remove git from frontend and add it to the root directory instead
- Move and update .gitignore file to the roote directory

#### CLEAN UP FILES IN THE SRC FILES

- Remove unused code and files

#### REACT-BOOTSTRAP SETUP WITH HEADER

- `npm install react-bootstrap` and Bootswatch Pulse theme
- Create Header with nav logo and links

#### SETUP FOOTER

- Install sass and react-icons
- Get footer to stay on the bottom - https://radu.link/make-footer-stay-bottom-page-bootstrap/
- Add Icons and Anchor links

#### HOME SCREEN PRODUCTS LIST

- Create Pages folder and Add Home component which will list out all the products
- Make sure Homecontent plumbling is setup and displays the product names
- Create a product component and display in a bootstrap card
- **DON'T FORGET TO ADD THE KEY**

#### ADD RATING COMPONENT

- Create Rating Component (pass in value and text prop) and add it in Product Component
- Need conditional logic on which star icons to display (filled star, half filled star, blank star)
- Add in Default Color Props
- Style ratings component

#### ADD REACT ROUTER V5

- install the old version `npm i react-router@5.3.0`
- install `npm i react-router-bootstrap@rr-v4` that is compatible with react-router v5 since we're using react-bootstrap that have the Link components
- Add in Router and Routes
- Add in Route for HomeContent, ourStory, and FAQ
- Add route for Single Product

#### CREATE SINGLE PRODUCT PAGE

- Normally we would pull this data from the backend
- For now we'll import products.js and use the find method to capture the correct product
  - There are multiple ways to grab the id: useParams from react-router-dom or props.match.id
- Add a Go Back button to the homepage
- Add product image, name, rating component, price, and description
- Format price number as currency - https://flaviocopes.com/how-to-format-number-as-currency-javascript/
- Status with conditional logic if it is in stock or out of stock
- Add to Card button - button will disable if item is out of stock
- Styling page

#### SETUP BACKEND

Some background info: Need to setup a backend which will communicate with a DB (MongoDB). Server will use mongoose to help commmunicate with the DB. Mongoose has its own methods like find or findmyID to interact with the DB. To capture data from the backend end, you need to make HTTP requests. And server will serve JSON Data (as opposed to HTML files, etc.) We're going to move the products.js file to the server.

- Create backend folder and a server.js (entrypoint for our backend)
- In root directory, we want a package.json `npm init` and express `npm i express`

#### SET SERVER.JS AND INITIALIZE EXPRESS

- Send a test console.log request to server and display products and products/:id json
- Add nodemon and concurrently as devDependency

#### GET FRONTEND TO FETCH PRODUCTS LIST FROM BACKEND

- Turn on backend and frontend. Get frontend to fetch products and product/:id
- Add axios
  - With error handling, you should use .then and .catch
  - If using fetch, then you should use error and isLoaded as useState
  - If using isLoaded, make sure to update the return function
- Setup HomeContent with useState and useEffect
  - Setup proxy since backend is on a different port (aka 5000)
  - console.log products first before doing setProducts
  - Afterwards reccomended you open dev tools and view the Network Response Headers for a 200 status code

#### Fetch singleProduct from backend

- Copy and adjust previous setup from fetching all products
- add isLoaded state
- Add `npm run dev` script to run both frontend and backend server using the concurrently package
- After successful communciation with frontend and backend, move the data to a database

#### SETUP MONGODB AND MONGOOSE

- On Mongo website, add product, database name, and clusters and capture the connection string to add to .env file
- Install `npm install mongoose`
- Create DB/Connection.js to connect to mongoose which will be used to interact with MongoDB
- Run `npm run server` to more sure you can connect

#### SETUP MODELS

- Usually done one by one so you can test each one for accuracy
- Each schema maps to a MongoDB collection and defines the shape/structure of the documents within the collection
- There are four: userModel, productModel, reviewModel , and orderModel - start with the easiest
  - productModel - since only admin users can create products, you need to connect the product and Iser schema. Ref is what schema you are connnecting to and type is what schema type (property) you need from User schema.
  - ProductModel also takes an array of reviews which require a reviewSchema
  - orderModel - orderItems is setup as an array of objects and not connected to the productSchema. No need for its own schema. Schema creates a unique id for items but object arrays do not. Order items can hold a lot of additional info that is specific to that order (discounts, extras like gift wrapper, tax rates).

#### SEED DATA

- In product.js - remove IDs. MongoDB creates their own
- Create fake users with one being an admin
- Create function to import and destroy data
- ThinkMovie and Petz seed data is another approach.
- You can check this is your local browser or in MongoDB
- MongoDb will create the unique IDs

#### CREATE ROUTES

- Create /routes/productRoutes.js
- In server.js point /api/products to productRoutes
- Check http://localhost:5000/api/products and /api/products/:id to see if data from MongoDB is displaying correctly, which can tell by looking at the IDs

#### CHECK ON POSTMAN

Similar to checking on local browser http://localhost:5000/api/products but it is more readable. Postman also you to do all the HTTP request. Local browser can just handle GET request.

#### ERROR HANDLING

- THEN/CATCH method - render the error message on the browser instead of console.log the error
- ASYNC/AWAIT handles error using the TRY/CATCH structure, but can be messy when you have so many routes to do. You can use express-async-handler to handle your exceptions in a cleaner way
- ErrorHandler.js moved to Middleware folder and reference to function on server.js should be at the top. Middleware runs in order that you define.

##### Price Formatting

- What happens if I need the price stored as a number and string? Is it better to add the string version in the data or reused a function that formats it? I added it as a data property in the product model.

# REDUX

### _REDUX-TRAVERSY BRANCH_

#### SETUP

- In frontend, install `npm i redux react-redux redux-thunk redux-devtools-extension`
  - Redux and react-redux go together
  - Thunk lets you make async requests in your actions
  - Redux-dev-tools-extensions makes it easy to use the chrome redux dev tools
- In frontend, setup scaffold for redux-store
- Typical steps are:
  - Constants (optional)
  - Reducers - this is where your logic lives. Reducers take in an initial state and action
  - Bring in reducers into store.js (if neccessary)
  - Actions - describe your payload (aka data) here and may need to make an API/Axios call
  - Bring in actions into the targeted component
    - Dispatch your actions in useEffect
  - In the component, useDispatch to dispatch your actions and test on Redux Dev Tools
    - If Redux Dev Tools checks out, useSelector to select the piece of state and render on frontend

#### FETCH ALL PRODUCTS

- Replace current functions for fetching all products
  - Create productReducers
  - Store action types in constants so you can keep track of all of them in a central place. This is optional.
  - Setup redux to get all your products, productList
    - order is setup constants and reducers, bring reducers into store.js, then setup actions, add actions to the component and test on Redux dev tools using useDispatch. Once Redux dev tools checks out, use useSelector to select the piece of state you want and display it on the frontend.
    - Fire the action using useDispatch and useSelector hooks in HomeContent (before hooks, it was more difficult). useDispatch to call your actions, listProducts. useSelector lets you select the part of the state to display you products on the front end.
    - Udemy tutorial mentions throwing an error to check and see the correct action type shows on redux dev tool

#### FETCH SINGLE PRODUCTS

- Setup fetch single product using redux
  - Order is constants, reducers, bring in reducer into store.js, then actions, bring in actions into component, test redex dev tools, and finally render it on the frontend

#### ADD CART FUNCTIONALITY

##### Update Product page frontend + AddToCart Functionality

- Add form select quanity above Add to Cart button if product is in stock
- If count in stock is 5. Need to create an array of [0,1,2,3,4] so form select options can be 1,2,3,4,5.
- Add functionality to AddToCart button, which will redirect to the Add page and pass in the product ID and quantity via the URL params. Click AddToCart button to check the url in the address bar.
- Create Cart page. Route would make /id? optional
  - Add Cart constants, reducers, bring in reducers into store, check Redux Dev Tools for cart state
  - Add actions and use Local Storage. Update store.js to access the local storage
    - Need Axios because when we add an item to the cart, we need to make a request to /api/products/:id to get all the data related to that specific product
- Bring actions into the Cart component and check on Redux Dev Tools
- Bring in the state using useSelector and display on frontend
- Add trash can button and checkout button - test by having onClick function set to console.log(msg)

##### Add Remove Items From Cart Feature + Proceed to Checkout Functionality

- Setup constants, reducers, store (no need), actions, component, Redex dev tools

#### ADD MESSAGE COMPONENT

- Add the react-bootstrap alert component as a flexible alert message
- I believe this is an example of an high order component.
- Skip loader component

## Things to do Later

- Update React Router to v6
  ~~- Figure out why error handling is not working - need to install `npm i express-async-handler`~~
- Upload multiple product images feature

## Authentication Branch

- Backend User Authentication
- Front End User Authentication and Profile
- Update backend with ES6 instead of common JS
  - add `"type": "module"` in package.json
  - In backend, need to import the file extension (not needed in frontend)

##### Clean up Routes folder

- Create Controller folder. Remove logic from the routes folder and have routes just handle routes and map to a controllers methods. Cleaner look.
  - authentication branch has Travis' way
  - route-controller-clean2 has Cathy's way aka ThinkMovie

#### SETUP USER ENDPOINT

- Get /api/users/login endpoint to work with Postman (backend version of console). Get Postman to send back your request. Make sure plumbing is setup.

```
export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	res.send({ email, password });
});
```

- Setup user endpoint to search for an authenicated user (no token generated yet) and test on Postman
