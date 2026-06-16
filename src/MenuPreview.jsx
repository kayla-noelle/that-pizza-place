import { Link } from 'react-router-dom'

const menuItems = [
  { src: '/ThatPizzaPlace_24.png', alt: 'Pizza', label: 'Pizza' },
  { src: '/menu/ThatPizzaPlace_47.png', alt: 'Sandwiches', label: 'Sandwiches' },
  { src: '/menu/ThatPizzaPlace_78.png', alt: 'Desserts', label: 'Desserts' },
  { src: '/menu/ThatPizzaPlace_62.png', alt: 'Appetizers', label: 'Appetizers' },
  { src: null, label: 'Drinks' },
  { src: '/menu/ThatPizzaPlace_16.png', alt: 'Salads', label: 'Salads' },
]

export default function MenuPreview() {
  return (
    <section className="menu-preview">
      <h2 className="menu-preview-title">Our Menu</h2>
      <div className="menu-preview-grid">
        {menuItems.map((item, i) => (
          <div key={i} className="menu-preview-placeholder">
            {item.src && <img src={item.src} alt={item.alt} />}
            <span className="menu-preview-label">{item.label}</span>
          </div>
        ))}
      </div>
      <Link to="/menu" className="menu-preview-link">View our full menu</Link>
    </section>
  )
}
