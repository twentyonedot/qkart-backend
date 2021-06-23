# qkart-backend

### QKart is an full fledged ecommerce website.
Project Structure

```zsh
.
├── src
│   ├── config
│   │   ├── config.js
│   │   ├── passport.js
│   │   └── tokens.js
│   ├── controllers
│   │   ├── auth.controller.js
│   │   ├── cart.controller.js
│   │   ├── index.js
│   │   ├── product.controller.js
│   │   └── user.controller.js
│   ├── middlewares
│   │   ├── auth.js
│   │   └── validate.js
│   ├── models
│   │   ├── cart.model.js
│   │   ├── index.js
│   │   ├── product.model.js
│   │   └── user.model.js
│   ├── routes
│   │   └── v1
│   │       ├── auth.route.js
│   │       ├── cart.route.js
│   │       ├── index.js
│   │       ├── product.route.js
│   │       └── user.route.js
│   ├── services
│   │   ├── auth.service.js
│   │   ├── cart.service.js
│   │   ├── index.js
│   │   ├── product.service.js
│   │   ├── token.service.js
│   │   └── user.service.js
│   ├── utils
│   │   ├── ApiError.js
│   │   ├── catchAsync.js
│   │   └── pick.js
│   ├── validations
│   │   ├── auth.validation.js
│   │   ├── cart.validation.js
│   │   ├── custom.validation.js
│   │   ├── index.js
│   │   ├── product.validation.js
│   │   └── user.validation.js
│   ├── app.js
│   └── index.js
└── package.json
```
### 🔥 Features
1. User can view the products, even without logged in, and can search the inventory using the search bar.
2. User have the ability to add products to the cart, once logged in.
3. Registered users can place the orders by checking out the cart to the address provided by the users.
4. Used JWT for authentication, to make sure the user's data is more secured. 

### 🔌  APIs provided by qkart
Endpoint | Method 
------------ | -------------
/users/:userId | GET
/users/:id?q=address | GET
/users/:id | PUT
/auth/login | POST
/auth/register | POST
/products/ | GET
/products/:productId | POST
/cart/ | GET
/cart/ | POST
/cart/ | PUT
/cart/checkout | PUT
