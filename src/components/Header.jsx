function Header() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <div className="eyebrow">AI-powered wellness screening</div>
        <h1>
          <span>IsStress?</span>
        </h1>
        <p className="hero-subtitle">Small questions today. Better mental health tomorrow.</p>
        <p className="hero-description">
          Answer a few simple questions and let our AI-powered machine learning model analyze your stress level in seconds.
        </p>
      </div>

      <div className="hero-art" aria-hidden="true">
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48 16C35.85 16 26 25.85 26 38c0 7.2 3.4 13.61 8.68 17.7V63a4 4 0 0 0 4 4h18.64a4 4 0 0 0 4-4v-7.29C66.6 51.62 70 45.2 70 38c0-12.15-9.85-22-22-22Z"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M36 64h24" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M39 72h18" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="38" cy="34" r="3" fill="#41C1DD" stroke="none" />
          <circle cx="58" cy="34" r="3" fill="#41C1DD" stroke="none" />
          <path d="M37.5 44.5c2.8 3.6 6.3 5.4 10.5 5.4s7.7-1.8 10.5-5.4" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>
    </header>
  );
}

export default Header;