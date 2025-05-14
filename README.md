# birthday-event-planner-react-vite-springboot

A modern and dynamic **Birthday Event Planner** application designed to help users plan, organize, and manage birthday events. This project integrates a **React** frontend powered by **Vite** and a **Spring Boot** backend to deliver a seamless and efficient experience. It allows users to create, view, and manage birthday events with all necessary details, like invitations, guest lists, themes, and reminders.

## Technologies Used

- **Frontend**: 
  - React (with **Vite** as the build tool for fast development)
- **Backend**: 
  - Spring Boot (RESTful API)
- **Database**: 
  - H2 (in-memory for development, can be replaced with any SQL-based DB)
- **Authentication**: 
  - JWT (JSON Web Tokens) for secure user login
- **Styling**: 
  - Tailwind CSS or Material-UI for UI components
- **State Management**: 
  - React Context or Redux (if needed)
- **API Communication**: 
  - Axios for HTTP requests

## Features

- **Create and Manage Birthday Events**: 
  - Users can create events with details such as **date**, **time**, **venue**, and **theme**.
  
- **Guest List**: 
  - Users can add, edit, and remove guests for their birthday events.
  
- **Event Reminders**: 
  - Get notifications about upcoming events and deadlines.
  
- **Event Invitations**: 
  - Send invitations to guests via **email** or other communication methods (integration with email services possible).
  
- **User Authentication**: 
  - Login and registration functionality with **JWT-based authentication** for secure access.
  
- **Responsive Design**: 
  - Mobile-friendly UI optimized for **all screen sizes**.

## 📁 Project Structure

```
├── backend (Spring Boot, Spring Security, Java, JWT)
│   └── BIRTHDAY/
│       ├── .mvn/
│       ├── .vscode/
│       ├── src/
│       │   └── main/
│       │       ├── java/
│       │       │   └── com/
│       │       │       └── java/
│       │       │           └── birthday/
│       │       │               ├── config/
│       │       │               │   ├── ApplicationConfig.java
│       │       │               │   ├── JwtAuthenticationFilter.java
│       │       │               │   ├── SecurityConfig.java
│       │       │               │   └── SwaggerConfig.java
│       │       │               ├── controller/
│       │       │               │   ├── AddonController.java
│       │       │               │   ├── AuthenticationController.java
│       │       │               │   ├── EventController.java
│       │       │               │   ├── FeedbackController.java
│       │       │               │   ├── FoodController.java
│       │       │               │   ├── PaymentController.java
│       │       │               │   ├── ThemeController.java
│       │       │               │   └── UserController.java
│       │       │               ├── dto/
│       │       │               │   ├── request/
│       │       │               │   │   ├── ForgotPasswordRequest.java
│       │       │               │   │   ├── LoginRequest.java
│       │       │               │   │   └── RegisterRequest.java
│       │       │               │   └── response/
│       │       │               │       ├── BasicResponse.java
│       │       │               │       └── LoginResponse.java
│       │       │               ├── Enum/
│       │       │               │   ├── Permission.java
│       │       │               │   ├── Role.java
│       │       │               │   └── TokenType.java
│       │       │               ├── model/
│       │       │               │   ├── Addon.java
│       │       │               │   ├── Event.java
│       │       │               │   ├── Feedback.java
│       │       │               │   ├── Food.java
│       │       │               │   ├── Payment.java
│       │       │               │   ├── Theme.java
│       │       │               │   ├── Token.java
│       │       │               │   └── User.java
│       │       │               ├── repository/
│       │       │               │   ├── AddonRepository.java
│       │       │               │   ├── EventRepository.java
│       │       │               │   ├── FeedbackRepository.java
│       │       │               │   ├── FoodRepository.java
│       │       │               │   ├── PaymentRepository.java
│       │       │               │   ├── ThemeRepository.java
│       │       │               │   ├── TokenRepository.java
│       │       │               │   └── UserRepository.java
│       │       │               ├── service/
│       │       │               │   ├── impl/
│       │       │               │   │   └── AuthenticationServiceImpl.java
│       │       │               │   ├── AddonService.java
│       │       │               │   ├── AuthenticationService.java
│       │       │               │   ├── EventService.java
│       │       │               │   ├── FeedbackService.java
│       │       │               │   ├── FoodService.java
│       │       │               │   ├── PaymentService.java
│       │       │               │   ├── ThemeService.java
│       │       │               │   └── UserService.java
│       │       │               └── utils/
│       │       │                   ├── JwtUtils.java
│       │       │                   └── LogoutUtils.java
│       │       ├── resources/
│       │       │   ├── META-INF/
│       │       │   │   └── additional-spring-configuration-metadata.json
│       │       │   └── application.properties
│       │       └── BirthdayApplication.java
│
├── frontend (React with Vite)
│   ├── node_modules/
│   ├── src/
│   │   ├── assets/
│   │   ├── Admin/
│   │   │   ├── AdminHome.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminUserDetails.jsx
│   │   │   ├── EventList.jsx
│   │   │   ├── EventView.jsx
│   │   │   └── Feedback.jsx
│   │   ├── Auth/
│   │   │   ├── Forgot.jsx
│   │   │   ├── Signin.jsx
│   │   │   └── Signup.jsx
│   │   ├── Components/
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── LazySuspense.jsx
│   │   │   └── CSS/
│   │   │       ├── AboutUs.css
│   │   │       ├── AdminHome.css
│   │   │       ├── AdminLogin.css
│   │   │       ├── ContactUs.css
│   │   │       ├── EventDisplay.css
│   │   │       ├── EventList.css
│   │   │       ├── EventRegistrationForm.css
│   │   │       ├── EventViewForm.css
│   │   │       ├── Faq.css
│   │   │       ├── FoodItems.css
│   │   │       ├── Footer.css
│   │   │       ├── Forgot.css
│   │   │       ├── Home.css
│   │   │       ├── Navbar.css
│   │   │       ├── ProfileDashboard.css
│   │   │       ├── Services.css
│   │   │       ├── Signin.css
│   │   │       ├── Signup.css
│   │   │       ├── Stats.css
│   │   │       ├── StoryPage.css
│   │   │       ├── Video.css
│   │   │       ├── WhatWeDo.css
│   │   │       └── WhyUs.css
│   │   ├── Images/
│   │   │   └── gify.gif
│   │   ├── Pages/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Contactus.jsx
│   │   │   ├── EventDisplay.jsx
│   │   │   ├── EventList.jsx
│   │   │   ├── EventRegistrationForm.jsx
│   │   │   ├── EventViewForm.jsx
│   │   │   ├── F.jsx
│   │   │   ├── Faq.jsx
│   │   │   ├── FoodItems.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Privacy.jsx
│   │   │   ├── ProfileDashboard.jsx
│   │   │   ├── RazorPay.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Terms.jsx
│   │   │   ├── WhatWeDo.jsx
│   │   │   └── WhyUs.jsx
│   │   ├── redux/
│   │   │   ├── store.jsx
│   │   │   └── UserSlice.jsx
│   │   ├── User/
│   │   │   └── UserProfile.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
```

