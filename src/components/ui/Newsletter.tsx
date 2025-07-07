import React, { useState } from 'react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-info">
            <h2 className="newsletter-title">Newsletter</h2>
            <h3 className="newsletter-subtitle">Odbierz rabat na pierwsze zamówienie</h3>
          </div>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="newsletter-btn">
                Dodaj mnie do newslettera!
              </button>
            </div>
            
            <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <span className="checkbox-text">
                  Wyrażam zgodę na przesyłanie na wskazany powyżej adres e-mail informacji marketingowych 
                  drogą elektroniczną zgodnie z art. 10 ust. 1 i 2 Ustawy z dnia 18 lipca 2002 r. 
                  o świadczeniu usług drogą elektroniczną.
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter 