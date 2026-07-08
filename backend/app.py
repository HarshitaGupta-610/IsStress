from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
from pathlib import Path

# Create Flask app
app = Flask(__name__)
CORS(app)

# Load the trained model
BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "stress_model.pkl"

if not MODEL_PATH.exists():
    raise FileNotFoundError(f"Model file not found: {MODEL_PATH}")

model = joblib.load(MODEL_PATH)


@app.route("/")
def home():
    return "IsStress Backend Running Successfully!"


@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Receive JSON data from frontend
        data = request.json

        # Convert JSON to DataFrame
        df = pd.DataFrame([data])

        # Predict stress level
        prediction = model.predict(df)[0]

        # Convert prediction into readable text
        if prediction == 0:
            result = "Low Stress"
        else:
            result = "High Stress"

        # Return response
        return jsonify({
            "prediction": result
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })


if __name__ == "__main__":
    app.run(debug=True)