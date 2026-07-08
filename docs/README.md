# 🧠 IsStress?

> **Small questions today. Better mental health tomorrow.**

IsStress is an AI-powered Student Stress Prediction System developed to help students understand their stress levels based on their daily lifestyle and academic habits. The application uses a **Random Forest Classifier** trained on a student stress dataset and provides real-time predictions through a **Flask REST API** integrated with a **React.js** frontend.

The goal of this project is to demonstrate how Machine Learning can be combined with modern web technologies to create an interactive, user-friendly mental wellness assessment tool.

---

# 📖 Project Overview

Student stress has become one of the major concerns in today's educational environment. Academic workload, lack of sleep, excessive social media usage, exam pressure, and insufficient family support all contribute significantly to a student's mental well-being.

**IsStress** aims to provide a simple and intuitive platform where users answer a short questionnaire. Based on the provided responses, the trained Machine Learning model predicts whether the student's stress level is **Low Stress** or **High Stress**.

The project combines:

- A modern React.js frontend
- A Flask backend REST API
- A supervised Machine Learning model
- Real-time frontend-backend communication

---

# ✨ Features

- 🤖 AI-powered stress prediction
- 📝 Interactive questionnaire
- ⚡ Real-time prediction using Flask API
- 🎯 Random Forest Classification model
- 📊 Displays predicted stress level
- ✅ Form validation
- 📱 Responsive design
- 🎨 Modern healthcare-inspired user interface
- 🔗 React-Flask integration
- 💻 Simple and easy-to-use interface

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Fetch API

## Backend

- Python
- Flask
- Flask-CORS

## Machine Learning

- Scikit-learn
- Random Forest Classifier
- Pandas
- Joblib

## Version Control

- Git
- GitHub

---

# 🤖 Machine Learning Model

The prediction engine is built using a **Random Forest Classifier**, a supervised Machine Learning algorithm provided by the **Scikit-learn** library.

The model was trained using a dataset containing various academic and lifestyle-related factors affecting student stress.

### Input Features

- Student Type
- Sleep Hours
- Study Hours
- Social Media Hours
- Attendance
- Exam Pressure
- Family Support
- Current Month

After preprocessing and training, the model is saved as:

```
stress_model.pkl
```

The trained model is then loaded by the Flask backend to perform real-time predictions.

---

# 🏗 System Architecture

```
                  User
                    │
                    ▼
          React.js Frontend (UI)
                    │
         Fetch API (POST Request)
                    │
                    ▼
           Flask REST API (/predict)
                    │
                    ▼
        Random Forest Classifier Model
                    │
                    ▼
      Stress Prediction (Low / High)
                    │
                    ▼
        Display Result on Frontend
```

---

# 📂 Project Structure

```text
IsStress/
│
├── UI/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── StressForm.jsx
│   │   │   └── ResultCard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── node_modules/
│
├── backend/
│   ├── app.py
│   ├── stress_model.py
│   ├── train_model.py
│   ├── stress_model.pkl
│   └── test_api.py
│
├── dataset/
│   └── stress_dataset.csv
│
├── requirements.txt
└── README.md
```

---

# 📋 Input Parameters

The user is required to provide the following information:

| Feature | Description |
|----------|-------------|
| Student Type | School or College Student |
| Sleep Hours | Daily sleeping hours |
| Study Hours | Daily study duration |
| Social Media Hours | Daily social media usage |
| Attendance | Attendance percentage |
| Exam Pressure | Scale of 1–10 |
| Family Support | Scale of 1–10 |
| Current Month | January–December |

---

# 📡 API Endpoint

## POST `/predict`

### Request Body

```json
{
  "Student_Type": 0,
  "Sleep_Hours": 7,
  "Study_Hours": 5,
  "Social_Media_Hours": 3,
  "Attendance": 85,
  "Exam_Pressure": 6,
  "Family_Support": 7,
  "Month": 7
}
```

### Example Response

```json
{
  "prediction": "Low Stress"
}
```

or

```json
{
  "prediction": "High Stress"
}
```

---

# 🚀 Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/HarshitaGupta-610/IsStress.git
```

```bash
cd IsStress
```

---

## 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install required Python packages:

```bash
pip install flask flask-cors pandas scikit-learn joblib
```

Run the Flask server:

```bash
python app.py
```

Backend URL:

```
http://127.0.0.1:5000
```

---

## 3. Frontend Setup

Open another terminal.

Navigate to the UI folder:

```bash
cd UI
```

Install dependencies:

```bash
npm install
```

Run the React application:

```bash
npm run dev
```

Open the URL displayed by Vite (typically):

```
http://localhost:5173
```

---

# 🔄 Working Flow

1. User opens the IsStress web application.
2. User fills in the stress assessment questionnaire.
3. React validates all inputs.
4. Form data is sent to the Flask backend through a POST request.
5. Flask loads the trained Random Forest model.
6. The model predicts the student's stress level.
7. The prediction is returned to React.
8. The frontend displays the stress level to the user.

---

# 🎯 Future Enhancements

- Multi-level stress prediction (Low, Moderate, High, Severe)
- Confidence score with predictions
- Personalized wellness recommendations
- User authentication
- Prediction history
- Dashboard and analytics
- Cloud deployment
- Mobile application support
- Email reports
- Mental health resources integration

---

# 👨‍💻 Team Members

### Harshita Gupta

- Dataset preprocessing
- Machine Learning model development
- Random Forest Classifier training
- Flask backend development
- REST API implementation
- Backend integration

### Ishita Tayal

- React.js frontend development
- UI/UX design
- Form development
- API integration
- Frontend testing

---

# 📸 Screenshots

Add screenshots of:

- 🏠 Home Page
- 📝 Stress Assessment Form
- 📊 Prediction Result

---

# 📚 Learning Outcomes

This project demonstrates:

- Machine Learning model development
- Data preprocessing
- Supervised learning using Random Forest
- REST API development with Flask
- Frontend development using React
- Frontend-backend integration
- API communication using Fetch API
- Git and GitHub collaboration
- Responsive web design

---

# 📄 License

This project is developed for **academic and educational purposes only**.

---

# ⭐ Acknowledgements

We would like to thank the open-source community and the developers of **React**, **Flask**, **Scikit-learn**, **Pandas**, and **Vite** for providing the tools and libraries that made this project possible.

ye readme.md mein update krdena
