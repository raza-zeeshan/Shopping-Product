# Shopping App

A React-based e-commerce application that allows users to browse products, view product details, and manage a shopping cart.

## Features


- **Product Listing:** Browse products fetched from [Fake Store API](https://fakestoreapi.com/products).
- **Product Details:** View detailed information about each product.
  
- **Shopping Cart:** Add products to the cart and view cart contents.
- **Routing:** Seamless navigation using React Router.
  
- **Error Handling & Loading States:** User-friendly feedback during data fetches.
- **Responsive Design:** Built with Bootstrap for mobile-friendly layouts.

## Folder Structure
```
shopping-app/
├── public/
│   └── index.html
├── src/
│   ├── component/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── PersonalInfo.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Order.jsx
│   │   │   └── PageNotFound.jsx
│   │   ├── product/
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Shimmer.jsx
│   │   │   └── ErrorMsg.jsx
│   │   └── user/
│   │       ├── UserLogin.jsx
│   │       └── UserRegister.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/shopping-app.git
    cd shopping-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```
### Running the App

Start the development server:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.


## Usage

- **Browse Products:** Go to `/products` to see all products.
- **View Details:** Click on a product to see its details at `/products/:id`.
- **Add to Cart:** Use the "Add to Cart" button on the product detail page.
- **View Cart:** Go to `/cart` to see your selected items.

## API Reference

- Products: `https://fakestoreapi.com/products`
- Product Details: `https://fakestoreapi.com/products/:id`

## Main Components

- [`Products`](src/component/product/Products.jsx): Lists all products.
- [`ProductDetails`](src/component/product/ProductDetails.jsx): Shows details for a single product.
- [`Cart`](src/component/layout/Cart.jsx): Displays cart contents.
- [`Navbar`](src/component/layout/Navbar.jsx): Navigation bar.
- [`PageNotFound`](src/component/layout/PageNotFound.jsx): Handles invalid routes.

## Contributing
Pull requests are welcome! For major changes, please open an issue first.
## License

[MIT](LICENSE)

Made with ❤️
Owner : Zeeshan Raza
