# YOCOM E-Commerce Frontend

A production-style, frontend-only e-commerce website built with Next.js App Router, React, Tailwind CSS, and Lucide icons.

This project includes:
- marketplace-style homepage and navigation
- dynamic product and collection routing
- global cart and wishlist state
- profile section with nested pages
- login/logout mock auth flow
- loading skeletons for route transitions
- fully functional buttons/forms (frontend simulation)

---

## 1) Tech Stack

- Next.js (App Router)
- React
- JavaScript + JSX (no TypeScript)
- Tailwind CSS
- Lucide React icons
- LocalStorage for frontend persistence

---

## 2) Project Structure

```text
src/
  app/
    (all route pages)
  components/
    layout/        # header, footer, site shell
    product/       # product cards, actions, grids
    profile/       # profile shell + profile nav
    providers/     # app provider wrapper
    sections/      # hero, feature strip, newsletter
    ui/            # reusable ui pieces (section title, skeleton)
  context/
    store-context.jsx   # auth + cart + wishlist global state
  data/
    products.js
    collections.js
    site.js
  lib/
    utils.js
```

---

## 3) Features Implemented

### A. Global Store (Frontend State)

`src/context/store-context.jsx`

State handled globally:
- `isLoggedIn`
- `cartItems`
- `wishlist`

Actions provided:
- `login()`
- `logout()`
- `addToCart(productId)`
- `updateQuantity(productId, quantity)`
- `removeFromCart(productId)`
- `toggleWishlist(productId)`
- `clearCart()`

Derived data:
- `cartCount`
- `wishlistCount`
- `cartProducts`
- `wishlistProducts`

Persistence:
- saves data into `localStorage`

---

### B. Authentication (Mock Frontend)

- `/login` page:
  - validates required fields
  - sets logged-in status in local state + localStorage
  - redirects to `/profile`
- `/logout` page:
  - clears session state
  - redirects to `/`

No backend/API is required for this flow.

---

### C. Cart + Wishlist Functionality

- Product cards support:
  - Add to Cart
  - Add/Remove Wishlist
- Product detail page supports:
  - Add to Cart
  - Add/Remove Wishlist
  - Buy Now
- Header shows real counters for:
  - cart items
  - wishlist items
- Cart page supports:
  - quantity increment/decrement
  - remove item
  - clear cart
  - dynamic totals
- Checkout submission clears cart and shows success state

---

### D. Profile Section (Nested Pages)

Routes under `/profile`:
- `/profile` (overview)
- `/profile/orders`
- `/profile/wishlist`
- `/profile/collections`
- `/profile/settings`

Profile behavior:
- protected on frontend (requires login state)
- if not logged in, prompts user to login
- includes sidebar navigation + logout action

---

### E. Dynamic Routing

Implemented dynamic routes:
- `/shop/[slug]` for product details
- `/collections/[slug]` for collection details

Both use:
- `generateStaticParams()`
- proper `notFound()` for invalid slugs

---

### F. Skeleton Loading States

Loading UI files:
- `src/app/shop/loading.jsx`
- `src/app/shop/[slug]/loading.jsx`
- `src/app/collections/[slug]/loading.jsx`
- `src/app/profile/loading.jsx`

Reusable skeleton component:
- `src/components/ui/skeleton.jsx`

---

## 4) All Pages and What They Do

### Storefront Pages
- `/` -> Home with hero, features, categories, featured products, deals, newsletter
- `/shop` -> Product catalog with category filtering
- `/shop/[slug]` -> Product details and actions
- `/deals` -> Discounted products
- `/categories` -> Category listing
- `/brands` -> Brand listing
- `/collections` -> Collection listing
- `/collections/[slug]` -> Dynamic collection products

### Shopping Pages
- `/cart` -> Cart list, quantity controls, totals, clear cart
- `/checkout` -> Checkout form + success simulation
- `/wishlist` -> User wishlist products
- `/track-order` -> Track order form simulation

### User/Profile Pages
- `/login` -> Login mock
- `/logout` -> Logout flow
- `/profile` -> Profile dashboard
- `/profile/orders` -> Orders list
- `/profile/wishlist` -> Wishlist within profile
- `/profile/collections` -> Saved collections
- `/profile/settings` -> Profile settings form
- `/account` -> Redirects to `/profile`

### Informational Pages
- `/about`
- `/contact`
- `/faq`
- `/policies/shipping`
- `/policies/returns`
- `/policies/privacy`

---

## 5) Buttons/Forms Functional Coverage

All major interactive UI elements are wired:
- add/remove wishlist buttons
- add to cart buttons
- quantity controls in cart
- remove/clear cart actions
- checkout submit flow
- login/logout flow
- newsletter submit
- contact form submit
- track order submit
- profile settings submit

All form submits prevent page refresh and show a state/result message.

---

## 6) Run Locally

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint code:

```bash
npm run lint
```

---

## 7) Notes

- This is intentionally frontend-only (no backend APIs/database).
- Replace mock auth/state with backend integration when needed.
- Replace static product data in `src/data` with API responses when you add backend services.
