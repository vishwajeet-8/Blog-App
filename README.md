# Blog App

A full-stack blog application built with React, Node.js, MySQL, and Cloudinary. This application supports CRUD operations with JWT token authentication, ensuring that users can only delete, create, and update their own posts.

## Features

- User authentication with JWT tokens
- Create, read, update, and delete blog posts
- Users can only modify their own posts
- Image upload and storage using Cloudinary

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL
- **File Storage**: Cloudinary

## Installation

Follow these steps to clone and set up the project:

### Prerequisites

- Node.js and npm installed on your machine
- MySQL database set up
- Cloudinary account for file storage

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/blog-app.git

# Navigate to the project directories
cd blog-app/api
yarn install

cd blog-app/client
yarn install
