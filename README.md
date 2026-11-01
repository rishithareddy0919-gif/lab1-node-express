# BDF Lab 1 – Node.js and Express Server

**Course:** Backend Development Fundamentals  
**Deployment URL:**https://lab1-node-express.onrender.com
**Year:** II  
**Term:** II  

## Student Details

- **Name:** Rishitha Reddy
- **Year:** II Year B.Tech
- **Registration Number:** 252U1R5018
- **Course:** Backend Development Fundamentals
- **Lab:** Lab 1 – Node.js and Express Server

---

## Objective

To set up a Node.js project and develop a basic web server using the built-in HTTP module, followed by implementing the same server using Express.js. The lab demonstrates routing, handling HTTP requests and responses, returning JSON data, generating dynamic date and time, and managing unknown routes using appropriate HTTP status codes.

## Project Description

This project demonstrates the fundamentals of backend development using Node.js and Express.js.

Initially, a basic HTTP server is created using Node.js's built-in `http` module. The server is then rewritten using Express.js to simplify request handling and route management.

The application provides three main endpoints:

- `/` – Displays a welcome message.
- `/about` – Returns student information in JSON format.
- `/time` – Returns the current date and time.

An additional 404 handler manages requests to undefined routes. Middleware is also implemented to log the HTTP method, requested URL, and response status code.

## Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Backend web framework.
- **JavaScript** – Programming language.
- **npm** – Package manager.
- **Git and GitHub** – Version control and source code hosting.
- **Render** – Cloud deployment platform.
- **Visual Studio Code** – Development environment.

## Project Structure

```text
lab1-node-express/
│
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

**Note:** The `node_modules` folder is generated automatically during installation and is excluded from GitHub using `.gitignore`.

## Explanation of package.json

The `package.json` file stores project metadata, scripts, and dependencies.

Important fields:

- `name` – Name of the project.
- `version` – Current project version.
- `description` – Brief description of the project.
- `main` – Package entry-point metadata.
- `scripts` – Commands used to run the application.
- `dependencies` – External packages required by the application.
- `author` – Project author.
- `license` – Project license.

The Express.js dependency is installed using npm.

## Installation and Setup

### Prerequisites

- Node.js installed.
- npm installed.
- Visual Studio Code or another code editor.
- Git installed.

### Steps

**1. Clone the GitHub repository**

```bash
git clone https://github.com/rishithareddy0919-gif/lab1-node-express.git
```

**2. Navigate to the project directory**

```bash
cd lab1-node-express
```

**3. Install project dependencies**

```bash
npm install
```

**4. Start the application**

```bash
npm start
```

The server starts on the configured port.

## Execution

### 1. Basic Node.js HTTP Server

A basic server is initially created using the built-in HTTP module.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
```

### 2. Express.js Server

The application is then implemented using Express.js.

The Express framework simplifies server creation and provides convenient methods for defining routes and handling HTTP requests.

## API Endpoints

| Method | Endpoint | Description | Expected Status |
|---|---|---|---|
| GET | `/` | Returns the welcome message | 200 OK |
| GET | `/about` | Returns name and section in JSON | 200 OK |
| GET | `/time` | Returns current date and time | 200 OK |
| GET | `/test` | Handles unknown routes | 404 Not Found |

### Endpoint Responses

**GET /**

```text
Welcome to Node.js and Express Server!
```

**GET /about**

```json
{
    "name": "Rishitha",
    "section": "Aurora"
}
```

**GET /time**

```json
{
    "currentDateTime": "Current date and time"
}
```

**GET /test**

```text
404 - Page Not Found
```

## Middleware and Status Code Logging

Middleware is implemented to monitor incoming requests and log the corresponding HTTP response status codes.

```javascript
app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(
            `${req.method} ${req.originalUrl} - ${res.statusCode}`
        );
    });

    next();
});
```

Example terminal output:

```text
GET / - 200
GET /about - 200
GET /time - 200
GET /test - 404
```

## Deployment

The application is deployed using Render.

**Live Application:**

https://lab1-node-express.onrender.com

**GitHub Repository:**

https://github.com/rishithareddy0919-gif/lab1-node-express

The application uses the environment-provided port through `process.env.PORT` to support cloud deployment.

## Screenshots

The following screenshots demonstrate the working application.

1. **Home Endpoint – GET /**
   - Displays the welcome message.

2. **About Endpoint – GET /about**
   - Displays student details in JSON format.

3. **Time Endpoint – GET /time**
   - Displays the current date and time.

4. **Unknown Route – 404 Response**
   - Displays the Page Not Found message.

5. **Terminal Output**
   - Shows HTTP methods, requested routes, and status codes.

6. **Deployment**
   - Shows the successful deployment on Render.

## Testing

The application was tested using the browser by accessing each endpoint.

Testing results:

| Test Case | Expected Result | Status |
|---|---|---|
| Open `/` | Welcome message | Passed |
| Open `/about` | Student JSON response | Passed |
| Open `/time` | Current date and time | Passed |
| Open `/test` | 404 error message | Passed |
| Check terminal logs | Correct HTTP status codes | Passed |

All implemented routes were tested successfully in the local development environment and the application was deployed successfully on Render.

## Important Notes

- The `node_modules` directory is excluded from version control.
- The `.env` file must never be committed to GitHub.
- Appropriate HTTP status codes are returned for all routes.
- The application uses Express.js for route handling.
- The server supports deployment using the port provided by the hosting platform.

## Conclusion

This lab provided practical experience in building backend applications using Node.js and Express.js. It covered project initialization, package management, HTTP server creation, routing, middleware, JSON responses, status code handling, and cloud deployment.

The application was successfully tested and deployed using Render.

---

**End of Lab 1 – Node.js and Express Server**