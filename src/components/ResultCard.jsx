const resultConfig = {
  'Low Stress': {
    icon: '😊',
    tone: 'low',
    label: 'Low Stress',
    recommendation:
      'Great! Your stress level appears to be under control. Continue maintaining healthy sleep habits, balanced study hours, regular exercise, and quality time with family and friends.'
  },
  'High Stress': {
    icon: '⚠️',
    tone: 'high',
    label: 'High Stress',
    recommendation:
      'Your stress level appears to be high. Consider improving your sleep schedule, taking regular study breaks, reducing social media usage, exercising regularly, practicing relaxation techniques, and seeking support from family, friends, or a counselor if needed.'
  }
};

function ResultCard({ result }) {
  const config = resultConfig[result] ?? resultConfig['High Stress'];

  return (
    <section className="result-card" aria-live="polite">
      <div className="result-header">
        <h2>Your Stress Level</h2>
        <div className={`badge ${config.tone}`}>
          <span aria-hidden="true">{config.icon}</span>
          <span>{config.label}</span>
        </div>
      </div>

      <div className="result-summary">
        <p className={`result-value ${config.tone}`}>{config.label}</p>
        <div className="divider" />
        <p className="recommendation">{config.recommendation}</p>
      </div>
    </section>
  );
}

export default ResultCard;