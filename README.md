# Sembark Assignment

A modern e-commerce web application built using React, TypeScript, Vite, Tailwind CSS, React Query, and Context API.

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Query
- Axios
- Context API
- Cypress
- React Lazy Load Image Component
- Sonner Toast

---

# Features

## Home Page

- Product listing page
- Responsive product grid
- Product cards with:
  - Product image
  - Title
  - Category
  - Price
  - View Product button

---

## Product Detail Page

- Dynamic product detail route
- Multiple product images
- Thumbnail image switching
- Product information
- Add to Cart functionality

---

## Cart Page

- Cart item listing
- Quantity display
- Order summary section
- Total price calculation
- Empty cart handling
- Remove item from cart
- Cart persistence using localStorage

### Cart Interaction

- Remove button appears only when user hovers over the cart card
- Smooth hover animation
- Auto hides when cursor leaves the card

---

# Filtering & Search

- Product search by title
- Category based filtering
- Price range filtering
- URL synced filters
- Shareable filtered URLs
- Debounced search input
- Clear filters support
- Empty state handling

---

# URL Synchronization

Filters are synchronized with URL query parameters.

Supports:

- Browser refresh persistence
- Shareable URLs
- Deep linking
- Browser back/forward navigation

---

# State Management

- Cart managed using Context API
- Server state managed using React Query
- URL based filter state management

---

# User Flow

## Add To Cart Flow

```txt
Home Page
   ↓
View Product
   ↓
Product Detail Page
   ↓
Add To Cart
   ↓
Cart Page
```

---

## Product Viewing Flow

```txt
Home Page
   ↓
View Product
   ↓
Product Detail Page
```

---

# Architecture Highlights

- Reusable component architecture
- API abstraction layer
- Custom React Query hooks
- URL driven filter state
- Debounced API search
- Reusable error handling
- Responsive layout system

---

# Performance Optimizations

- React Query caching
- Debounced search requests
- Lazy loaded product images
- Memoized filter computations
- Optimized re-renders using useMemo

---

# Project Setup

## 1. Clone Repository

```bash
git clone https://github.com/AakashBurman/sembark-assignment.git
```

---

## 2. Move Into Project

```bash
cd sembark-assignment
```

---

## 3. Install Dependencies

Using Yarn:

```bash
yarn
```

---

## 4. Create Environment File

Create:

```txt
.env
```

Add:

```env
VITE_API_URL=https://api.escuelajs.co
VITE_API_VERSION=api/v1
VITE_API_BASE_URL=${VITE_API_URL}/${VITE_API_VERSION}
```

---

# Available Scripts

```bash
yarn dev
yarn build
yarn preview
yarn cypress
yarn test:e2e
```

---

# Run Project

```bash
yarn dev
```

Project will run on:

```txt
http://localhost:5173
```

---

# Build Project

```bash
yarn build
```

---

# Preview Production Build

```bash
yarn preview
```

---

# Cypress Setup

Run Cypress UI:

```bash
yarn cypress
```

Run Cypress headless tests:

```bash
yarn test:e2e
```

---

# E2E Testing

Application includes Cypress end-to-end testing for:

- Product listing
- Product detail navigation
- Add to cart flow
- URL synced filters
- Filter persistence
- Search functionality

---

# Folder Structure

```txt
src/
│
├── api/
├── assets/
├── components/
├── context/
├── hooks/
├── pages/
├── routes/
├── services/
├── utils/
│
├── App.tsx
└── main.tsx

cypress/
│
├── e2e/
```

---

# API Configuration

Axios instance is configured with:

- Base URL
- Timeout
- Request Interceptor
- Response Interceptor

Features:

- Centralized API handling
- Global error handling

---

# Image Handling

- Lazy loading enabled
- Fallback image support added
- Broken image handling included

---

# Error Handling

Application includes:

- Full screen loader
- Error page
- Empty product state
- Empty cart state
- Graceful API error handling
- Defensive rendering using optional chaining

---

# Responsive Design

Fully responsive for:

- Mobile
- Tablet
- Desktop

Includes:

- Responsive filters section
- Responsive product grids
- Adaptive cart layout
- Mobile first responsive design

---

# Important Notes

## Tailwind Dynamic Class Issue

Dynamic Tailwind classes were replaced with inline styles where needed to avoid Tailwind purge/build issues.

---

## React Select Dropdown Layering

React Select dropdowns use portal rendering with custom z-index handling to prevent overlap issues.

---

# Future Improvements

- Quantity update support
- Sorting support
- Pagination / Infinite scrolling
- Wishlist functionality
- Authentication & protected routes
- Checkout integration
- Order history
- Payment gateway integration
- Dark mode

---

# Screenshots

Add screenshots or GIFs here for:

- Home Page
- Product Detail Page
- Cart Page
- Filters
- Empty State

---

# Author

Aakash Burman
