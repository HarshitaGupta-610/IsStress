import requests

data = {
    "Student_Type": 0,
    "Sleep_Hours": 7,
    "Study_Hours": 5,
    "Social_Media_Hours": 3,
    "Attendance": 85,
    "Exam_Pressure": 6,
    "Family_Support": 7,
    "Month": 7
}

response = requests.post(
    "http://127.0.0.1:5000/predict",
    json=data
)

print(response.status_code)
print(response.json())