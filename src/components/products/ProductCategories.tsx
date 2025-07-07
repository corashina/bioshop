import React from 'react'

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: 'Peptydy',
      description: 'Doskonale wiemy, że każda osoba ma inne oczekiwania i szuka produktu, który pomoże jej zrealizować określony cel sylwetkowy, poprawi zdrowie lub codzienne samopoczucie. W Biolab jesteśmy otwarci na spełnianie wszystkich potrzeb, dlatego zadbaliśmy o to, aby w asortymencie znalazło się jak najwięcej preparatów o szerokim spektrum działania.',
      features: [
        'Przyspieszenie wzrostu tkanki mięśniowej',
        'Redukcja tkanki tłuszczowej',
        'Wsparcie procesów regeneracyjnych',
        'Działanie antyoksydacyjne i antystarzeniowe'
      ]
    },
    {
      title: 'SARM-y i aminokwasy',
      description: 'W naszej ofercie można również znaleźć produkty, które okażą się dobrym rozwiązaniem dla osób amatorsko uprawiających sport i dążących do uzyskania najlepszych rezultatów. Proponujemy najwyższej jakości SARM-y, które regulują anabolizm mięśniowy.',
      features: [
        'Zwiększenie beztłuszczowej masy mięśniowej',
        'Redukcja tkanki tłuszczowej',
        'Poprawa mineralizacji i gęstości kości',
        'Zwiększenie wydolności organizmu'
      ]
    },
    {
      title: 'Kosmetyki z peptydami',
      description: 'Nasza oferta jest dopasowana do potrzeb kobiet i mężczyzn, którzy chcą zmienić dotychczasowy sposób pielęgnacji skóry na bardziej skuteczny. Zapewniamy szeroki wybór kosmetyków z peptydami.',
      features: [
        'Kuracja przeciwstarzeniowa',
        'Piękna, zdrowa i elastyczna skóra',
        'Różne rodzaje peptydów',
        'Stylowe i eleganckie opakowania'
      ]
    }
  ]

  return (
    <section className="product-categories">
      <div className="container">
        <h2 className="section-title">Jakie rodzaje produktów są dostępne w naszej ofercie?</h2>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <ul className="category-features">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="category-feature">
                    <span className="feature-bullet">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories 