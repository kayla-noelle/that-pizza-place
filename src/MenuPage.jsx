import { Link } from 'react-router-dom'
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
  {
    src: '/menu/ThatPizzaPlace_47.png',
    label: 'Sandwiches',
    description: '*Can be Hot or Cold. Served with House Made Pickles and Chips (Salted, BBQ or Salt & Vinegar)',
    items: [
      { name: 'CHICKEN PARMESAN', desc: 'Kaiser Roll, Breaded Chicken Breast, Red Sauce, Mozzarella & Parmesan Cheese 13.75' },
      { name: '‘THE JULIAN SAYIN’ (Chickey)', desc: 'Kaiser Roll, Chicken Breast, Bacon, Provolone, Tomato, Lettuce, Ranch 13.25' },
      { name: 'ITALIAN SUB', desc: 'French Roll, Ham, Salami, Capicola, Provolone, Lettuce, Onions, Tomato, Italian Dressing 13.25' },
      { name: 'MEATBALL', desc: 'French Roll, Meatballs, Red Sauce, Mozzarella 13' },
      { name: 'CALIFORNIA DELI SUB', desc: 'French Roll, Roast Beef, Turkey, Lettuce, Tomato, Provolone, Mustard, Mayo 13.50' },
      { name: 'CHEF’S ROTATING SANDWICH: TPP SUB', desc: 'Toasted French Roll, Roast Beef, Provolone, Sauteed Fresh Jalapeno, Red Onion, Bell Pepper, Horseradish Aioli 13.75' },
    ],
  },
  {
    src: null,
    label: 'Calzones',
    description: '*GF not available',
    items: [
      { name: 'VEGGIE', desc: 'Mushrooms, Olives, Bell Peppers, Onions, Tomatoes, Ricotta, Cheese Blend, Red Sauce 11.25' },
      { name: 'HAM & CHEESE', desc: 'Ham, Ricotta, Cheese Blend, Red Sauce 11.25' },
      { name: 'SAUSAGE', desc: 'Bell Peppers, Sausage, Ricotta, Cheese Blend, Red Sauce 12.25' },
      { name: 'TPP COMBO', desc: 'Pepperoni, Ham, Salami, Mushrooms, Olives, Ricotta, Cheese Blend, Red Sauce 13.25' },
      { name: 'BUILD YOUR OWN', desc: 'Choice of Fillings 9 + Meat Toppings 1.25  ·  Veggie Toppings .75' },
    ],
  },
  {
    src: '/menu/ThatPizzaPlace_62.png',
    label: 'Appetizers',
    items: [
      { name: 'GARLIC BREAD', desc: 'Small (4pc) 3.50  ·  Large (10pc) 8.75' },
      { name: 'CHEESY GARLIC BREAD', desc: 'Small (4pc) 4.50  ·  Large (10pc) 9.50' },
      { name: 'BREAD STICKS', desc: '(10pc) 8.50' },
      { name: 'CHEESY BREAD STICKS', desc: '(10pc) 9.50' },
      { name: 'MEATBALLS', desc: '2 Meatballs with Red Sauce, House Cheese Blend and Garlic Bread 9.75 (additional meatball +2)' },
      { name: 'BATTERED FRIES', desc: 'Small 7  ·  Bunch 12' },
      { name: 'WINGS (BONE-IN)', desc: '6 (9.95)  ·  12 (18.75)  ·  18 (25.95) Pieces' },
      { name: 'FLAVORS', desc: 'House BBQ, Garlic Parmesan, Honey Sriracha, BBQ Dry Rub, Mild Buffalo, Extra Spicy Buffalo, or Naked' },
    ],
  },
  {
    src: '/menu/ThatPizzaPlace_16.png',
    label: 'Salads',
    description: 'Individual (1-2 people) 9.75  ·  Family Size (4-5 people) 24.75  ·  *Add Chicken Individual (+3) Family (+7)',
    items: [
      { name: 'TPP HOUSE', desc: 'Spring Mix, Carrots, Tomatoes, Red Onion, Dried Cherries, Pine Nuts, Gorgonzola, Blood Orange Vinaigrette' },
      { name: 'ANTIPASTO', desc: 'Pepperoni, Salami, Ham, Red Onion, Olives, Artichoke Hearts, Cheese, Iceberg, Italian Dressing' },
      { name: 'GARDEN', desc: 'Iceberg & Romaine, Carrots, Mushrooms, Bell Pepper, Tomatoes, Red Onion, Cheese, Croutons, Choice of Dressing' },
      { name: 'CAESAR', desc: 'Romaine, Shaved Parmesan & Croutons' },
      { name: 'BUILD YOUR OWN', desc: 'Choice of Lettuce, Toppings, & Dressing. Includes up to 6 toppings' },
      { name: 'HOUSE MADE DRESSINGS', desc: 'Ranch, Blue Cheese, Italian, Blood Orange Vinaigrette, & Thousand Island' },
    ],
  },
  {
    src: '/menu/ThatPizzaPlace_78.png',
    label: 'Desserts',
    items: [
      { name: 'TPP PAZOOKIE', desc: 'Skillet Baked Chocolate Chip Cookie, Topped with Vanilla Ice Cream, Whip Cream & Drizzled with Chocolate Sauce 11' },
      { name: 'TPP BROOKIE', desc: 'Skillet Baked Chocolate Chip Cookie AND Brownie, Topped with Vanilla Ice Cream, Whip Cream & Drizzled with Chocolate Sauce 12.50' },
      { name: 'CINNAMON AND SUGAR BREADSTICKS', desc: '9.25' },
    ],
  },
]

const beverageCategories = [
  {
    src: null,
    label: 'Draft Beer',
    description: 'Available by the Pint and Pitcher',
    items: [
      { name: 'BURGEON HOUSE BLONDE', desc: 'Blonde Ale 5%' },
      { name: 'COORS LIGHT', desc: 'Lager 4%' },
      { name: 'MODELO CERVEZA ESPECIAL', desc: '4.4%' },
      { name: 'BLACK PLAGUE OPEN MIND', desc: 'Hazy IPA 7%' },
      { name: 'MOTHER EARTH CALI CREAMIN’', desc: 'Vanilla Cream Ale 5.2%' },
      { name: 'CALI SQUEEZE BLOOD ORANGE', desc: 'Hefeweizen 5%' },
      { name: 'DUCK FOOT DUCKZILLA', desc: 'DDIPA 8.6%' },
      { name: 'ALESMITH .394', desc: 'Pale Ale 6%' },
      { name: 'CARLSBAD BREWING FAMOSA RACEWAY', desc: 'West Coast IPA 6.5%' },
      { name: 'BOOZE BROTHERS 1-800 TROPICS', desc: 'Hazy IPA 6.7%' },
      { name: 'SOCIETE THE PUPIL', desc: 'IPA 7.5%' },
    ],
  },
  {
    src: null,
    label: 'BOOCH, SELTZER, AND CIDER',
    items: [
      { name: 'NOVA SEXY PINEAPPLE', desc: 'Kombucha 7%' },
      { name: 'JUNESHINE POG', desc: 'Kombucha 6%' },
      { name: 'BREWERY X', desc: 'Huckleberry Seltzer 5%' },
      { name: 'NEWTOPIA CYDER BLUDACRIS', desc: 'Blueberry Meyer Lemon Cider 6%' },
    ],
  },
  {
    src: null,
    label: 'Cans',
    items: [
      { name: 'BOOZE BROTHERS GREEN EYED AMBER', desc: 'Amber Ale 6.4%' },
      { name: 'MICHELOB ULTRA', desc: 'Lager 4.0%' },
      { name: 'WHITE CLAW', desc: 'Seltzer 5.0%' },
      { name: 'BREWERY X BATTLESNAKE', desc: 'Pilsner 5.6%' },
      { name: 'NEWTOPIA APPLE SOIREE', desc: 'Cider 6.2%' },
      { name: 'JUNESHINE', desc: 'Mango Daydream or P.O.G Kombucha 6%' },
      { name: 'KARL STRAUSS WRECK ALLEY', desc: 'Imperial Stout 9%' },
    ],
  },
  {
    src: null,
    label: 'NON-ALCOHOLIC',
    description: 'Athletic Brew:',
    items: [
      { name: 'RUN WILD', desc: 'IPA' },
      { name: 'FREE WAVE', desc: 'Hazy IPA' },
      { name: 'UPSIDE DOWN', desc: 'Golden' },
    ],
  },
  {
    src: null,
    label: 'WINE',
    description: 'Available by the Glass, 1/2 Carafe and Bottle',
    groups: [
      {
        title: 'Sparkling and Rose',
        items: [
          { name: 'LA MARCA PROSECCO', desc: '6 oz' },
          { name: 'GRANDIAL BRUT', desc: '6 oz' },
          { name: 'LA VIEILLE FERME ROSE', desc: '2021' },
        ],
      },
      {
        title: 'Whites',
        items: [
          { name: 'J VINEYARD PINOT GRIS', desc: 'Sonoma-Monterey 2024, 12.5%' },
          { name: 'LA CREMA CHARDONNAY', desc: 'Sonoma Coast 2022, 13.5%' },
          { name: 'CLOS DU BOIS CHARDONNAY', desc: 'Sonoma 2022, 13.5%' },
          { name: 'MOHUA SAUVIGNON BLANC', desc: '2020, 13%' },
        ],
      },
      {
        title: 'Reds',
        items: [
          { name: 'OPOLO SUMMIT CREEK CABERNET SAUVIGNON', desc: 'California 2021, 13.9%' },
          { name: 'J LOHR PASO ROBLES CABERNET SAUVIGNON', desc: '2021, 13.5%' },
          { name: 'LA CREMA MONTEREY PINOT NOIR', desc: '2021, 14.5%' },
          { name: 'MURPHY GOODE CALIFORNIA PINOT NOIR', desc: '2021, 13.5%' },
        ],
      },
    ],
  },
  {
    src: null,
    label: 'Fountain Drinks',
    items: [
      { name: 'SOFT DRINKS', desc: 'Coke, Diet Coke, Dr. Pepper, Sprite, Root Beer, Powerade, Lemonade' },
      { name: 'GOLD PEAK', desc: 'Raspberry Iced Tea, Sweetened Iced Tea, Unsweetened Iced Tea' },
    ],
  },
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
          <a href="https://www.toasttab.com/local/order/that-pizza-place/r-32db71c1-64cd-4796-9676-06da90995f7d" className="hero-btn hero-btn--pickup">Order Pickup</a>
          <Link to="/order" className="hero-btn hero-btn--delivery">Order Delivery</Link>
        </div>
        <p className="menu-page-intro">
          At That Pizza Place, we offer hand-crafted pizzas and sandwiches, fresh salads, chicken wings and more. We take pride in our house made sauces, dressings, pickles, and potato chips. Enjoy our excellent selection of craft beers and wine.
          <br /><br />
          Make sure to save room for our delicious desserts!
          <br /><br />
          <strong>LUNCH SPECIAL 13.50</strong>
          <br />
          Offered Monday-Friday, 11am-3pm
          <br />
          Includes 2 toppings
          <br /><br />
          6” Pizza, Choice of Salad (Garden, Caesar, House), Fountain Drink
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
        <h2 className="menu-section-title">Beverages</h2>
        <p className="menu-page-intro">
          HAPPY HOUR MONDAY-FRIDAY 3PM-6PM. $2 OFF BEER AND WINE
          <br /><br />
          Enjoy our great selection of rotating draft beers, micro brews, hard seltzer, kombucha, ciders and wine!
          <br /><br />
          We also offer non-alcoholic options.
          <br /><br />
          No Outside Beverages Allowed
        </p>
        <div className="menu-categories">
          {beverageCategories.map((cat, i) => (
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
                {cat.groups && cat.groups.map((g, k) => (
                  <div className="menu-toppings" key={k}>
                    <h3 className="menu-toppings-title">{g.title}</h3>
                    <ul className="menu-category-items">
                      {g.items.map((item, j) => (
                        <li key={j}>
                          <span className="menu-item-name">{item.name}: </span>
                          <span className="menu-item-desc">{item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
