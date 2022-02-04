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
