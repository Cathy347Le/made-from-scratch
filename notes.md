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

### REDUX

#### Redux-Traversy Branch

- In frontend, install `npm i redux react-redux redux-thunk redux-devtools-extension`
  - redux and react-redux go together
  - thunk lets you make async requests in your actions
  - redux-dev-tools-extensions makes it easy to use the chrome redux dev tools
- In frontend, setup scaffold for redux-store
- Replace current functions: fetch all products and fetch single product
  - Create productReducers
  - Store action types in constants so you can keep track of all of them in a central place. This is optional.
  - Setup redux to get all your products, productList
    - order is constants, reducers, and then actions
    - Fire the action using useDispatch and useSelector hooks in HomeContent (before hooks, it was more difficult)
      - useDispatch to call your actions
      - useSelector lets you select the part of the state
      - Dispatch listProducts and check for data in Redux dev tools (no frontend display yet)
      - useSelector to display your products on the front end.
      - Tutorial mentions throwing an error to check and see they correct action type show on redux dev tool

## Things to do Later

- Update React Router to v6
  ~~- Figure out why error handling is not working - need to install `npm i express-async-handler`~~
- Upload multiple product images feature
