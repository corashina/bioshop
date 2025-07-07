import React, { useState } from 'react'

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const menuItems = [
    {
      name: 'Peptydy',
      submenu: [
        { name: 'zobacz wszystkie', href: '#' },
        { name: '5-amino 1MQ', href: '#' },
        { name: 'ACTH 1-39', href: '#' },
        { name: 'Adamax', href: '#' },
        { name: 'Alarelin', href: '#' },
        { name: 'AOD-9604', href: '#' },
        { name: 'ARA 290', href: '#' },
        { name: 'ARG-BPC', href: '#' },
        { name: 'B7-33', href: '#' },
        { name: 'BPC 157', href: '#' },
        { name: 'Zobacz więcej', href: '#' }
      ]
    },
    {
      name: 'Aminokwasy',
      submenu: [
        { name: 'zobacz wszystkie', href: '#' },
        { name: 'BONES & JOINTS', href: '#' },
        { name: 'BURN FROM THE HELL', href: '#' },
        { name: 'BULK LIKE HULK', href: '#' },
        { name: 'BCAA', href: '#' },
        { name: 'TOP RUNNER', href: '#' },
        { name: 'DIAMOND LOOK', href: '#' },
        { name: 'DAY BLEND', href: '#' },
        { name: 'JOINT LIVER SUPPORT', href: '#' },
        { name: 'EXTREME PUMP 2', href: '#' },
        { name: 'Zobacz więcej', href: '#' }
      ]
    },
    {
      name: 'Nootropy',
      submenu: [
        { name: 'zobacz wszystkie', href: '#' },
        { name: 'BAKOPA', href: '#' },
        { name: 'BRAIN MATRIX', href: '#' },
        { name: 'CHOLINA', href: '#' },
        { name: 'HUPERCYNA-A', href: '#' },
        { name: 'J-147', href: '#' },
        { name: 'NO MERCY PRE-WORKOUT', href: '#' },
        { name: 'NOOPEPT', href: '#' },
        { name: 'PEA | Fenyloetyloamina', href: '#' },
        { name: 'PRL-8', href: '#' }
      ]
    },
    {
      name: 'Suplementy',
      submenu: [
        { name: 'zobacz wszystkie', href: '#' }
      ]
    },
    {
      name: 'Kosmetyki',
      submenu: [
        { name: 'zobacz wszystkie', href: '#' }
      ]
    },
    {
      name: 'Preparaty',
      submenu: [
        { name: 'zobacz wszystkie', href: '#' }
      ]
    },
    {
      name: 'Akcesoria',
      submenu: [
        { name: 'zobacz wszystkie', href: '#' }
      ]
    }
  ]

  return (
    <nav className="navigation">
      <div className="container">
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className="nav-item"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a href="#" className="nav-link">
                {item.name}
              </a>
              {activeMenu === item.name && (
                <div className="submenu">
                  <div className="submenu-content">
                    <ul className="submenu-list">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.href}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation 