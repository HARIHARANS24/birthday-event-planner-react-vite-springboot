# 🎂 Birthday Event Planner

A modern and dynamic **Birthday Event Planner** application designed to help users plan, organize, and manage birthday events. This project integrates a **React** frontend powered by **Vite** and a **Spring Boot** backend to deliver a seamless and efficient experience.

## 🚀 Features

- **Event Management** 📅
  - Create and manage birthday events 
  - Set event details (date, time, venue, theme)
  - Track event status and progress   

- **Guest Management** 👥 
  - Add, edit, and remove guests  
  - Track RSVPs
  - Manage guest lists  

- **Theme & Decorations** 🎨  
  - Browse and select event themes 
  - Customize decorations 
  - Preview theme options 
 
- **Food & Catering** 🍽️
  - Select food packages
  - Customize menu options
  - Special dietary requirements handling

- **Payment Integration** 💳
  - Secure payment processing
  - Multiple payment options
  - Payment tracking and history

- **User Dashboard** 📊
  - View upcoming events
  - Track event budgets
  - Manage personal information

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- Material-UI

### Backend
- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL
- JWT Authentication
- Maven

## 📁 Project Structure

```
📦 birthday-event-management
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 assets
│   │   │   ├── 📂 Admin
│   │   │   │   ├── 📄 AdminHome.jsx
│   │   │   │   ├── 📄 AdminLogin.jsx
│   │   │   │   ├── 📄 AdminUserDetails.jsx
│   │   │   │   ├── 📄 EventList.jsx
│   │   │   │   ├── 📄 EventView.jsx
│   │   │   │   └── 📄 Feedback.jsx
│   │   │   ├── 📂 Auth
│   │   │   │   ├── 📄 Forgot.jsx
│   │   │   │   ├── 📄 Signin.jsx
│   │   │   │   └── 📄 Signup.jsx
│   │   │   ├── 📂 Components
│   │   │   │   ├── 📂 CSS
│   │   │   │   │   ├── 📄 AboutUs.css
│   │   │   │   │   ├── 📄 AdminHome.css
│   │   │   │   │   ├── 📄 AdminLogin.css
│   │   │   │   │   ├── 📄 ContactUs.css
│   │   │   │   │   ├── 📄 EventDisplay.css
│   │   │   │   │   ├── 📄 EventList.css
│   │   │   │   │   ├── 📄 EventRegistrationForm.css
│   │   │   │   │   ├── 📄 EventViewForm.css
│   │   │   │   │   ├── 📄 Faq.css
│   │   │   │   │   ├── 📄 FoodItems.css
│   │   │   │   │   ├── 📄 Footer.css
│   │   │   │   │   ├── 📄 Forgot.css
│   │   │   │   │   ├── 📄 Home.css
│   │   │   │   │   ├── 📄 Navbar.css
│   │   │   │   │   ├── 📄 ProfileDashboard.css
│   │   │   │   │   ├── 📄 Services.css
│   │   │   │   │   ├── 📄 Signin.css
│   │   │   │   │   ├── 📄 Signup.css
│   │   │   │   │   ├── 📄 Stats.css
│   │   │   │   │   ├── 📄 StoryPage.css
│   │   │   │   │   ├── 📄 Video.css
│   │   │   │   │   ├── 📄 WhatWeDo.css
│   │   │   │   │   └── 📄 WhyUs.css
│   │   │   │   ├── 📄 ErrorBoundary.jsx
│   │   │   │   └── 📄 LazySuspense.jsx
│   │   │   ├── 📂 Images
│   │   │   │   └── 📄 gify.gif
│   │   │   ├── 📂 Pages
│   │   │   │   ├── 📄 AboutUs.jsx
│   │   │   │   ├── 📄 Contactus.jsx
│   │   │   │   ├── 📄 EventDisplay.jsx
│   │   │   │   ├── 📄 EventList.jsx
│   │   │   │   ├── 📄 EventRegistrationForm.jsx
│   │   │   │   ├── 📄 EventViewForm.jsx
│   │   │   │   ├── 📄 F.jsx
│   │   │   │   ├── 📄 Faq.jsx
│   │   │   │   ├── 📄 FoodItems.jsx
│   │   │   │   ├── 📄 Footer.jsx
│   │   │   │   ├── 📄 Gallery.jsx
│   │   │   │   ├── 📄 Home.jsx
│   │   │   │   ├── 📄 Navbar.jsx
│   │   │   │   ├── 📄 Privacy.jsx
│   │   │   │   ├── 📄 ProfileDashboard.jsx
│   │   │   │   ├── �� RazorPay.jsx
│   │   │   │   ├── 📄 Services.jsx
│   │   │   │   ├── 📄 Terms.jsx
│   │   │   │   ├── 📄 WhatWeDo.jsx
│   │   │   │   └── 📄 WhyUs.jsx
│   │   │   ├── 📂 redux
│   │   │   │   ├── 📄 store.jsx
│   │   │   │   └── 📄 UserSlice.jsx
│   │   │   └── 📂 User
│   │   │       └── 📄 UserProfile.jsx
│   │   ├── 📄 App.css
│   │   ├── 📄 App.jsx
│   │   ├── 📄 index.css
│   │   └── 📄 main.jsx
│   ├── 📄 .gitignore
│   ├── 📄 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   └── 📄 vite.config.js
│
├── 📂 backend
│   ├── 📂 .mvn
│   ├── 📂 .vscode
│   ├── 📂 src
│   │   ├── 📂 main
│   │   │   ├── 📂 java
│   │   │   │   └── 📂 com
│   │   │   │       └── 📂 birthday
│   │   │   │           ├── 📂 config
│   │   │   │           │   ├── 📄 ApplicationConfig.java
│   │   │   │           │   ├── 📄 JwtAuthenticationFilter.java
│   │   │   │           │   ├── 📄 SecurityConfig.java
│   │   │   │           │   └── 📄 SwaggerConfig.java
│   │   │   │           ├── 📂 controller
│   │   │   │           │   ├── 📄 AddonController.java
│   │   │   │           │   ├── 📄 AuthenticationController.java
│   │   │   │           │   ├── 📄 EventController.java
│   │   │   │           │   ├── 📄 FeedbackController.java
│   │   │   │           │   ├── 📄 FoodController.java
│   │   │   │           │   ├── 📄 PaymentController.java
│   │   │   │           │   ├── 📄 ThemeController.java
│   │   │   │           │   └── 📄 UserController.java
│   │   │   │           ├── 📂 dto
│   │   │   │           │   ├── 📂 request
│   │   │   │           │   │   ├── 📄 ForgotPasswordRequest.java
│   │   │   │           │   │   ├── 📄 LoginRequest.java
│   │   │   │           │   │   └── 📄 RegisterRequest.java
│   │   │   │           │   └── 📂 response
│   │   │   │           │       ├── 📄 BasicResponse.java
│   │   │   │           │       └── 📄 LoginResponse.java
│   │   │   │           ├── 📂 model
│   │   │   │           │   ├── 📄 Addon.java
│   │   │   │           │   ├── 📄 Event.java
│   │   │   │           │   ├── 📄 Feedback.java
│   │   │   │           │   ├── 📄 Food.java
│   │   │   │           │   ├── 📄 Payment.java
│   │   │   │           │   ├── 📄 Theme.java
│   │   │   │           │   ├── 📄 Token.java
│   │   │   │           │   └── 📄 User.java
│   │   │   │           ├── 📂 repository
│   │   │   │           │   ├── 📄 AddonRepository.java
│   │   │   │           │   ├── 📄 EventRepository.java
│   │   │   │           │   ├── 📄 FeedbackRepository.java
│   │   │   │           │   ├── 📄 FoodRepository.java
│   │   │   │           │   ├── 📄 PaymentRepository.java
│   │   │   │           │   ├── 📄 ThemeRepository.java
│   │   │   │           │   ├── 📄 TokenRepository.java
│   │   │   │           │   └── 📄 UserRepository.java
│   │   │   │           ├── 📂 service
│   │   │   │           │   ├── 📂 impl
│   │   │   │           │   │   └── 📄 AuthenticationServiceImpl.java
│   │   │   │           │   ├── 📄 AddonService.java
│   │   │   │           │   ├── 📄 AuthenticationService.java
│   │   │   │           │   ├── 📄 EventService.java
│   │   │   │           │   ├── 📄 FeedbackService.java
│   │   │   │           │   ├── 📄 FoodService.java
│   │   │   │           │   ├── 📄 PaymentService.java
│   │   │   │           │   ├── 📄 ThemeService.java
│   │   │   │           │   └── 📄 UserService.java
│   │   │   │           └── 📂 util
│   │   │   │               ├── 📄 JwtUtils.java
│   │   │   │               └── 📄 LogoutUtils.java
│   │   │   └── 📂 resources
│   │   │       └── 📄 application.properties
│   │   └── 📂 test
│   ├── 📄 pom.xml
│   ├── 📄 mvnw
│   ├── 📄 mvnw.cmd
│   └── 📄 .gitignore
│
└── 📄 README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Java 17 or higher
- MySQL
- Maven

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

## 🔧 Configuration

### Frontend Configuration
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8080
```

### Backend Configuration
Update `application.properties` in `backend/src/main/resources`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/birthday_planner
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## 🤝 Contributing

We welcome contributions to the Birthday Event Planner! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Hariharan S** - *Initial work* - [HARIHARANS24](https://github.com/HARIHARANS24)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for their invaluable tools and libraries 
