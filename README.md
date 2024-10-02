# 📊 Voting WebApp / Application

An under-development **Full Stack Voting WebApp / Application** designed for university students to vote for their favorite candidates in a seamless and secure manner. Built using the latest web technologies, this platform ensures a smooth user experience for both voters and administrators, with powerful features and robust backend functionality.

## 🔥 Features

- **User Registration & Authentication**  
  Users can sign up, log in, and securely authenticate using JWT and Passport.
- **Candidate Profiles**  
  Candidates can create detailed profiles and upload profile pictures to represent their campaign.

- **Voting System**  
  Registered users can cast a vote for their favorite candidates, and each user can only vote once.

- **Real-Time Voting Results**  
  Users can view real-time voting results, updated live as votes are cast.

- **Admin Panel**  
  Admins have full control over the candidate database, with the ability to add, delete, or update candidate information.

- **Result Management**  
  Admins have exclusive access to the final voting results, allowing them to monitor voting trends and export results for reporting.

## ⚙️ Tech Stack

| **Technology**     | **Description**                                                                    |
| ------------------ | ---------------------------------------------------------------------------------- |
| **NestJS**         | Backend framework providing structure and efficiency.                              |
| **Next.js**        | Frontend framework for server-rendered React applications.                         |
| **PostgreSQL**     | Powerful, open-source relational database for data storage.                        |
| **Prisma**         | Modern ORM for seamless database interaction with PostgreSQL.                      |
| **Typescript**     | Strongly-typed programming language, enhancing code quality and reliability.       |
| **JWT & Passport** | Secure user authentication and authorization with JSON Web Tokens and Passport.js. |
| **Docker**         | Containerized deployment for consistent environments and scalability.              |
| **TailwindCSS**    | Utility-first CSS framework for building responsive UI designs with ease.          |
| **shadcn-ui**      | Beautiful UI components powered by TailwindCSS, ensuring a sleek design.           |

## 🚀 Key Functionalities

### User Side

- **Authentication**: Users can securely register, log in, and authenticate using JWT tokens.
- **Profile Setup**: Candidates can create profiles and upload high-quality profile images.
- **Voting**: Simple and intuitive voting system for students to vote for their favorite candidates.
- **Live Voting Results**: Users can view dynamic, real-time results that reflect the current voting status.

### Admin Side

- **Candidate Management**: Admins have complete control over managing candidate data (Add, Update, Delete).
- **Result Monitoring**: Admins can view live voting results and export them for further analysis.
- **Secure Admin Access**: Admin access is restricted to authorized users only for managing platform operations.

## 💻 Development

### Prerequisites

- **Node.js** >= 14.x
- **Yarn** (package manager)
- **Docker** (for containerization)
- **PostgreSQL** (installed locally or via Docker)
- **Prisma CLI** (for database schema management)

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/voting-webapp.git
   cd voting-webapp
   ```

2. **Set up Environment Variables Create** Create a .env file and configure the necessary environment variables for PostgreSQL, JWT, etc.
   Example .env:

   ```bash
    DATABASE_URL=postgresql://username:password@localhost:5432/voting_db
    JWT_SECRET=your_jwt_secret
   ```

3. **Install Dependencies**

   ```bash
     yarn install
   ```

4. **Set up the Database with Prisma**

   ```bash
      yarn prisma migrate dev --name init
      yarn prisma db seed
   ```

5. **Start the Development Server**

- Backend (NestJS):

  ```bash
     yarn start:dev
  ```

- Frontend (Next.js):

  ```bash
   cd frontend
   yarn dev
  ```

  6. **Docker Support** The project supports Docker for seamless development and deployment. To run the app with Docker:

  ```bash
     docker-compose up --build
  ```

### Running Tests

- Unit Tests (NestJS)

```bash
     yarn test
```

- End-to-End Tests (NestJS)

```bash
     yarn test:e2e
```

### 🛠️ Tools & Integrations

- #### Postman

  For testing the API endpoints during development.

- #### Prettier & ESLint
  Code formatting and linting to maintain clean and consistent code.

### 👨🏽‍💻 Contributing

We welcome contributions! Please follow the standard Git workflow:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## ✍️ Authors & Contributors

- **Abdikafi Isse Isak** - [miirshe](https://github.com/miirshe)
- **Hanad Mohamed Dahir** - [hanad124](https://github.com/hanad124)
