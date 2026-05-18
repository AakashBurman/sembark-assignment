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

### Cart Interaction

- Remove button appears only when user hovers over the cart card
- Smooth hover animation
- Auto hides when cursor leaves the card

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
- Token support ready

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
- Empty cart state
- Optional chaining (`?.`) usage
- Fallback UI rendering

---

# Responsive Design

Fully responsive for:

- Mobile
- Tablet
- Desktop

---

# Important Notes

## Tailwind Dynamic Class Issue

Dynamic Tailwind classes were replaced with inline styles where needed to avoid Tailwind purge/build issues.

---

## Cart State

Cart is currently managed using Context API.

---

# Future Improvements

- Quantity update support
- Authentication
- Persistent cart storage
- Checkout integration
- Search & filtering
- Pagination
- Wishlist
- Dark mode

---

# Author

Aakash Burman
