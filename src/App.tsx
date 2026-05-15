import { useState } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

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

const componentDocs: Record<string, { usage: string; do: string; dont: string }> = {
  Buttons: {
    usage: "Use buttons for important user actions like ordering, submitting, saving, or moving through a flow.",
    do: "Use one clear primary button per section.",
    dont: "Do not use too many primary buttons in the same area.",
  },
  Badges: {
    usage: "Use badges to label product status, categories, and quick information.",
    do: "Use short labels like Fresh, New, Best Seller, or Limited.",
    dont: "Do not use badges for long sentences.",
  },
  Inputs: {
    usage: "Use inputs for forms, search bars, newsletter signups, and custom cake requests.",
    do: "Use clear placeholder text and visible error states.",
    dont: "Do not leave users guessing what information is required.",
  },
  "Product Cards": {
    usage: "Use product cards to display bakery items in menus, featured sections, and order flows.",
    do: "Use the selected state for featured or chosen items.",
    dont: "Do not use disabled cards for available products.",
  },
  Navigation: {
    usage: "Use navigation to help users move between main sections of the bakery interface.",
    do: "Keep navigation labels short and easy to scan.",
    dont: "Do not overcrowd the navigation with too many links.",
  },
  Alerts: {
    usage: "Use alerts to communicate success, warning, and error messages.",
    do: "Use clear messages that explain what happened.",
    dont: "Do not use alerts for decorative text.",
  },
  "Color Tokens": {
    usage: "Use color tokens to keep the bakery brand consistent across components.",
    do: "Use colors consistently for background, accents, text, and states.",
    dont: "Do not randomly introduce new colors outside the system.",
  },
  Typography: {
    usage: "Use typography styles to create hierarchy across headings, labels, and body text.",
    do: "Use Playfair for headings and Inter for readable UI text.",
    dont: "Do not mix too many fonts or font sizes.",
  },
  Toggles: {
    usage: "Use toggles for turning settings on or off, such as dark mode, notifications, or pickup reminders.",
    do: "Use toggles only for settings that have a clear on/off state.",
    dont: "Do not use toggles for actions that need confirmation.",
  },
};

export default function App() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "design-system-page dark-mode" : "design-system-page"}>
      <aside className="sidebar">
        <h1>Velvet UI</h1>
        <p>Bakery Design System</p>

        <nav>
          <NavLink to="/components" onClick={() => setActiveComponent(null)}>
            Components
          </NavLink>
          <NavLink to="/documentation">Documentation</NavLink>
          <NavLink to="/release">Release Notes</NavLink>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <p>Velvet UI / Design System</p>

          <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <ComponentsPage
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
              />
            }
          />

          <Route
            path="/components"
            element={
              <ComponentsPage
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
              />
            }
          />

          <Route path="/documentation" element={<DocumentationPage />} />

          <Route path="/release" element={<ReleasePage />} />
        </Routes>
      </main>
    </div>
  );
}

function ComponentsPage({
  activeComponent,
  setActiveComponent,
}: {
  activeComponent: string | null;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <>
      {!activeComponent && (
        <>
          <section className="hero">
            <h1>
              Velvet UI <span>Bakery components</span>
            </h1>

            <p>
              A reusable design system for a bakery brand. This page documents
              colors, typography, components, variants, and interaction states.
            </p>

            <button className="explore-btn">Explore components</button>
          </section>

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

          <section className="components-section">
            <h2>Base components</h2>
            <p>Click a component card to view its variations and states.</p>

            <div className="component-grid">
              {components.map((item) => (
                <button
                  className="component-card"
                  key={item}
                  onClick={() => setActiveComponent(item)}
                >
                  <div className="preview">
                    {item === "Buttons" && (
                      <div className="preview-row">
                        <span className="mini-btn">Order</span>
                        <span className="mini-btn secondary">View</span>
                      </div>
                    )}

                    {item === "Badges" && (
                      <div className="preview-row">
                        <span className="badge green">Fresh</span>
                        <span className="badge brown">Best</span>
                      </div>
                    )}

                    {item === "Inputs" && (
                      <span className="fake-input">email@bakery.com</span>
                    )}

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

                    {item === "Navigation" && (
                      <div className="mini-nav">
                        <span className="active-nav">Home</span>
                        <span>Menu</span>
                        <span>About</span>
                      </div>
                    )}

                    {item === "Alerts" && (
                      <div className="mini-alert">Order added successfully</div>
                    )}

                    {item === "Color Tokens" && (
                      <div className="mini-colors">
                        <span className="swatch cream"></span>
                        <span className="swatch blush"></span>
                        <span className="swatch caramel"></span>
                        <span className="swatch cocoa"></span>
                      </div>
                    )}

                    {item === "Typography" && (
                      <div className="mini-type">
                        <h4>Heading</h4>
                        <p>Body text</p>
                      </div>
                    )}

                    {item === "Toggles" && (
                      <div className="toggle-preview">
                        <span className="toggle on"></span>
                        <span className="toggle"></span>
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

      {activeComponent && (
        <section className="detail-page">
          <button className="back-btn" onClick={() => setActiveComponent(null)}>
            ← Back
          </button>

          <h1>{activeComponent}</h1>
          <p>Variations and states for the {activeComponent} component.</p>

          <div className="example-box">
            {activeComponent === "Buttons" && (
              <>
                <h2>Button States</h2>

                <div className="state-grid">
                  <button className="mini-btn">Default</button>
                  <button className="mini-btn hover-btn">Hover</button>
                  <button className="mini-btn active-btn">Active</button>
                  <button className="mini-btn disabled-btn" disabled>
                    Disabled
                  </button>
                </div>
              </>
            )}

            {activeComponent === "Badges" && (
              <>
                <h2>Badge States</h2>

                <div className="state-grid">
                  <span className="badge green">Fresh</span>
                  <span className="badge brown">Best Seller</span>
                  <span className="badge pink">Limited</span>
                  <span className="badge disabled">Disabled</span>
                </div>
              </>
            )}

            {activeComponent === "Inputs" && (
              <>
                <h2>Input States</h2>

                <div className="input-stack">
                  <input placeholder="Default input" />
                  <input className="focus-demo" placeholder="Focus input" />
                  <input className="error-input" placeholder="Error input" />
                  <input className="success-input" placeholder="Success input" />
                  <input disabled placeholder="Disabled input" />
                </div>
              </>
            )}

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
                    <p>Default product card state.</p>
                  </div>

                  <div className="product-state-card hover-card">
                    <img
                      src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                      alt=""
                    />
                    <h3>Hover State</h3>
                    <p>Hover interaction styling applied.</p>
                  </div>

                  <div className="product-state-card selected-card">
                    <img
                      src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                      alt=""
                    />
                    <h3>Selected State</h3>
                    <p>Selected styling for featured products.</p>
                  </div>

                  <div className="product-state-card disabled-card">
                    <img
                      src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop"
                      alt=""
                    />
                    <h3>Disabled State</h3>
                    <p>Disabled/unavailable product appearance.</p>
                  </div>
                </div>
              </>
            )}

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

            {activeComponent === "Alerts" && (
              <>
                <h2>Alert States</h2>

                <div className="alert-stack">
                  <div className="alert success-alert">Success alert</div>
                  <div className="alert warning-alert">Warning alert</div>
                  <div className="alert error-alert">Error alert</div>
                </div>
              </>
            )}

            {activeComponent === "Color Tokens" && (
              <>
                <h2>Color Tokens</h2>

                <div className="color-grid large">
                  <div className="color-box cream">Cream</div>
                  <div className="color-box blush">Blush</div>
                  <div className="color-box caramel">Caramel</div>
                  <div className="color-box cocoa">Cocoa</div>
                </div>
              </>
            )}

            {activeComponent === "Typography" && (
              <>
                <h2>Typography Scale</h2>

                <div className="type-demo">
                  <h1>Heading 1</h1>
                  <h2>Heading 2</h2>
                  <h3>Heading 3</h3>
                  <p>Body text for bakery UI systems.</p>
                  <small>Small supporting text.</small>
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
          </div>

          <div className="docs-grid">
            <div className="usage-card">
              <h2>Usage</h2>
              <p>{componentDocs[activeComponent].usage}</p>
            </div>

            <div className="do-card">
              <h2>Do</h2>
              <p>{componentDocs[activeComponent].do}</p>
            </div>

            <div className="dont-card">
              <h2>Don’t</h2>
              <p>{componentDocs[activeComponent].dont}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function DocumentationPage() {
  const docsSections = [
    "Overview",
    "Foundations",
    "Components",
    "Accessibility",
    "Contribution",
  ];

  return (
    <section className="docs-page">
      <div className="docs-hero">
        <div>
          <span className="eyebrow">Velvet UI Docs</span>
          <h1>Documentation</h1>
          <p>
            Guidelines for building consistent bakery interfaces with Velvet UI:
            foundations, reusable components, interaction states, and accessibility
            expectations.
          </p>
        </div>

        <div className="docs-version">
          <span>Current version</span>
          <strong>1.0</strong>
          <p>Includes foundations, components, release notes, and usage rules.</p>
        </div>
      </div>

      <div className="docs-layout">
        <aside className="docs-toc" aria-label="Documentation sections">
          <p>On this page</p>
          {docsSections.map((section) => (
            <a href={`#${section.toLowerCase()}`} key={section}>
              {section}
            </a>
          ))}
        </aside>

        <div className="docs-content">
          <article className="docs-section" id="overview">
            <span className="section-label">01</span>
            <h2>System Overview</h2>
            <p>
              Velvet UI is a compact design system for bakery websites and order
              flows. It gives teams shared decisions for color, type, spacing,
              components, and UI states so new screens feel connected.
            </p>

            <div className="callout">
              Use this documentation when choosing a component, checking a state,
              or deciding whether a new pattern belongs in the system.
            </div>
          </article>

          <article className="docs-section" id="foundations">
            <span className="section-label">02</span>
            <h2>Foundations</h2>
            <p>
              Foundations are the visual decisions every component inherits. Keep
              them stable so product pages, forms, menus, and checkout moments
              feel like one brand.
            </p>

            <div className="token-table" role="table" aria-label="Foundation tokens">
              <div role="row">
                <strong role="cell">Color</strong>
                <span role="cell">Cream, blush, caramel, and cocoa create the core palette.</span>
              </div>
              <div role="row">
                <strong role="cell">Typography</strong>
                <span role="cell">Playfair Display is used for headings; Inter is used for UI text.</span>
              </div>
              <div role="row">
                <strong role="cell">Radius</strong>
                <span role="cell">Soft corners support the bakery brand while keeping controls readable.</span>
              </div>
            </div>
          </article>

          <article className="docs-section" id="components">
            <span className="section-label">03</span>
            <h2>Component Standards</h2>
            <p>
              Components should include usage guidance, available variants, and
              predictable states. Add examples only when they clarify a real UI
              decision.
            </p>

            <div className="standards-grid">
              <div>
                <h3>Required states</h3>
                <p>Default, hover, active, focused, disabled, and selected when relevant.</p>
              </div>
              <div>
                <h3>Usage notes</h3>
                <p>Explain where the component belongs and what problem it solves.</p>
              </div>
              <div>
                <h3>Content rules</h3>
                <p>Keep labels short, direct, and useful in ordering or browsing flows.</p>
              </div>
            </div>
          </article>

          <article className="docs-section" id="accessibility">
            <span className="section-label">04</span>
            <h2>Accessibility Notes</h2>
            <p>
              Every interactive element should communicate state clearly through
              contrast, focus treatment, text, and semantic HTML.
            </p>

            <ul className="docs-list">
              <li>Use visible focus styles for keyboard users.</li>
              <li>Do not communicate errors or success with color alone.</li>
              <li>Keep button and link text specific to the action.</li>
              <li>Use disabled states only when the reason is obvious nearby.</li>
            </ul>
          </article>

          <article className="docs-section" id="contribution">
            <span className="section-label">05</span>
            <h2>Contribution Checklist</h2>
            <p>
              Before adding a new component, check whether an existing pattern can
              be extended. New components should be reusable, named clearly, and
              documented with realistic bakery examples.
            </p>

            <div className="checklist">
              <label>
                <input type="checkbox" readOnly checked />
                Includes purpose and usage guidance
              </label>
              <label>
                <input type="checkbox" readOnly checked />
                Shows all meaningful states
              </label>
              <label>
                <input type="checkbox" readOnly checked />
                Uses existing tokens before adding new ones
              </label>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ReleasePage() {
  const releaseHighlights = [
    "Documentation page redesigned with structured sections",
    "Component gallery and state examples refreshed",
    "Responsive layout and dark mode styling improved",
  ];

  return (
    <section className="release-page">
      <div className="release-hero">
        <div>
          <span className="eyebrow">Changelog</span>
          <h1>Release Notes</h1>
          <p>
            Track updates to Velvet UI, including new components, documentation
            improvements, visual refinements, and planned work for upcoming
            versions.
          </p>
        </div>

        <div className="release-summary">
          <span>Latest release</span>
          <strong>v1.0</strong>
          <p>Initial system release for bakery interfaces.</p>
        </div>
      </div>

      <div className="release-layout">
        <article className="release-card featured-release">
          <div className="release-card-header">
            <div>
              <span className="release-date">Current</span>
              <h2>Version 1.0</h2>
            </div>
            <span className="status-pill stable">Stable</span>
          </div>

          <p>
            Velvet UI now includes the foundation styles, reusable components,
            interaction states, documentation patterns, and release structure
            needed for a small bakery design system.
          </p>

          <ul className="release-list">
            {releaseHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>

        <div className="release-grid">
          <article className="release-card">
            <div className="release-card-header">
              <h2>Added</h2>
              <span className="status-pill added">New</span>
            </div>
            <ul className="release-list">
              <li>Buttons, badges, inputs, product cards, navigation, alerts, color tokens, typography, and toggles.</li>
              <li>Component detail pages with examples for important states.</li>
              <li>Documentation sections for foundations, accessibility, and contribution guidance.</li>
            </ul>
          </article>

          <article className="release-card">
            <div className="release-card-header">
              <h2>Improved</h2>
              <span className="status-pill improved">Refined</span>
            </div>
            <ul className="release-list">
              <li>Cleaner spacing, more consistent card styling, and stronger hierarchy across pages.</li>
              <li>Responsive behavior for component grids, documentation content, and release sections.</li>
              <li>Dark mode colors for surfaces, text, callouts, and cards.</li>
            </ul>
          </article>

          <article className="release-card">
            <div className="release-card-header">
              <h2>Fixed</h2>
              <span className="status-pill fixed">Fixed</span>
            </div>
            <ul className="release-list">
              <li>Removed duplicate stylesheet rules that made page styling inconsistent.</li>
              <li>Aligned documentation and release pages with a clearer design-system layout.</li>
              <li>Normalized radii, borders, and typography so pages feel related.</li>
            </ul>
          </article>

          <article className="release-card">
            <div className="release-card-header">
              <h2>Coming Next</h2>
              <span className="status-pill planned">Planned</span>
            </div>
            <ul className="release-list">
              <li>Dropdowns, modals, mobile navigation, and loading states.</li>
              <li>Expanded accessibility documentation for keyboard and screen reader behavior.</li>
              <li>More realistic order-flow examples for bakery teams.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
