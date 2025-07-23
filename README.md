# VELOCITY Racing – F1 Streetwear Ecommerce Prototype (Assignment)

A minimal, modern e-commerce experience for an F1-inspired streetwear brand.  
Designed for clarity, speed, and UX focus using Next.js, React, Tailwind CSS, and Radix UI.

---

## Why This Approach Stands Out

- **Purposeful Minimalism:** Only essential flows/pages are built, ensuring clarity and fast iteration.
- **UX-First:** Navigation, search, and cart flows are intuitive and frictionless.
- **Smart Time Use:** Only the first category and its flows are fully functional; others are styled placeholders to show breadth without wasted effort.
- **Consistent Design:** All elements (including non-functional icons/links) are styled for a cohesive, premium feel.
- **Accessible & Responsive:** Built with Radix UI and Tailwind for accessibility and mobile-friendliness.

---

## Required Pages & Flows

### 1. Home Page

- Hero section with brand messaging.
- “View All” button below hero, linking to Products page.
- Category section:
  - ≥5 categories (Tees, Jackets, Caps, Accessories, Limited).
  - Only the first category is clickable (navigates to Category Page); others are styled placeholders.

### 2. Category Page (First Category Only)

- Grid/list of products (placeholder images allowed).
- Clicking a product opens its Product Page.

### 3. Product Page

- Product details and image.
- Search input (on same page):
  - Filters products live.
  - If no items match, show a clear empty state message.
  - If some match, show only those; if none, show empty message.

### 4. Cart Page

- List of added items.
- Quantity adjust controls.
- Subtotal placeholder.
- Checkout CTA (no checkout flow required).

### 5. Authentication Pages

- Login Page
- Sign Up Page
- Forgot Password Page with OTP via Email:
  - User requests OTP via email.
  - After correct OTP, user can reset password.
- Data capture to Google Sheet (for signups/password resets).

### 6. Additional Features (Design Only)

- Icons/links for Wishlist, Profile, etc.  
  (No extra pages needed—just consistent presence and styling.)

---

## Tech Stack

- **Next.js** – App directory, routing, SSR
- **React** – UI components
- **Tailwind CSS** – Utility-first styling
- **Radix UI** – Accessible primitives
- **TypeScript** – Type safety
- **Lucide Icons** – Modern icon set

---

## Project Structure

```
app/                # Next.js app directory (pages, layouts, API routes)
components/         # Reusable UI and layout components
contexts/           # React context providers (e.g., cart)
hooks/              # Custom React hooks
lib/                # Utilities and design tokens
public/             # Static assets (images, icons)
styles/             # Global and component CSS
```

---

## Getting Started

1. **Install dependencies:**

   ```sh
   pnpm install
   ```

2. **Run the development server:**

   ```sh
   pnpm dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

---

## Deployment

The latest prototype is deployed at:  
[https://v0-framer-streetwear-website.vercel.app/](https://v0-framer-streetwear-website.vercel.app/)

---

## Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server

---

## License

MIT

---

© 2025 VELOCITY Racing. Engineered for Excellence.
