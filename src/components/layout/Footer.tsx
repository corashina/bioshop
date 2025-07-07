import React from 'react'

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Kategorie',
      links: [
        { name: 'Ambasadorzy', href: '#' },
        { name: 'Badania', href: '#' },
        { name: 'O nas', href: '#' },
        { name: 'Forum', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Oferta',
      links: [
        { name: 'Peptydy', href: '#' },
        { name: 'Aminokwasy', href: '#' },
        { name: 'Nootropy', href: '#' },
        { name: 'Suplementy', href: '#' },
        { name: 'Kosmetyki', href: '#' },
        { name: 'Preparaty', href: '#' },
        { name: 'Akcesoria', href: '#' }
      ]
    },
    {
      title: 'Informacja',
      links: [
        { name: 'Regulamin', href: '#' },
        { name: 'Dostawa', href: '#' },
        { name: 'Regulamin Promocji', href: '#' },
        { name: 'Polityka prywatności', href: '#' },
        { name: 'Kontakt', href: '#' },
        { name: 'Śledzenie zamówienia', href: '#' },
        { name: 'Mapa strony', href: '#' }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Peptydy i sarmy sklep online - Biolab Shop</h3>
              <p>
                Specjalizujemy się w hurtowych i detalicznych dostawach wysokiej jakości suplementów, 
                peptydów, aminokwasów, nootropików i adaptogentów.
              </p>
            </div>
            
            <div className="footer-sections">
              {footerSections.map((section, index) => (
                <div key={index} className="footer-section">
                  <h4 className="footer-section-title">{section.title}</h4>
                  <ul className="footer-links">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Kontakt</h4>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Adres e-mail:</strong>
                <a href="mailto:info@biolabshop.eu">info@biolabshop.eu</a>
              </div>
              <div className="contact-item">
                <strong>Telefon:</strong>
                <a href="tel:+447398562456">+44 739 8562 456</a>
              </div>
            </div>
            <div className="social-media">
              <h5>Social media</h5>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Biolabshop. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 