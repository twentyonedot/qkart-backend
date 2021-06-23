# qkart-backend

## QKart is an full fledged ecommerce website where one can view products, ability to add products to cart once logged in, and can checkout the cart.
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
