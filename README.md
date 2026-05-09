# Velvet & Crumbs — README & Design System

## Project Overview

Velvet & Crumbs is a modern bakery landing page built with React, TypeScript, and CSS. The experience focuses on creating a soft, elegant, and editorial-style dessert brand inspired by luxury bakery websites and high-end café aesthetics.

The interface combines:

* Large typography
* Full-screen hero imagery
* Floating UI cards
* Soft pastel colors
* Glassmorphism-inspired overlays
* Product showcase cards
* Testimonials and social proof
* Responsive layouts

The overall visual direction is intended to feel:

* Warm
* Feminine
* Premium
* Minimal
* Editorial
* Cozy

---

# Technical Stack

## Frontend

* React
* TypeScript
* Vite
* CSS3

## Styling

* Custom CSS
* CSS Grid
* Flexbox
* Responsive media queries
* Google Fonts

## Fonts

### Playfair Display

Used for:

* Headings
* Product titles
* Editorial typography

Reason:
Adds a luxury bakery/editorial feeling while making the interface feel elegant and premium.

### Inter

Used for:

* Body text
* Navigation
* Buttons
* Supporting content

Reason:
Creates readability and contrast against the decorative serif font.

---

# Folder Structure

```bash
src/
 ├── assets/
 │    └── images/
 │         ├── dessert 1.jpg
 │         ├── dessert 2.jpg
 │         ├── dessert 3.jpg
 │         ├── dessert 4.jpg
 │         └── dessert 5.jpg
 │
 ├── App.tsx
 ├── App.css
 └── main.tsx
```

---

# Key Features

## Hero Section

### Features

* Full-screen dessert hero image
* Overlay gradient for readability
* Large editorial typography
* Floating bakery badges
* CTA button

### UX Purpose

The hero section immediately establishes the bakery aesthetic and creates emotional engagement through large imagery and minimal text.

The oversized typography creates visual hierarchy and improves memorability.

---

## Floating UI Cards

### Examples

* Freshly Baked Today
* Best Seller
* Limited Edition
* 4.9 ★ Reviews

### UX Purpose

The floating cards act as social proof and visual decoration while helping the hero section feel more dynamic.

They also break away from the original reference design and add a more interactive and modern aesthetic.

---

## Product Cards

### Features

* Product badges
* Rounded cards
* Hover animations
* Product imagery
* Product descriptions

### UX Purpose

The product cards create visual consistency while making desserts easy to scan.

Hover effects provide micro-interactions that increase engagement.

---

## Testimonials Section

### Features

* Customer reviews
* Profile circles
* Soft card backgrounds
* Minimal typography

### UX Purpose

The testimonials create trust and emotional credibility.

This section also adds warmth and personality to the experience.

---

## Footer

### Includes

* Brand information
* Navigation links
* Store information
* Social links

### UX Purpose

The footer provides structure and closes the experience with brand consistency.

---

# Design System

## Color Palette

### Primary Background

```css
#fff8ef
```

Purpose:
Creates a warm cream bakery aesthetic.

---

### Secondary Background

```css
#ead7cf
```

Purpose:
Used for product cards and soft surfaces.

---

### Accent Brown

```css
#6b3721
```

Purpose:
Buttons, floating cards, and emphasis.

---

### Text Color

```css
#1f1713
```

Purpose:
High readability while maintaining warmth.

---

### Supporting Text

```css
#6b5a57
```

Purpose:
Secondary content and descriptions.

---

# Typography System

## Heading Styles

### Hero Heading

```css
font-size: clamp(82px, 7vw, 120px);
```

Purpose:
Creates editorial hierarchy and strong visual identity.

---

### Section Headings

```css
font-size: 42px;
```

Purpose:
Maintains consistency throughout the site.

---

### Body Text

```css
line-height: 1.6;
```

Purpose:
Improves readability and spacing.

---

# Layout System

## Grid Usage

The website heavily uses CSS Grid for:

* Feature layouts
* Product layouts
* Footer layouts
* Testimonials

Example:

```css
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

---

## Border Radius System

Rounded corners are used consistently across the interface.

### Examples

```css
border-radius: 24px;
border-radius: 42px;
border-radius: 999px;
```

Purpose:
Creates softness and reinforces the bakery aesthetic.

---

# Interaction Design

## Hover Effects

### Product Hover

```css
transform: translateY(-10px);
```

Purpose:
Adds depth and interactivity.

---

## Button Hover

```css
transform: scale(1.05);
```

Purpose:
Provides tactile feedback.

---

# Responsive Design

## Mobile Adaptation

The project includes responsive media queries.

### Mobile Changes

* Navigation hides on smaller screens
* Layouts stack vertically
* Floating cards disappear
* Grid systems become single-column
* Padding decreases for smaller devices

Example:

```css
@media (max-width: 900px)
```

---

# Accessibility Considerations

## Readability

* Large text sizes
* High contrast text
* Spacious layouts
* Clear visual hierarchy

## Interaction

* Large buttons
* Hover feedback
* Consistent spacing

## Responsive Design

* Mobile-friendly layouts
* Flexible typography
* Adaptive grid systems

---

# Future Improvements

## Potential Features

* Dark mode
* Animated dessert carousel
* Interactive menu filtering
* Shopping cart
* Checkout experience
* Bakery ordering flow
* Reservation system
* Animated scroll transitions
* Mobile navigation menu
* Dessert category filtering
* Video hero background

---

# Design Inspiration

The visual direction was inspired by:

* Editorial magazine layouts
* Luxury dessert brands
* Modern café websites
* Pinterest bakery aesthetics
* Soft UI trends
* Glassmorphism overlays

---

# Conclusion

Velvet & Crumbs was designed to create an emotional and visually rich dessert experience that feels elegant, warm, and modern.

The combination of oversized typography, photography, soft colors, and layered UI elements helps the website stand apart from a standard bakery landing page while still maintaining usability and responsiveness.

The project demonstrates:

* Frontend development
* Responsive design
* UI design systems
* Visual hierarchy
* Branding consistency
* Interaction design
* Layout design
* Component-based thinking
* Modern web styling techniques

