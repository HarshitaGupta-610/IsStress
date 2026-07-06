import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load dataset
df = pd.read_csv("../dataset/stress_dataset.csv")

# Fill missing values
df["Student_Type"] = df["Student_Type"].fillna(df["Student_Type"].mode()[0])

numeric_columns = [
    "Sleep_Hours",
    "Study_Hours",
    "Social_Media_Hours",
    "Attendance",
    "Exam_Pressure",
    "Family_Support",
    "Month"
]

for col in numeric_columns:
    df[col] = df[col].fillna(df[col].mean())

# Convert text column to numbers
encoder = LabelEncoder()
df["Student_Type"] = encoder.fit_transform(df["Student_Type"])

# Features and target
X = df.drop("Stress_Level", axis=1)
y = df["Stress_Level"]

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

# Train Random Forest model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Display accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

import joblib

# Save the trained model
joblib.dump(model, "stress_model.pkl")

print("Model saved successfully as stress_model.pkl")