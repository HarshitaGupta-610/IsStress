const API_URL = "https://isstressbackend.onrender.com/predict";

export async function predictStress(payload) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Prediction request failed');
  }

  const data = await response.json();

  if (!data || !data.prediction) {
    throw new Error('Invalid response from prediction server');
  }

  return data.prediction;
}