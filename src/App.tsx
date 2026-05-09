import './App.css'

import aboutDessert from './assets/images/dessert 5.jpg'
import dessertOne from './assets/images/dessert 1.jpg'
import dessertTwo from './assets/images/dessert 2.jpg'
import dessertThree from './assets/images/dessert 3.jpg'

export default function App() {
  return (
    <div className="page">
      <section className="hero" id="home">
        <header className="header">
          <div className="logo">
            <span className="logo-mark"></span>
            <span>Velvet & Crumbs</span>
          </div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#popular">Popular</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </nav>

          <button className="order-btn">Order Now</button>
        </header>

        {/* FLOATING CARDS */}

      <div className="hero-tags">
  <div className="floating-card">
    Freshly Baked Today ✨
  </div>

  <div className="floating-card">
    Best Seller 🍓
  </div>

  <div className="floating-card">
    Limited Edition
  </div>

  <div className="floating-card">
    4.9 ★ Reviews
  </div>
</div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Sweet <br />
              Moments <br />
              Start Here
            </h1>

            <button className="start-btn">
              Start Order
            </button>
          </div>
        </div>
      </section>

      <main className="main-card">
        {/* ABOUT */}

        <section className="about" id="about">
          <div className="about-text">
            <p className="eyebrow">— Baked Daily</p>

            <h2>Sweet Moments Delivered Here</h2>

            <p>
              From rich chocolate bites to berry-topped cakes,
              we create soft, thoughtful desserts made for
              small celebrations and everyday joy.
            </p>

            <button className="outline-btn">
              Explore Menu
            </button>
          </div>

          <div className="about-image">
            <img src={aboutDessert} alt="dessert slice" />
          </div>
        </section>

        {/* FEATURES */}

        <section className="features">
          <article className="feature active">
            <h3>Fresh Bakes</h3>

            <p>
              Soft cakes, rich flavors, and bakery favorites
              made daily.
            </p>
          </article>

          <article className="feature">
            <h3>Seasonal Desserts</h3>

            <p>
              Berry toppings, creamy layers, and flavors
              that feel special.
            </p>
          </article>

          <article className="feature">
            <h3>Custom Orders</h3>

            <p>
              Beautiful treats for birthdays, events,
              and sweet moments.
            </p>
          </article>
        </section>

        {/* PRODUCTS */}

        <section className="popular" id="popular">
          <div className="section-title">
            <h2>Our Favorite Treats</h2>

            <p>
              Handpicked desserts our customers adore.
            </p>
          </div>

          <div className="products">
            <article className="product">
              <span className="badge">New</span>

              <img src={dessertOne} alt="berry cake" />

              <h3>Berry Cream Cake</h3>

              <p>
                A soft cake topped with berries and sweet cream.
              </p>
            </article>

            <article className="product">
              <span className="badge">Best</span>

              <img src={dessertTwo} alt="cheesecake" />

              <h3>Strawberry Cheesecake</h3>

              <p>
                A creamy slice finished with glossy
                strawberry topping.
              </p>
            </article>

            <article className="product">
              <span className="badge">Classic</span>

              <img src={dessertThree} alt="cupcakes" />

              <h3>Chocolate Cupcakes</h3>

              <p>
                Rich chocolate frosting with a soft
                cake center.
              </p>
            </article>
          </div>
        </section>

        {/* TESTIMONIALS */}

        <section className="testimonials" id="reviews">
          <div className="section-title">
            <h2>Love Notes</h2>

            <p>
              Sweet words from our customers.
            </p>
          </div>

          <div className="testimonial-grid">
            <article className="testimonial">
              <div className="profile-circle">O</div>

              <p>
                ⭐ “The prettiest desserts in NYC.”
              </p>

              <h4>— Olivia M.</h4>
            </article>

            <article className="testimonial">
              <div className="profile-circle">J</div>

              <p>
                ⭐ “Every cake tastes homemade.”
              </p>

              <h4>— Jasmine T.</h4>
            </article>

            <article className="testimonial">
              <div className="profile-circle">M</div>

              <p>
                ⭐ “Perfect for birthdays and sweet gifts.”
              </p>

              <h4>— Maya R.</h4>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
