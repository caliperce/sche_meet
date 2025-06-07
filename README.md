# Sche-Meet: Meeting Scheduler

Sche-Meet is a web application that helps users schedule meetings efficiently by managing time slots and sending invitations to participants.

## 🚀 Features

- Create meeting sessions with multiple participants
- Handle different time zones
- Generate short links for meeting invitations
- Simple and intuitive interface

## 🛠️ Technologies Used

- Node.js
- Express.js
- Axios for API calls
- date-fns for date manipulation
- dotenv for environment variables

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd sche_meet
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```
# Add your environment variables here
```

## 🏃‍♂️ Running the Application

1. Start the server:
```bash
npm start
```

2. The application will be available at `http://localhost:3000`

## 🌐 API Endpoints

### Create a Session
- **POST** `/create-session`
- **Request Body Example:**
```json
[
  {
    "emails": "email1@example.com, email2@example.com",
    "time": "10:00 AM",
    "timezone": "UTC",
    "date": "2024-03-20",
    "name": "Team Meeting"
  }
]
```
- **Response:**
```json
{
  "Session created": true,
  "details": {
    "emails": ["email1@example.com", "email2@example.com"],
    "time": "10:00 AM",
    "timezone": "UTC",
    "date": "2024-03-20",
    "name": "Team Meeting"
  },
  "shortLink": "generated-short-link"
}
```

## 🚀 Deployment

This application is configured for deployment on Heroku. To deploy:

1. Install Heroku CLI:
```bash
brew install heroku/brew/heroku
```

2. Login to Heroku:
```bash
heroku login
```

3. Create a new Heroku app:
```bash
heroku create your-app-name
```

4. Deploy to Heroku:
```bash
git add .
git commit -m "Ready for deployment"
git push heroku main
```

5. Set up environment variables in Heroku:
```bash
heroku config:set VARIABLE_NAME=value
```

## 📁 Project Structure

```
sche_meet/
├── server/
│   ├── app.js
│   └── sesh-create.js
├── .api/
│   └── apis/
├── package.json
├── Procfile
└── .env
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:
```
# Add your environment variables here
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Aishwarya

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community 