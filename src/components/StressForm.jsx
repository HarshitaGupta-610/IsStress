const studentOptions = [
  { label: 'School Student', value: '0' },
  { label: 'College Student', value: '1' }
];

const monthOptions = [
  { label: 'January', value: '1' },
  { label: 'February', value: '2' },
  { label: 'March', value: '3' },
  { label: 'April', value: '4' },
  { label: 'May', value: '5' },
  { label: 'June', value: '6' },
  { label: 'July', value: '7' },
  { label: 'August', value: '8' },
  { label: 'September', value: '9' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' }
];

const scaleOptions = Array.from({ length: 10 }, (_, index) => String(index + 1));

function FieldError({ message }) {
  if (!message) return null;

  return <div className="field-error">{message}</div>;
}

function StressForm({ formData, errors, isLoading, onChange, onSubmit }) {
  return (
    <section className="form-card" aria-labelledby="prediction-form-heading">
      <h2 id="prediction-form-heading" className="visually-hidden">
        Stress prediction form
      </h2>

      <form onSubmit={onSubmit} noValidate>
        <div className="form-grid">
          <div className="field full">
            <div className="field-label">
              <label>Student Type</label>
              <span className="field-hint">Required</span>
            </div>
            <div className="radio-group" role="radiogroup" aria-label="Student Type">
              {studentOptions.map((option) => (
                <label key={option.value} className="radio-option">
                  <input
                    type="radio"
                    name="studentType"
                    value={option.value}
                    checked={formData.studentType === option.value}
                    onChange={(event) => onChange('studentType', event.target.value)}
                    disabled={isLoading}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            <FieldError message={errors.studentType} />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="sleepHours">Sleep Hours</label>
              <span className="field-hint">0 - 12</span>
            </div>
            <input
              id="sleepHours"
              className="input"
              type="number"
              min="0"
              max="12"
              placeholder="Enter sleeping hours"
              value={formData.sleepHours}
              onChange={(event) => onChange('sleepHours', event.target.value)}
              disabled={isLoading}
            />
            <FieldError message={errors.sleepHours} />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="studyHours">Study Hours Per Day</label>
              <span className="field-hint">0 - 15</span>
            </div>
            <input
              id="studyHours"
              className="input"
              type="number"
              min="0"
              max="15"
              placeholder="Enter study hours"
              value={formData.studyHours}
              onChange={(event) => onChange('studyHours', event.target.value)}
              disabled={isLoading}
            />
            <FieldError message={errors.studyHours} />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="socialMediaHours">Social Media Hours</label>
              <span className="field-hint">0 - 15</span>
            </div>
            <input
              id="socialMediaHours"
              className="input"
              type="number"
              min="0"
              max="15"
              placeholder="Enter social media hours"
              value={formData.socialMediaHours}
              onChange={(event) => onChange('socialMediaHours', event.target.value)}
              disabled={isLoading}
            />
            <FieldError message={errors.socialMediaHours} />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="attendance">Attendance Percentage</label>
              <span className="field-hint">0% - 100%</span>
            </div>
            <div className="slider-row">
              <input
                id="attendance"
                className="slider"
                type="range"
                min="0"
                max="100"
                step="1"
                value={formData.attendance}
                onChange={(event) => onChange('attendance', event.target.value)}
                disabled={isLoading}
              />
              <div className="slider-value">{formData.attendance}%</div>
            </div>
            <FieldError message={errors.attendance} />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="examPressure">Exam Pressure</label>
              <span className="field-hint">1 - 10</span>
            </div>
            <select
              id="examPressure"
              className="select"
              value={formData.examPressure}
              onChange={(event) => onChange('examPressure', event.target.value)}
              disabled={isLoading}
            >
              <option value="">Select exam pressure</option>
              {scaleOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <FieldError message={errors.examPressure} />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="familySupport">Family Support</label>
              <span className="field-hint">1 - 10</span>
            </div>
            <select
              id="familySupport"
              className="select"
              value={formData.familySupport}
              onChange={(event) => onChange('familySupport', event.target.value)}
              disabled={isLoading}
            >
              <option value="">Select family support</option>
              {scaleOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <FieldError message={errors.familySupport} />
          </div>

          <div className="field">
            <div className="field-label">
              <label htmlFor="month">Current Month</label>
              <span className="field-hint">Required</span>
            </div>
            <select
              id="month"
              className="select"
              value={formData.month}
              onChange={(event) => onChange('month', event.target.value)}
              disabled={isLoading}
            >
              <option value="">Select month</option>
              {monthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError message={errors.month} />
          </div>

          <div className="field full">
            <button className={`submit-button ${isLoading ? 'loading' : ''}`} type="submit" disabled={isLoading}>
              {isLoading ? <span className="submit-spinner" aria-hidden="true" /> : null}
              <span>Predict Stress</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default StressForm;