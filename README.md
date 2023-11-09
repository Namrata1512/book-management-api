# Book Management RESTful API

This Node.js application provides a RESTful API for managing books. It uses MongoDB as the database for storing book data.

## Features

- **CRUD Operations:**
  - Add a new book (title, author, summary)
  - View a list of all books
  - View details of a specific book by its ID
  - Update a book's details
  - Delete a book

- **Database:**
  - MongoDB (You can use MongoDB Atlas or set up a local instance)

## Video Demonstration

[Watch the video demonstration](<https://vimeo.com/882746408?share=copy>)

The video covers all CRUD operations, including various test cases and edge cases.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (either local or cloud-based)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Namrata1512/book-management-api.git
   cd book-management-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URI=your-mongodb-connection-string
   PORT=3000 # Optional: specify the port (default is 3000)
   ```

### Usage

1. Run the application:

   ```bash
   npm start
   ```

2. The API will be available at `http://localhost:3000` (or the specified port).

## API Endpoints and Usage

### Add a new book

- **Endpoint:** `POST /books`
- **Request Body:**
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A story about the American Dream and the Roaring Twenties."
  }
  ```

### View all books

- **Endpoint:** `GET /books`

### View a specific book

- **Endpoint:** `GET /books/:id`

### Update a book

- **Endpoint:** `PUT /books/:id`
- **Request Body:**
  ```json
  {
    "title": "New Title",
    "author": "New Author",
    "summary": "New Summary"
  }
  ```

### Delete a book

- **Endpoint:** `DELETE /books/:id`

## Deployment (Bonus Points)

To deploy the API on a server:

1. Ensure Node.js and MongoDB are installed on the server.
2. Copy the application files to the server.
3. Install dependencies using `npm install`.
4. Set up the environment variables.
5. Start the application with `npm start`.

