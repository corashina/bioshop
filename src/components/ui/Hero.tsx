import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Biolab - najlepszy sklep z peptydami
          </h1>
          <p className="hero-description">
            Sklep Biolab został stworzony z myślą o osobach szukających najwyższej jakości produktów. 
            Oferowane przez nas preparaty zostały dokładnie przebadane, a klienci mogą w każdym momencie 
            sprawdzić wyniki analiz przeprowadzonych przez laboratorium. Takie podejście sprawia, że 
            kupując peptydy, SARM-y lub aminokwasy, masz pewność, że otrzymujesz bezpieczne wyroby.
          </p>
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Przebadane produkty</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Najwyższa jakość</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Bezpieczne preparaty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 