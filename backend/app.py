from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

# Create Flask app
app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load("stress_model.pkl")


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