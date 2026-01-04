# JayCart Backend 

**JayCart** is a full-featured backend for an e-commerce shopping platform built with **Node.js**, **Express**, **GraphQL**, and **MongoDB**. It provides APIs for **products, users, orders, authentication**, and integrates with a **payment gateway**. --- 

## Table of Contents
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [Scripts](#scripts)
- [API Overview](#api-overview)
- [Testing](#testing)
- [License](#license)

---

## Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **GraphQL** – API queries and mutations  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **JWT** – JSON Web Token for authentication  
- **Bcrypt** – Password hashing  
- **Jest** – Unit & integration testing  
- **dotenv** – Environment variable management  
- **Cors** – Cross-Origin Resource Sharing  

---

## Folder Structure
jaycart-backend/
│
├── src/
│ ├── app.js # Entry point of the application
│ ├── graphql/ # GraphQL schema & resolvers
│ │ ├── schema/
│ │ │ └── index.js
│ │ └── resolvers/
│ ├── models/ # MongoDB models
│ │ ├── user.model.js
│ │ ├── product.model.js
│ │ └── order.model.js
│ ├── routes/ # REST/GraphQL routes
│ ├── controllers/ # Request controllers
│ ├── middleware/ # Auth middleware, error handling
│ └── utils/ # Helper functions
│
├── tests/ # Jest test files
│ ├── auth.test.js
│ ├── product.test.js
│ └── order.test.js
│
├── package.json
├── package-lock.json
├── .env # Environment variables
└── jest.config.mjs # Jest configuration


---

## Installation

1. **Clone the repository**


bash
git clone https://github.com/jayanthroyal1/jaycart-backend.git
cd jaycart-backend
npm install

Packages included (from package.json):

express

graphql

mongoose

bcrypt

jsonwebtoken

dotenv

cors

jest (dev)

supertest (dev)


---

## environment-variables
Create a .env file in the project root with the following variables:
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-secret>

 **Note - Replace placeholders with your actual credentials.**

4. **Running the Server**
Development Mode
npm run dev
Production Mode - npm start

 **Scripts**
 | Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Run server in development mode with nodemon |
| `npm start`        | Run server in production mode               |
| `npm test`         | Run all Jest tests                          |
| `npx jest --watch` | Run tests in watch mode                     |

5 **API Overview**

Authentication

Register user

Login user

Logout

Products

CRUD operations

Search products

Orders

Place order

Get order details

GraphQL

Queries and mutations for all resources

All requests are authenticated via JWT where required.

Here is your fixed and properly structured Markdown (README.md) with:

Correct headings

Proper code blocks

Clean lists

Consistent formatting

Clear sections

You can copy–paste this directly into your README.md.

# JayCart Backend

**JayCart** is a full-featured backend for an e-commerce shopping platform built with **Node.js**, **Express**, **GraphQL**, and **MongoDB**.  
It provides APIs for **products, users, orders, authentication**, and integrates with a **payment gateway**.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [Scripts](#scripts)
- [API Overview](#api-overview)
- [Testing](#testing)
- [License](#license)

---

## Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **GraphQL** – API queries and mutations  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **JWT** – JSON Web Token authentication  
- **Bcrypt** – Password hashing  
- **dotenv** – Environment variable management  
- **CORS** – Cross-Origin Resource Sharing  
- **Jest** – Unit & integration testing  

---

## Folder Structure



jaycart-backend/
│
├── src/
│ ├── app.js # Entry point of the application
│ ├── graphql/ # GraphQL schema & resolvers
│ │ ├── schema/
│ │ │ └── index.js
│ │ └── resolvers/
│ ├── models/ # MongoDB models
│ │ ├── user.model.js
│ │ ├── product.model.js
│ │ └── order.model.js
│ ├── routes/ # REST/GraphQL routes
│ ├── controllers/ # Request controllers
│ ├── middleware/ # Auth & error handling middleware
│ └── utils/ # Helper functions
│
├── tests/ # Jest test files
│ ├── auth.test.js
│ ├── product.test.js
│ └── order.test.js
│
├── package.json
├── package-lock.json
├── .env # Environment variables
└── jest.config.mjs # Jest configuration


---

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/jayanthroyal1/jaycart-backend.git
cd jaycart-backend


Install dependencies

npm install

Main Packages Used

express

graphql

mongoose

bcrypt

jsonwebtoken

dotenv

cors

Dev Dependencies

jest

supertest

Environment Variables

Create a .env file in the project root:

PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-secret>


Note: Replace placeholders with your actual credentials.

Running the Server
Development Mode
npm run dev

Production Mode
npm start

Scripts
Command	Description
npm run dev	Run server in development mode with nodemon
npm start	Run server in production mode
npm test	Run all Jest tests
npx jest --watch	Run tests in watch mode
API Overview
Authentication

Register user

Login user

Logout user

Products

Create, Read, Update, Delete (CRUD)

Search products

Orders

Place order

Get order details

GraphQL

Queries and mutations for all resources

All protected routes require JWT authentication.

Testing

Run all tests using:

npm test

License

This project is licensed under the MIT License.


---

If you want, I can also:
- Add **badges** (Node, MongoDB, License)
- Improve **API documentation**
- Convert this into a **professional open-source README**

Just tell me 👍