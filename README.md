# Banking Application

A full-stack banking application with Spring Boot backend and Angular frontend, featuring automated CI/CD pipeline with Jenkins.

## Architecture
- **Backend**: Spring Boot 3.3.5 with Java 17
- **Frontend**: Angular 18 with Bootstrap & Tailwind CSS
- **Database**: MySQL with JPA/Hibernate
- **CI/CD**: Jenkins on AWS EC2

## Features
- Client management
- Account management (Courant/Saving accounts)
- Banking operations (Deposit/Withdraw/Transfer)
- Employee and group management
- Transaction history
- RESTful API

## Project Structure
```
Bank/
├── Banking-app/          # Spring Boot backend
├── frontend/             # Angular frontend
├── banking.sql           # Database schema
├── Jenkinsfile          # CI/CD pipeline
└── README.md
```

## Quick Start

### Backend
```bash
cd Banking-app
mvn clean package
java -jar target/*.jar
```

### Frontend
```bash
cd frontend
npm install
npm start
```

### Database
- Import `banking.sql` to MySQL
- Update `application.properties` with your DB credentials

## CI/CD Pipeline
- **Jenkins URL**: http://*************:8080
- **Pipeline**: Automated build, test, and deployment
- **Webhook**: Auto-triggers on GitHub push

## API Endpoints
- `/clients` - Client management
- `/accounts` - Account operations
- `/operations` - Transaction history
- `/employees` - Employee management
- `/groupes` - Group management

## Technologies
- Spring Boot, Spring Data JPA, Spring Web
- Angular, TypeScript, Bootstrap, Tailwind
- MySQL, Maven, Jenkins, AWS EC2....