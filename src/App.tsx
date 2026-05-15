import { useState } from "react";
import "./App.css";

const components = [
  "Buttons",
  "Badges",
  "Inputs",
  "Product Cards",
  "Navigation",
  "Alerts",
  "Color Tokens",
  "Typography",
  "Toggles",
];

const componentDocs: Record<
  string,
  { usage: string; do: string; dont: string }
> = {
  Buttons: {
    usage:
      "Use buttons for important user actions like ordering, submitting, saving, or moving through a flow.",
    do: "Use one clear primary button per section.",
    dont: "Do not use too many primary buttons in the same area.",
  },

  Badges: {
    usage:
      "Use badges to label product status, categories, and quick information.",
    do: "Use short labels like Fresh, New, Best Seller, or Limited.",
    dont: "Do not use badges for long sentences.",
  },


Toggles: {
  usage:
    "Use toggles for turning settings on or off, such as dark mode, notifications, or pickup reminders.",
  do: "Use toggles only for settings that have a clear on/off state.",
  dont: "Do not use toggles for actions that need confirmation.",
},


  Inputs: {
    usage:
      "Use inputs for forms, search bars, newsletter signups, and custom cake requests.",
    do: "Use clear placeholder text and visible error states.",
    dont: "Do not leave users guessing what information is required.",
  },

  "Product Cards": {
    usage:
      "Use product cards to display bakery items in menus, featured sections, and order flows.",
    do: "Use the selected state for featured or chosen items.",
    dont: "Do not use disabled cards for available products.",
  },

  Navigation: {
    usage:
      "Use navigation to help users move between main sections of the bakery interface.",
    do: "Keep navigation labels short and easy to scan.",
    dont: "Do not overcrowd the navigation with too many links.",
  },

  Alerts: {
    usage:
      "Use alerts to communicate success, warning, and error messages.",
    do: "Use clear messages that explain what happened.",
    dont: "Do not use alerts for decorative text.",
  },

  "Color Tokens": {
    usage:
      "Use color tokens to keep the bakery brand consistent across components.",
    do: "Use colors consistently for background, accents, text, and states.",
    dont: "Do not randomly introduce new colors outside the system.",
  },

  Typography: {
    usage:
      "Use typography styles to create hierarchy across headings, labels, and body text.",
    do: "Use Playfair for headings and Inter for readable UI text.",
    dont: "Do not mix too many fonts or font sizes.",
  },
};

export default function App() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "design-system-page dark-mode" : "design-system-page"}>
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h1>Velvet UI</h1>
        <p>Bakery Design System</p>

        <nav>
          <span>Introduction</span>
          <span>Foundations</span>
          <span>Components</span>
          <span>States</span>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <p>Components / Introduction</p>

          <button
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* HOME PAGE */}
        {!activeComponent && (
          <>
            {/* HERO */}
            <section className="hero">
              <h1>
                Velvet UI <span>Bakery components</span>
              </h1>

              <p>
                A reusable design system for a bakery brand. This page documents
                colors, typography, components, variants, and interaction
                states.
              </p>

              <button className="explore-btn">
                Explore components
              </button>
            </section>

            {/* FOUNDATIONS */}
            <section className="foundation-card">
              <h2>Foundations</h2>
              <p>Brand colors and visual tokens.</p>

              <div className="color-grid">
                <div className="color-box cream">#FFF8EF</div>
                <div className="color-box blush">#EAD7CF</div>
                <div className="color-box caramel">#8A5634</div>
                <div className="color-box cocoa">#1F1713</div>
              </div>
            </section>

            {/* COMPONENT GRID */}
            <section className="components-section">
              <h2>Base components</h2>

              <p>
                Click a component card to view its variations and states.
              </p>

              <div className="component-grid">
                {components.map((item) => (
                  <button
                    className="component-card"
                    key={item}
                    onClick={() => setActiveComponent(item)}
                  >
                    <div className="preview">
                      {/* BUTTONS */}
                      {item === "Buttons" && (
                        <div className="preview-row">
                          <span className="mini-btn">Order</span>

                          <span className="mini-btn secondary">
                            View
                          </span>
                        </div>
                      )}

                      {/* BADGES */}
                      {item === "Badges" && (
                        <div className="preview-row">
                          <span className="badge green">
                            Fresh
                          </span>

                          <span className="badge brown">
                            Best
                          </span>
                        </div>
                      )}

                      {item === "Toggles" && (
                        <div className="toggle-preview">
                          <span className="toggle on"></span>
                          <span className="toggle off"></span>
                        </div>
                      )}

                      {/* INPUTS */}
                      {item === "Inputs" && (
                        <span className="fake-input">
                          email@bakery.com
                        </span>
                      )}

                      {/* PRODUCT CARDS */}
                      {item === "Product Cards" && (
                        <div className="mini-card">
                          <img
                            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                            alt="Berry Cake"
                            className="mini-card-image"
                          />

                          <p>Berry Cake</p>
                        </div>
                      )}

                      {/* NAVIGATION */}
                      {item === "Navigation" && (
                        <div className="mini-nav">
                          <span className="active-nav">
                            Home
                          </span>

                          <span>Menu</span>
                          <span>About</span>
                        </div>
                      )}

                      {/* ALERTS */}
                      {item === "Alerts" && (
                        <div className="mini-alert">
                          Order added successfully
                        </div>
                      )}

                      {/* COLORS */}
                      {item === "Color Tokens" && (
                        <div className="mini-colors">
                          <span className="swatch cream"></span>
                          <span className="swatch blush"></span>
                          <span className="swatch caramel"></span>
                          <span className="swatch cocoa"></span>
                        </div>
                      )}

                      {/* TYPOGRAPHY */}
                      {item === "Typography" && (
                        <div className="mini-type">
                          <h4>Heading</h4>
                          <p>Body text</p>
                        </div>
                      )}
                    </div>

                    <div className="card-footer">
                      <h3>{item}</h3>
                      <p>1 component + 3 states</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {/* DETAIL PAGE */}
        {activeComponent && (
          <section className="detail-page">
            <button
              className="back-btn"
              onClick={() => setActiveComponent(null)}
            >
              ← Back
            </button>

            <h1>{activeComponent}</h1>

            <p>
              Variations and states for the{" "}
              {activeComponent} component.
            </p>

            <div className="example-box">
              {/* BUTTON STATES */}
              {activeComponent === "Buttons" && (
                <>
                  <h2>Button States</h2>

                  <div className="state-grid">
                    <button className="mini-btn">
                      Default
                    </button>

                    <button className="mini-btn hover-btn">
                      Hover
                    </button>

                    <button className="mini-btn active-btn">
                      Active
                    </button>

                    <button
                      className="mini-btn disabled-btn"
                      disabled
                    >
                      Disabled
                    </button>
                  </div>
                </>
              )}

              {/* BADGE STATES */}
              {activeComponent === "Badges" && (
                <>
                  <h2>Badge States</h2>

                  <div className="state-grid">
                    <span className="badge green">
                      Fresh
                    </span>

                    <span className="badge brown">
                      Best Seller
                    </span>

                    <span className="badge pink">
                      Limited
                    </span>

                    <span className="badge disabled">
                      Disabled
                    </span>
                  </div>
                </>
              )}

             {activeComponent === "Toggles" && (
  <>
    <h2>Toggle States</h2>

    <div className="toggle-states">
      <div>
        <span className="toggle"></span>
        <p>Off</p>
      </div>

      <div>
        <span className="toggle on"></span>
        <p>On</p>
      </div>

      <div>
        <span className="toggle disabled"></span>
        <p>Disabled</p>
      </div>
    </div>
  </>
)}

              {/* INPUT STATES */}
              {activeComponent === "Inputs" && (
                <>
                  <h2>Input States</h2>

                  <div className="input-stack">
                    <input placeholder="Default input" />

                    <input
                      className="focus-demo"
                      placeholder="Focus input"
                    />

                    <input
                      className="error-input"
                      placeholder="Error input"
                    />

                    <input
                      className="success-input"
                      placeholder="Success input"
                    />

                    <input
                      disabled
                      placeholder="Disabled input"
                    />
                  </div>
                </>
              )}

              {/* PRODUCT CARD STATES */}
              {activeComponent === "Product Cards" && (
                <>
                  <h2>Product Card States</h2>

                  <div className="product-grid">
                    <div className="product-state-card">
                      <img
                        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                        alt=""
                      />

                      <h3>Default Card</h3>

                      <p>
                        Default product card state.
                      </p>
                    </div>

                    <div className="product-state-card hover-card">
                      <img
                        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                        alt=""
                      />

                      <h3>Hover State</h3>

                      <p>
                        Hover interaction styling applied.
                      </p>
                    </div>

                    <div className="product-state-card selected-card">
                      <img
                        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                        alt=""
                      />

                      <h3>Selected State</h3>

                      <p>
                        Selected styling for featured
                        products.
                      </p>
                    </div>

                    <div className="product-state-card disabled-card">
                      <img
                        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                        alt=""
                      />

                      <h3>Disabled State</h3>

                      <p>
                        Disabled/unavailable product
                        appearance.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* NAVIGATION */}
              {activeComponent === "Navigation" && (
                <>
                  <h2>Navigation States</h2>

                  <div className="nav-demo">
                      <span className="nav-state default-nav">Default</span>
                      <span className="nav-state hover-nav">Hover</span>
                      <span className="nav-state active-nav">Active</span>
                      <span className="nav-state disabled-nav">Disabled</span>
                  </div>
                </>
              )}

              {/* ALERTS */}
              {activeComponent === "Alerts" && (
                <>
                  <h2>Alert States</h2>

                  <div className="alert-stack">

                          <div className="alert success-alert">
                            Success alert
                          </div>

                          <div className="alert warning-alert">
                            Warning alert
                          </div>

                          <div className="alert error-alert">
                            Error alert
                          </div>

                  </div>
                </>
              )}

              {/* COLORS */}
              {activeComponent === "Color Tokens" && (
                <>
                  <h2>Color Tokens</h2>

                  <div className="color-grid large">
                    <div className="color-box cream">
                      Cream
                    </div>

                    <div className="color-box blush">
                      Blush
                    </div>

                    <div className="color-box caramel">
                      Caramel
                    </div>

                    <div className="color-box cocoa">
                      Cocoa
                    </div>
                  </div>
                </>
              )}

              {/* TYPOGRAPHY */}
              {activeComponent === "Typography" && (
                <>
                  <h2>Typography Scale</h2>

                  <div className="type-demo">
                    <h1>Heading 1</h1>

                    <h2>Heading 2</h2>

                    <h3>Heading 3</h3>

                    <p>
                      Body text for bakery UI systems.
                    </p>

                    <small>
                      Small supporting text.
                    </small>
                  </div>
                </>
              )}
            </div>

            {/* DOCS */}
            <div className="docs-grid">
              <div className="usage-card">
                <h2>Usage</h2>

                <p>
                  {
                    componentDocs[activeComponent]
                      .usage
                  }
                </p>
              </div>

              <div className="do-card">
                <h2>Do</h2>

                <p>
                  {componentDocs[activeComponent].do}
                </p>
              </div>

              <div className="dont-card">
                <h2>Don’t</h2>

                <p>
                  {
                    componentDocs[activeComponent]
                      .dont
                  }
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

