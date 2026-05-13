import './App.css'
import { useState } from 'react'

import aboutDessert from './assets/images/dessert 5.jpg'
import dessertOne from './assets/images/dessert 1.jpg'
import dessertTwo from './assets/images/dessert 2.jpg'
import dessertThree from './assets/images/dessert 3.jpg'

const products = [
  {
    name: 'Berry Cream Cake',
    badge: 'New',
    image: dessertOne,
    description: 'A soft cake topped with berries and sweet cream.',
    notes: 'Vanilla sponge, whipped cream, fresh berries, and a light berry glaze.',
    allergy: 'Contains dairy, eggs, and gluten.'
  },
  {
    name: 'Strawberry Cheesecake',
    badge: 'Best',
    image: dessertTwo,
    description: 'A creamy slice finished with glossy strawberry topping.',
    notes: 'Cream cheese filling, graham crust, strawberry compote, and vanilla.',
    allergy: 'Contains dairy and gluten.'
  },
  {
    name: 'Chocolate Cupcakes',
    badge: 'Classic',
    image: dessertThree,
    description: 'Rich chocolate frosting with a soft cake center.',
    notes: 'Chocolate sponge, cocoa buttercream, and dark chocolate shavings.',
    allergy: 'Contains dairy, eggs, and gluten.'
  }
]

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  function toggleCard(index: number) {
    setFlippedCards((current) =>
      current.includes(index)
        ? current.filter((card) => card !== index)
        : [...current, index]
    )
  }

  return (
    <div className={`page ${darkMode ? 'dark-mode' : ''}`}>
      <section className="hero" id="home">
        <header className="header">
          <div className="logo">
            <span className="logo-mark"></span>
            <span>Velvet & Crumbs</span>
          </div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#popular">Menu</a>
            <a href="#popular">Popular</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </nav>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀ Light' : '🌙 Dark'}
          </button>

          <button className="order-btn">Order Now</button>
        </header>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Sweet <br />
              Moments <br />
              Start <br />
              Here
            </h1>

            <button className="start-btn">Start Order</button>

            <div className="hero-tags">
              <span className="floating-card">Freshly Baked Today ✨</span>
              <span className="floating-card">Best Seller 🍓</span>
              <span className="floating-card">Limited Edition</span>
              <span className="floating-card">4.9 ★ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      <main className="main-card">
        <section className="about" id="about">
          <div className="about-text">
            <p className="eyebrow">— Baked Daily</p>
            <h2>Sweet Moments Delivered Here</h2>
            <p>
              From rich chocolate bites to berry-topped cakes, we create soft,
              thoughtful desserts made for small celebrations and everyday joy.
            </p>
            <button className="outline-btn">Explore Menu</button>
          </div>

          <div className="about-image">
            <img src={aboutDessert} alt="dessert slice" />
          </div>
        </section>

        <section className="features">
          <article className="feature active">
            <h3>Fresh Bakes</h3>
            <p>Soft cakes, rich flavors, and bakery favorites made daily.</p>
          </article>

          <article className="feature">
            <h3>Seasonal Desserts</h3>
            <p>Berry toppings, creamy layers, and flavors that feel special.</p>
          </article>

          <article className="feature disabled-state">
            <h3>Custom Orders</h3>
            <p>Beautiful treats for birthdays, events, and sweet moments.</p>
          </article>
        </section>

        <section className="popular" id="popular">
          <div className="section-title">
            <h2>Our Favorite Treats</h2>
            <p>Click each card to flip it and see what’s inside.</p>
          </div>

          <div className="products">
            {products.map((product, index) => (
              <button
                key={product.name}
                className={`flip-card ${
                  flippedCards.includes(index) ? 'is-flipped' : ''
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className="flip-inner">
                  <div className="treat-card card-front">
                    <span className="badge">{product.badge}</span>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>

                  <div className="treat-card card-back">
                    <h3>What’s Inside</h3>
                    <p>{product.notes}</p>
                    <p className="allergy-note">{product.allergy}</p>
                    <span className="add-box-btn">Add to Box</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="testimonials" id="reviews">
          <div className="section-title">
            <h2>Love Notes</h2>
            <p>Sweet words from our customers.</p>
          </div>

          <div className="testimonial-grid">
            <article className="testimonial featured-testimonial">
              <div className="profile-circle">O</div>
              <p>⭐ “The prettiest desserts in NYC.”</p>
              <h4>— Olivia M.</h4>
            </article>

            <article className="testimonial">
              <div className="profile-circle">J</div>
              <p>⭐ “Every cake tastes homemade.”</p>
              <h4>— Jasmine T.</h4>
            </article>

            <article className="testimonial">
              <div className="profile-circle">M</div>
              <p>⭐ “Perfect for birthdays and sweet gifts.”</p>
              <h4>— Maya R.</h4>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-mark"></span>
              <span>Velvet & Crumbs</span>
            </div>

            <p>
              Soft cakes, handcrafted desserts, and sweet moments made fresh
              every day.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#popular">Popular</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div className="footer-links">
            <h4>Visit</h4>
            <p>New York City</p>
            <p>Open Daily</p>
            <p>8AM — 9PM</p>
          </div>

          <div className="footer-links">
            <h4>Follow</h4>
            <a href="/">Instagram</a>
            <a href="/">TikTok</a>
            <a href="/">Pinterest</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Velvet & Crumbs — Made with sugar & love.
        </div>
      </footer>
    </div>
  )
}
