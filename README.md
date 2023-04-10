# Blog Backend

This is a simple backend server built with Node.js, Express.js and PostgreSQL. It allows you to create, read, update and delete blog posts, comments and users through a RESTful API.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- PostgreSQL (version 13 or later)

### Installing

1. Clone the repository: `git clone https://github.com/YOUR-USERNAME/Blog_backend.git`
2. Install dependencies: `npm install`

### Usage

1. Start the server: `npm start`
2. Send requests to `http://localhost:3000` using your preferred RESTful client (e.g. Postman).

## API Reference

### Users

- `GET /users`: get all users
- `GET /users/:id`: get user by id
- `POST /users`: create a new user
- `PUT /users/:id`: update user by id
- `DELETE /users/:id`: delete user by id

### Blog Posts

- `GET /posts`: get all blog posts
- `GET /posts/:id`: get blog post by id
- `POST /posts`: create a new blog post
- `PUT /posts/:id`: update blog post by id
- `DELETE /posts/:id`: delete blog post by id

### Comments

- `GET /posts/:postId/comments`: get all comments for a blog post
- `GET /posts/:postId/comments/:id`: get comment by id for a blog post
- `POST /posts/:postId/comments`: create a new comment for a blog post
- `PUT /posts/:postId/comments/:id`: update comment by id for a blog post
- `DELETE /posts/:postId/comments/:id`: delete comment by id for a blog post

## Authors

- Liang REN - [ren02144](https://github.com/ren02144)
