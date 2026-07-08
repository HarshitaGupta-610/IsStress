import { useState } from 'react';
import Header from './components/Header';
import StressForm from './components/StressForm';
import ResultCard from './components/ResultCard';
import { predictStress } from './services/api';

const initialFormState = {
  studentType: '',
  sleepHours: '',
  studyHours: '',
  socialMediaHours: '',
  attendance: 85,
  examPressure: '',
  familySupport: '',
  month: ''
};

const emptyErrors = {
  studentType: '',
  sleepHours: '',
  studyHours: '',
  socialMediaHours: '',
  attendance: '',
  examPressure: '',
  familySupport: '',
  month: ''
};

function App() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(emptyErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const nextErrors = { ...emptyErrors };

    if (formData.studentType === '') nextErrors.studentType = 'Please select a student type.';
    if (formData.sleepHours === '') nextErrors.sleepHours = 'Sleep hours are required.';
    if (formData.studyHours === '') nextErrors.studyHours = 'Study hours are required.';
    if (formData.socialMediaHours === '') nextErrors.socialMediaHours = 'Social media hours are required.';
    if (formData.examPressure === '') nextErrors.examPressure = 'Please choose exam pressure.';
    if (formData.familySupport === '') nextErrors.familySupport = 'Please choose family support.';
    if (formData.month === '') nextErrors.month = 'Please select the current month.';

    const sleepHours = Number(formData.sleepHours);
    const studyHours = Number(formData.studyHours);
    const socialMediaHours = Number(formData.socialMediaHours);
    const examPressure = Number(formData.examPressure);
    const familySupport = Number(formData.familySupport);

    if (formData.sleepHours !== '' && (Number.isNaN(sleepHours) || sleepHours < 0 || sleepHours > 12)) {
      nextErrors.sleepHours = 'Sleep hours must be between 0 and 12.';
    }

    if (formData.studyHours !== '' && (Number.isNaN(studyHours) || studyHours < 0 || studyHours > 15)) {
      nextErrors.studyHours = 'Study hours must be between 0 and 15.';
    }

    if (formData.socialMediaHours !== '' && (Number.isNaN(socialMediaHours) || socialMediaHours < 0 || socialMediaHours > 15)) {
      nextErrors.socialMediaHours = 'Social media hours must be between 0 and 15.';
    }

    if (Number.isNaN(Number(formData.attendance)) || Number(formData.attendance) < 0 || Number(formData.attendance) > 100) {
      nextErrors.attendance = 'Attendance must be between 0 and 100.';
    }

    if (formData.examPressure !== '' && (Number.isNaN(examPressure) || examPressure < 1 || examPressure > 10)) {
      nextErrors.examPressure = 'Exam pressure must be between 1 and 10.';
    }

    if (formData.familySupport !== '' && (Number.isNaN(familySupport) || familySupport < 1 || familySupport > 10)) {
      nextErrors.familySupport = 'Family support must be between 1 and 10.';
    }

    setErrors(nextErrors);

    return !Object.values(nextErrors).some(Boolean);
  };

  const handleChange = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: ''
      }));
    }

    if (serverError) {
      setServerError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError('');
    setResult(null);

    if (!validate()) {
      return;
    }

    const payload = {
      Student_Type: Number(formData.studentType),
      Sleep_Hours: Number(formData.sleepHours),
      Study_Hours: Number(formData.studyHours),
      Social_Media_Hours: Number(formData.socialMediaHours),
      Attendance: Number(formData.attendance),
      Exam_Pressure: Number(formData.examPressure),
      Family_Support: Number(formData.familySupport),
      Month: Number(formData.month)
    };

    try {
      setIsLoading(true);
      const prediction = await predictStress(payload);
      setResult(prediction);
    } catch (error) {
      setServerError('Unable to connect to the prediction server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="app-shell">
      <div className="background-orb background-orb-left" />
      <div className="background-orb background-orb-right" />

      <section className="page-card">
        <Header />

        <StressForm
          formData={formData}
          errors={errors}
          isLoading={isLoading}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        {serverError ? <div className="server-alert">{serverError}</div> : null}

        {isLoading ? (
          <div className="loading-panel" aria-live="polite">
            <div className="spinner" />
            <p>Analyzing your stress level...</p>
          </div>
        ) : null}

        {result ? <ResultCard result={result} /> : null}
      </section>
    </main>
  );
}

export default App;