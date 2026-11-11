import { Link } from 'react-router-dom'

const menuItems = [
  { src: '/ThatPizzaPlace_24.png', alt: 'Pizza', label: 'Pizza', to: '/menu#pizza' },
  { src: '/menu/ThatPizzaPlace_47.png', alt: 'Sandwiches', label: 'Sandwiches', to: '/menu#sandwiches' },
  { src: '/menu/ThatPizzaPlace_78.png', alt: 'Desserts', label: 'Desserts', to: '/menu#desserts' },
  { src: '/menu/ThatPizzaPlace_62.png', alt: 'Appetizers', label: 'Appetizers', to: '/menu#appetizers' },
  { src: '/menu/ThatPizzaPlace_49.jpg', alt: 'Drinks', label: 'Drinks', objectPosition: 'center 70%', to: '/menu#drinks' },
  { src: '/menu/ThatPizzaPlace_16.png', alt: 'Salads', label: 'Salads', to: '/menu#salads' },
]

export default function MenuPreview() {
  return (
    <section className="menu-preview">
      <h2 className="menu-preview-title">Our Menu</h2>
      <div className="menu-preview-grid">
        {menuItems.map((item, i) => (
          <Link key={i} to={item.to} className="menu-preview-placeholder" aria-label={`View ${item.label} menu`}>
            {item.src && <img src={item.src} alt="" style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined} />}
            <span className="menu-preview-label">{item.label}</span>
          </Link>
        ))}
      </div>
      <Link to="/menu" className="menu-preview-link">View our full menu</Link>
    </section>
  )
}
