# Flight Status Application
This project consists of a frontend React application and a backend Spring Boot API. The application provides real-time flight status updates and allows users to subscribe to email notifications for specific flight status changes.

# Frontend (React Application)  
The React application displays all flight statuses on the homepage. Users can subscribe to receive updates on flight status changes via email.

# Features
Homepage: Displays all flights and their statuses.
Subscription: Users can enter their email addresses to subscribe to updates for specific flights. A confirmation email is sent upon subscription, and users will receive notifications for any status changes related to the subscribed flight.
Backend (Spring Boot Flights API)
The backend is a Spring Boot application that provides RESTful APIs for managing flight data and handling user subscriptions. It interacts with a PostgreSQL database to store flight and user information.

![image](https://github.com/user-attachments/assets/9d141502-3db0-4525-9854-5bc7c7cc0df9)

![image](https://github.com/user-attachments/assets/f7305575-281e-44f4-b28a-0d39c45bcd32)

![image](https://github.com/user-attachments/assets/0c9d3e78-2bc5-4bac-9943-5e6cad402f57)

Email Notifications: 

![image](https://github.com/user-attachments/assets/6c4c57df-2e98-4e9f-b7bb-380f507c4815)

![image](https://github.com/user-attachments/assets/54ed5ec9-e059-45b5-819f-b2164217c8e9)


# Important Endpoints
Get All Flights
# Endpoint: GET /
Description: Retrieves all flight data from the PostgreSQL database.
![image](https://github.com/user-attachments/assets/22499066-3f28-4c1a-a503-c500ec169830)

Create a New Flight

# Endpoint: POST /
Description: Creates a new flight record in the flights table of the PostgreSQL database.
Subscribe to Flight Updates

![image](https://github.com/user-attachments/assets/ee59e559-cd65-4857-a2cf-0bc1f753c8c7)


# Endpoint: POST /subscribe
Description: Creates a new user subscription for flight status changes. Requires the flight number in the user data.
![image](https://github.com/user-attachments/assets/e3c4bb67-b081-4ddf-b701-477320a54291)

Other CRUD Operations

Delete Flight: Deletes a flight record by its ID or number.
Update Flight: Updates a flight record by its ID or number.
### Email Notification Service
The application includes an email service implemented using Java Mail dependency and JavaMailSender class. Users subscribed to flight updates receive email notifications when there are changes in the flight status or gate information.

### Update Notification Logic
When a flight is updated, the system checks for changes in the status or gate. If there are any changes, all users subscribed to that flight number are notified via email.
![image](https://github.com/user-attachments/assets/b6df56b0-1070-4851-9548-4d950a2f2d0b)

# Backend Tech Stack
Spring Boot: Framework for building the backend API.
PostgreSQL: Database for storing flight and user data.

