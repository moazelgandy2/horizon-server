# 🎉 Customer Transactions Dashboard Backend 🚀

## Project Description 📊

This is the backend for the Customer Transactions Dashboard project. It uses Express.js with TypeScript, Prisma ORM, and MySQL. The backend provides APIs to fetch customer and transaction data. Additionally, it includes a seeding script to generate random data for development purposes.

## Technologies Used 💻

- ⚡ **Express JS with TypeScript**: For building the backend server.
- 🔄 **Prisma ORM**: For database management.
- 🐬 **MySQL**: As the relational database.
- 🔀 **Faker.js**: For generating random data.

## Getting Started 🚀

### Prerequisites 📋

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- MySQL

### Installation 🛠️

1. Clone the repository:
   ```sh
   git clone https://github.com/moazelgandy2/route-task-server
   ```
2. Navigate to the project directory:
   ```sh
    cd route-task-server
   ```
3. Install the dependencies:
   ```sh
   npm install
   #or
    yarn install
   ```
4. Setup DataBase connection:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     DATABASE_URL="mysql://<username>:<password>@<host>:<port>/<database>"
     ```
5. Generate Prisma client:
   ```sh
   npx prisma generate
   ```
6. Run the seeding script:
   ```sh
   ts-node ./seed.ts
   ```

### Running the Server 🚀

1. Start the server:
   ```sh
   npm run dev
   #or
   yarn dev
   ```
2. The server will start on `http://localhost:3000`.

## API Endpoints 📡

- **GET /customers**: Fetch all customers.
- **GET /transactions**: Fetch all transactions.

## Project Structure 📁

The project structure is organized as follows:

```sh
src/
|-- prisma/         # Prisma client setup
|-- dis/            # TypeScript build output
|-- seed.ts         # Seed script for generating random data
|-- index.ts        # Main server file
```

### Contact 📬

If you have any questions or suggestions, please open an issue on GitHub or contact me directly at **contact@moazelgandy.tech**
