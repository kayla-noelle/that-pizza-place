import Navbar from './Navbar'
import Footer from './Footer'

const categories = [
  {
    src: null,
    label: 'Specialty Pizza',
    description: 'Small 18.25 (Deep Dish 19.25)  ·  Medium 23.25  ·  Large 28.50 (Deep Dish 29.50)  ·  X-Large 38.35',
    items: [
      { name: 'BBQ CHICKEN', desc: 'House Made BBQ Sauce, Chicken Breast, Red Onion, Cilantro' },
      { name: 'MEAT LOVERS', desc: 'Salami, Pepperoni, Meatballs, Sausage' },
      { name: 'CHICKEN PESTO', desc: 'House Made Pesto, Chicken Breast, Red Onion, Feta, Artichoke Hearts' },
      { name: 'TPP COMBO', desc: 'Pepperoni, Ham, Salami, Sausage, Mushrooms, Olives, Bell Peppers' },
      { name: 'CHICKEN RANCH', desc: 'House Made Ranch, Chicken Breast, Bacon, Red Onion, Pepperoncini' },
      { name: 'VEGGIE', desc: 'Mushrooms, Olives, Onions, Tomatoes, Bell Peppers' },
      { name: 'GARLIC CHICKEN', desc: 'Chicken Breast, Fresh Basil, Onion, Garlic, Tomatoes' },
      { name: 'SOUTH OF THE BORDER', desc: 'Tomatillo Base, Carne Asada, Onions, Jalapeños (Pickled or Fresh), Avocado Crema, Cilantro' },
    ],
  },
  {
    src: '/ThatPizzaPlace_24.png',
    label: 'Pizza',
    items: [
      { name: 'CLASSIC TPP STYLE', desc: 'Small (6 slices) 15.75  ·  Medium (8 slices) 19.75  ·  Large (10 slices) 23.75  ·  XL (12 slices) 29.75' },
      { name: 'DEEP DISH PIZZA', desc: 'Small & Large Only  +2  ·  *Gluten Free in Small +5 or Large +7' },
    ],
    toppings: [
      { name: 'MEATS', desc: 'Pepperoni, Sausage, Salami, Ham, Canadian Bacon, Chicken, Bacon, Meatball', pricing: 'Small +2.25  ·  Medium +2.50  ·  Large +2.75  ·  X-Large +3' },
      { name: 'VEGGIES', desc: 'Artichoke Hearts, Basil, Cherry Peppers, Bell Peppers, Cilantro, Fresh & Pickled Jalapeños, Garlic, Mushrooms, Olives, Pineapple, Pepperoncini, Onion, Red Onion, Tomatoes', pricing: 'Small +1.50  ·  Medium +2.00  ·  Large +2.25  ·  X-Large +2.50' },
      { name: 'SEAFOOD', desc: 'Anchovies' },
      { name: 'CHEESES', desc: 'Fresh Mozzarella, Ricotta, Feta, Gorgonzola, Vegan Cheese' },
    ],
  },
  { src: '/menu/ThatPizzaPlace_47.png',   label: 'Sandwiches' },
  { src: '/menu/ThatPizzaPlace_62.png',   label: 'Appetizers' },
  { src: '/menu/ThatPizzaPlace_16.png',   label: 'Salads' },
  { src: '/menu/ThatPizzaPlace_78.png',   label: 'Desserts' },
]

export default function MenuPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <div className="menu-page-banner">
          <h1 className="menu-page-banner-title">Our Menu</h1>
        </div>
        <div className="menu-page-order">
          <a href="#" className="hero-btn hero-btn--pickup">Order Pickup</a>
          <a href="#" className="hero-btn hero-btn--delivery">Order Delivery</a>
        </div>
        <p className="menu-page-intro">
          At That Pizza Place, we offer hand-crafted pizzas and sandwiches, fresh salads, chicken wings and more. We take pride in our house made sauces, dressings, pickles, and potato chips. Enjoy our excellent selection of craft beers and wine.
          <br /><br />
          Make sure to save room for our delicious desserts!
        </p>
        <div className="menu-categories">
          {categories.map((cat, i) => (
            <div key={i} className={`menu-category${i % 2 === 1 ? ' menu-category--reverse' : ''}`}>
              <div className="menu-category-image">
                {cat.src && <img src={cat.src} alt={cat.label} />}
              </div>
              <div className="menu-category-text">
                <h2 className="menu-category-title">{cat.label}</h2>
                {cat.description && <p className="menu-category-description">{cat.description}</p>}
                {cat.items && (
                  <ul className="menu-category-items">
                    {cat.items.map((item, j) => (
                      <li key={j}>
                        <span className="menu-item-name">{item.name}: </span>
                        <span className="menu-item-desc">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {cat.toppings && (
                  <div className="menu-toppings">
                    <h3 className="menu-toppings-title">Toppings</h3>
                    <ul className="menu-category-items">
                      {cat.toppings.map((t, j) => (
                        <li key={j}>
                          <span className="menu-item-name">{t.name}: </span>
                          <span className="menu-item-desc">{t.desc}</span>
                          {t.pricing && <div className="menu-item-pricing">{t.pricing}</div>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
