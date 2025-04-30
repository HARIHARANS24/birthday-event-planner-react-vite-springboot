Birthday Event Planner
A modern and dynamic Birthday Event Planner application designed to help users plan, organize, and manage birthday events. This project integrates a React frontend powered by Vite and a Spring Boot backend to deliver a seamless and efficient experience. It allows users to create, view, and manage birthday events with all necessary details, like invitations, guest lists, themes, and reminders.

Technologies Used
Frontend: React (with Vite as the build tool for fast development)

Backend: Spring Boot (RESTful API)

Database: H2 (in-memory for development, can be replaced with any SQL-based DB)

Authentication: JWT (JSON Web Tokens) for secure user login

Styling: Tailwind CSS or Material-UI for UI components

State Management: React Context or Redux (if needed)

API Communication: Axios for HTTP requests

Features
Create and manage birthday events: Users can create events with details like date, time, venue, and theme.

Guest List: Users can add, edit, and remove guests for their birthday events.

Event Reminders: Get notified about upcoming events.

Event Invitations: Send invitations to guests via email or other methods (potential integration with email services).

User Authentication: Login and registration functionality with JWT-based authentication.

Responsive Design: Mobile-friendly UI optimized for all screen sizes.

Project Structure
scss
Copy
Edit
├── backend (Spring Boot)
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── birthdayeventplanner
│   │   │   │               ├── controller
│   │   │   │               ├── model
│   │   │   │               ├── repository
│   │   │   │               ├── service
│   │   │   │               └── security
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── data.sql (optional for seeding DB)
├── frontend (React with Vite)
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── EventForm.js
│   │   │   ├── GuestList.js
│   │   │   └── ReminderCard.js
│   │   ├── pages
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── services
│   │   │   └── apiService.js
│   │   ├── App.js
│   │   └── main.js
│   └── vite.config.js
├── .gitignore
├── README.md
└── package.json (frontend)
Setup
Prerequisites
Java 17+ (for Spring Boot backend)

Node.js (v16 or higher) (for React frontend)

Maven or Gradle (for building the Spring Boot project)

Vite (for bundling the React application)

Backend Setup (Spring Boot)
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/birthday-event-planner.git
cd birthday-event-planner/backend
Install dependencies:

If using Maven:

bash
Copy
Edit
mvn clean install
If using Gradle:

bash
Copy
Edit
gradle build
Configure your application:

Open src/main/resources/application.properties and adjust any database, email, or environment-specific configurations as needed.

Run the Spring Boot application:

bash
Copy
Edit
mvn spring-boot:run   # Using Maven
# or
gradle bootRun        # Using Gradle
The backend will now be running on http://localhost:8080.

Frontend Setup (React with Vite)
Navigate to the frontend directory:

bash
Copy
Edit
cd ../frontend
Install frontend dependencies:

bash
Copy
Edit
npm install
Configure the API base URL:

Update the apiService.js or environment configuration file to point to the backend URL, which should be http://localhost:8080 by default.

Start the React application:

bash
Copy
Edit
npm run dev
The frontend will now be running on http://localhost:3000.

Environment Variables
You may need to configure the following environment variables for both frontend and backend:

Frontend:

VITE_API_URL: The URL of your backend API (default: http://localhost:8080)

Backend:

SPRING_DATASOURCE_URL: URL for the database connection.

SPRING_DATASOURCE_USERNAME: Username for the database.

SPRING_DATASOURCE_PASSWORD: Password for the database.

You can also configure SMTP settings in application.properties if you want to implement email invitations.

API Endpoints
Authentication
POST /api/auth/login: Login with username and password, returns JWT token.

POST /api/auth/register: Register a new user.

Events
GET /api/events: Get all the events created by the logged-in user.

POST /api/events: Create a new birthday event.

PUT /api/events/{id}: Update an existing event.

DELETE /api/events/{id}: Delete an event.

Guests
GET /api/events/{eventId}/guests: Get the guest list for an event.

POST /api/events/{eventId}/guests: Add a new guest to an event.

DELETE /api/events/{eventId}/guests/{guestId}: Remove a guest from an event.

Reminders
GET /api/events/{eventId}/reminders: Get reminders for a particular event.

POST /api/events/{eventId}/reminders: Add a reminder for an event.

Contributing
Fork the repository.

Create a new branch for your feature or bugfix (git checkout -b feature/your-feature-name).

Make changes and commit them (git commit -am 'Add new feature').

Push to the branch (git push origin feature/your-feature-name).

Create a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

