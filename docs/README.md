# 🧠 IsStress?

IsStress is an AI-powered Student Stress Prediction System developed to help students understand their stress levels based on their daily lifestyle and academic habits. The application uses a **Random Forest Classifier** trained on a student stress dataset and provides real-time predictions through a **Flask REST API** integrated with a **React.js** frontend.

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


# 👨‍💻 Team Members

### [Harshita Gupta](https://github.com/HarshitaGupta-610)
- Dataset preprocessing
- Machine Learning model development
- Random Forest Classifier training
- Flask backend development
- REST API implementation
- Backend integration

### [Ishita Tayal](https://github.com/ishitatayal85)
- React.js frontend development
- UI/UX design
- Form development
- API integration
- Frontend testing




