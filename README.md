# Authentication Backend with MongoDB, Express, and Node.js

This project implements a simple backend application for user authentication using MongoDB for data storage, Express for handling HTTP requests, and Node.js for server-side logic. Users can register, login, and view their profile information.

## Technologies Used

- **MongoDB**: Database to store user information.
- **Express**: Web framework for Node.js.
- **Node.js**: Server-side JavaScript runtime environment.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SachinMondal/auth-backend.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/authdb
   JWT_SECRET=your_jwt_secret
   ```

   - `PORT`: Port number for the server (default: 3000).
   - `MONGODB_URI`: MongoDB connection URI for your database.
   - `JWT_SECRET`: Secret key for JWT token generation.

## Usage

To start the server, run:

```bash
npm start
```

The server will start at `http://localhost:3000` by default.

## API Endpoints

### 1. Register User

- **URL:** `POST /api/register`
- **Body:**
  ```json
  {
    "username": "exampleuser",
    "password": "password123",
    "name":"example"
  }
  ```
- **Response:** User object with ID and username.

### 2. Login User

- **URL:** `POST /api/login`
- **Body:**
  ```json
  {
    "username": "exampleuser",
    "password": "password123"
  }
  ```
- **Response:** JWT token for authenticated user.

### 3. View Profile

- **URL:** `GET /api/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** User profile data.

## Deployment

Deploy this project to a production environment following standard Node.js deployment practices.

## Contributing

Contributions are welcome! Fork this repository, submit pull requests, and report issues.

## License

This project is licensed under the [Your License Name] License - see the [LICENSE](LICENSE) file for details.

---

