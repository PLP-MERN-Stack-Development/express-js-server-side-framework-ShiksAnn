# 🧩Express.js – RESTful API Project

## 🚀 Objective
Build a RESTful API using **Express.js** that supports CRUD operations, proper routing, middleware (logging, authentication, validation), and error handling — plus advanced features like filtering, pagination, and search.

---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites
- Node.js **v18 or higher**
- npm (comes with Node)

### 2️⃣ Installation
Clone your GitHub Classroom repository and install dependencies:

```bash
git clone <your-repo-url>
cd week2-express-api
npm install

3️⃣ Environment Variables
Create a .env file in the root directory:

env
Copy code
PORT=3000
API_KEY=mysecretapikey123
The API_KEY will be required for creating, updating, and deleting products.

4️⃣ Run the Server
Start the server with:

bash
Copy code
node server.js
Or (if you have nodemon):

bash
Copy code
npx nodemon server.js
You should see:

arduino
Copy code
🚀 Server running at http://localhost:3000
📂 Folder Structure
pgsql
Copy code


week2-express-api/
│
├── server.js
├── routes/
│   └── productRoutes.js
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
├── utils/
│   └── errors.js
├── .env.example
└── README.md


🧭 API Documentation
🏠 Base URL
bash
Copy code
http://localhost:3000/api/products
🔹 GET /api/products
Description:
Fetch all products, with optional filtering, pagination, and search.

Query Parameters:

Name	Type	Description
category	string	Filter by category
search	string	Search products by name
page	number	Page number (default: 1)
limit	number	Results per page (default: 10)

Example Request:

bash
Copy code
curl "http://localhost:3000/api/products?category=electronics&page=1&limit=2"
Example Response:

json
Copy code
{
  "total": 2,
  "page": 1,
  "limit": 2,
  "data": [
    {
      "id": "1",
      "name": "Laptop",
      "description": "16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    },
    {
      "id": "2",
      "name": "Smartphone",
      "description": "128GB storage",
      "price": 800,
      "category": "electronics",
      "inStock": true
    }
  ]
}
🔹 GET /api/products/:id
Description:
Get a specific product by its ID.

Example Request:

bash
Copy code
curl http://localhost:3000/api/products/1
Example Response:

json
Copy code
{
  "id": "1",
  "name": "Laptop",
  "description": "16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
Error Example (404):

json
Copy code
{ "error": "Product not found" }
🔹 POST /api/products
Protected Route: Requires x-api-key header.

Description:
Create a new product.

Headers:

makefile
Copy code
x-api-key: mysecretapikey123
Content-Type: application/json
Example Request:

bash
Copy code
curl -X POST http://localhost:3000/api/products \
-H "Content-Type: application/json" \
-H "x-api-key: mysecretapikey123" \
-d '{
  "name": "Toaster",
  "description": "2-slice toaster",
  "price": 25,
  "category": "kitchen",
  "inStock": true
}'
Example Response:

json
Copy code
{
  "id": "b54f9e7a-7cdd-4f53-9b63-129fe0f88b7a",
  "name": "Toaster",
  "description": "2-slice toaster",
  "price": 25,
  "category": "kitchen",
  "inStock": true
}
Error Example (400):

json
Copy code
{ "error": "All fields are required and must be valid." }
🔹 PUT /api/products/:id
Protected Route: Requires x-api-key header.

Description:
Update an existing product.

Example Request:

bash
Copy code
curl -X PUT http://localhost:3000/api/products/1 \
-H "Content-Type: application/json" \
-H "x-api-key: mysecretapikey123" \
-d '{
  "price": 1300,
  "inStock": false
}'
Example Response:

json
Copy code
{
  "id": "1",
  "name": "Laptop",
  "description": "16GB RAM",
  "price": 1300,
  "category": "electronics",
  "inStock": false
}
🔹 DELETE /api/products/:id
Protected Route: Requires x-api-key header.

Description:
Delete a product by its ID.

Example Request:

bash
Copy code
curl -X DELETE http://localhost:3000/api/products/3 \
-H "x-api-key: mysecretapikey123"
Example Response:

json
Copy code
{
  "message": "Product deleted successfully",
  "product": {
    "id": "3",
    "name": "Coffee Maker",
    "description": "Programmable",
    "price": 50,
    "category": "kitchen",
    "inStock": false
  }
}
🔹 GET /api/products/stats/count
Description:
Get product count by category.

Example Request:

bash
Copy code
curl http://localhost:3000/api/products/stats/count
Example Response:

json
Copy code
{
  "electronics": 2,
  "kitchen": 1
}
⚙️ Middleware Overview
Middleware	Purpose
logger.js	Logs request method, URL, and timestamp
auth.js	Validates API key in headers
validation.js	Checks product data before create/update
errorHandler.js	Handles and formats all server errors

🧪 Testing Tools
You can test the API using:

Postman

Insomnia

curl (via terminal)

✅ Expected Output
A working Express.js RESTful API with CRUD operations

Properly structured middleware

Comprehensive error handling

Advanced query features: filter, pagination, search, and stats