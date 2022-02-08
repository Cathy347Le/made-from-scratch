# Made from Scratch

### An Asian-American bakery offering pastries that are damn delicious

#### Resources

React, Redux, Node, MongoDB, Postman
React Bootstrap, Bootswatch (Pulse Theme),

#### Setup frontend and update public folder

- Update site meta data in public/index.html
- Add cupcake favicon - sizes 16, 32, 192, and 512
- Remove git from frontend and add it to the root directory instead
- Move and update .gitignore file to the roote directory

#### Clean up files in the src files

- Remove unused code and files

#### React-Bootstrap setup with Header

- `npm install react-bootstrap` and Bootswatch Pulse theme
- Create Header with nav logo and links

#### Setup Footer

- Install sass and react-icons
- Get footer to stay on the bottom - https://radu.link/make-footer-stay-bottom-page-bootstrap/
- Add Icons and Anchor links

#### Home Screen Products List

- Create Pages folder and Add Home component which will list out all the products
- Make sure Homecontent plumbling is setup and displays the product names
- Create a product component and display in a bootstrap card
- **DON'T FORGET TO ADD THE KEY**

#### Add Rating Component

- Create Rating Component (pass in value and text prop) and add it in Product Component
- Need conditional logic on which star icons to display (filled star, half filled star, blank star)
- Add in Default Color Props
- Style ratings component

#### Add React Router v5

- install the old version `npm i react-router@5.3.0`
- install `npm i react-router-bootstrap@rr-v4` that is compatible with react-router v5 since we're using react-bootstrap that have the Link components
- Add in Router and Routes
- Add in Route for HomeContent, ourStory, and FAQ
- Add route for Single Product

#### Create Single Product Page

- Normally we would pull this data from the backend
- For now we'll import products.js and use the find method to capture the correct product
  - There are multiple ways to grab the id: useParams from react-router-dom or props.match.id
- Add a Go Back button to the homepage
- Add product image, name, rating component, price, and description
- Format price number as currency - https://flaviocopes.com/how-to-format-number-as-currency-javascript/
- Status with conditional logic if it is in stock or out of stock
- Add to Card button - button will disable if item is out of stock
- Styling page

#### Setup Backend

Some background info: Need to setup a backend which will communicate with a DB (MongoDB). Server will use mongoose to help commmunicate with the DB. Mongoose has its own methods like find or findmyID to interact with the DB. To capture data from the backend end, you need to make HTTP requests. And server will serve JSON Data (as opposed to HTML files, etc.) We're going to move the products.js file to the server.

- Create backend folder and a server.js (entrypoint for our backend)
- In root directory, we want a package.json `npm init` and express `npm i express`

#### Set Server.js and initialize Express

- Send a test console.log request to server and display products and products/:id json
- Add nodemon and concurrently as devDependency

#### Get frontend to fetch products list from backend

- Turn on backend and frontend. Get frontend to fetch products and product/:id
- Add axios
  - With error handling, you should use .then and .catch
  - If using fetch, then you should use error and isLoaded as useState
  - If using isLoaded, make sure to update the return function `isLoaded && isLoaded`
- Setup HomeContent with useState and useEffect
  - Setup proxy since backend is on a different port (aka 5000)
  - console.log products first before doing setProducts
  - Afterwards reccomended you open dev tools and view the Network Response Headers for a 200 status code

#### Fetch singleProduct from backend

- Copy and adjust previous setup from fetching all products
- add isLoaded state
- Add `npm run dev` script to run both frontend and backend server using the concurrently package

#### Setup MongoDB and Mongoose

- On Mongo website, add product, database name, and clusters and capture the connection string to add to .env file
- Install `npm install mongoose`
- Create DB/Connection.js to connect to mongoose which will be used to interact with MongoDB
- Run `npm run server` to more sure you can connect

#### Setup Models

- Usually done one by one but all three are: userModel, productModel, and orderModel
  Add `npm i bcryptjs` to hash user passwords

#### Seed Data

- In product.js - remove IDs. MongoDB creates their own
- Create fake users with one being an admin
- Create function to import and destroy data

#### Create Routes

- Create /routes/productRoutes.js
- In server.js point /api/products to productRoutes
- Check http://localhost:5000/api/products and /api/products/:id to see if data from MongoDB is displaying correctly, which can tell by looking at the IDs

#### Check on Postman

### Things to do Later

- Update React Router to v6
