import React from 'react'

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      name: 'Melanotan 2 10 mg',
      price: '109,00 zł',
      image: '/product-placeholder.jpg',
      category: 'Peptydy - Bestsellery'
    },
    {
      name: 'GHK-Cu peptyd miedziowy 50 mg',
      price: '219,00 zł',
      image: '/product-placeholder.jpg',
      category: 'Peptydy - Bestsellery'
    },
    {
      name: 'Kisspeptyna-10 5 mg',
      price: '129,00 zł',
      image: '/product-placeholder.jpg',
      category: 'Peptydy - Bestsellery'
    },
    {
      name: 'Diamond Look 78.15 mg',
      price: '169,00 zł',
      image: '/product-placeholder.jpg',
      category: 'Aminokwasy - Bestsellery'
    },
    {
      name: 'Night Blend 116 mg 10 ml',
      price: '149,00 zł',
      image: '/product-placeholder.jpg',
      category: 'Aminokwasy - Bestsellery'
    },
    {
      name: 'Shredded AF 300 mg 10 ml',
      price: '159,00 zł',
      image: '/product-placeholder.jpg',
      category: 'Aminokwasy - Bestsellery'
    }
  ]

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Bestsellery</h2>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-price">{product.price}</div>
                <div className="product-actions">
                  <button className="quick-view-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Szybki podgląd
                  </button>
                  <button className="add-to-cart-btn">Do koszyka</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 