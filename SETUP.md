# Installation & Setup Guide

## Prerequisites

- **Node.js** v18 or higher
- **npm** v8 or higher (or yarn/pnpm)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-themes (for dark mode)
- lucide-react (for icons)
- axios (for API calls)

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 3. Access the Application

1. **Open browser**: Navigate to `http://localhost:3000`
2. **Auto-redirect**: You'll be automatically redirected to the login page
3. **Log in** with demo credentials:

   **Manager Account:**
   - Email: `admin@commodities.com`
   - Password: `password123`

   **Store Keeper Account:**
   - Email: `keeper@commodities.com`
   - Password: `password123`

## Project Structure

```
commodities-management/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx                 # Login page
│   ├── (protected)/
│   │   ├── dashboard/
│   │   │   └── page.tsx                 # Manager-only dashboard
│   │   ├── products/
│   │   │   └── page.tsx                 # Products listing
│   │   └── add-product/
│   │       └── page.tsx                 # Add/Edit product form
│   ├── api/
│   │   ├── auth/
│   │   │   └── login/
│   │   │       └── route.ts             # Login API
│   │   └── products/
│   │       └── route.ts                 # Products API
│   ├── layout.tsx                       # Root layout
│   ├── page.tsx                         # Home/Redirect page
│   ├── globals.css                      # Global styles
│   └── unauthorized/
│       └── page.tsx                     # Access denied page
├── components/
│   ├── auth/
│   │   └── ProtectedRoute.tsx           # Route protection wrapper
│   ├── navigation/
│   │   └── Navbar.tsx                   # Navigation bar
│   ├── products/
│   │   ├── ProductForm.tsx              # Add/Edit form
│   │   ├── ProductCard.tsx              # Product card component
│   │   └── ProductList.tsx              # Products grid
│   └── theme/
│       └── ThemeToggle.tsx              # Dark/Light mode toggle
├── context/
│   └── AuthContext.tsx                  # Auth provider & context
├── hooks/
│   ├── useAuth.ts                       # Auth hook
│   ├── useProducts.ts                   # Products hook
│   └── useTheme.ts                      # Theme hook
├── lib/
│   ├── types.ts                         # TypeScript types
│   ├── auth.ts                          # Auth utilities
│   └── mockData.ts                      # Sample data
├── public/                              # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .gitignore
├── .env.example
└── README.md
```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server with hot-reload.

### Production Build

```bash
npm run build
npm start
```

Builds the application for production and starts the server.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality.

## Features Implemented

### ✅ Authentication (5 Points)
- Email/password login
- Secure token-based sessions
- Role-based access control

### ✅ Dashboard (30 Points)
- Manager-only access
- Real-time statistics
- Product value calculations
- Low stock monitoring
- Top products by value table

### ✅ Product Management (25 Points)
- View all products (accessible to both roles)
- Add new products with validation
- Edit existing products
- Product categories and units

### ✅ UI Enhancements (40 Points)
- **Light/Dark Mode** (15 Points)
  - Toggle button in navbar
  - Persistent theme preference (localStorage)
  - System theme detection
  - Smooth transitions

- **Role-Based UI** (25 Points)
  - Dynamic navigation menu
  - Hidden dashboard link for Store Keepers
  - Protected routes with redirect
  - Authorization error page
  - Role display in navbar

## API Endpoints

### Authentication

#### POST `/api/auth/login`

**Request:**
```json
{
  "email": "admin@commodities.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "id": "user1",
    "email": "admin@commodities.com",
    "role": "manager",
    "name": "Admin Manager"
  },
  "token": "dXNlcjE6MTczMjExMDkwMDAwMA=="
}
```

### Products

#### GET `/api/products`

Returns all products in inventory.

#### POST `/api/products`

**Request:**
```json
{
  "name": "New Product",
  "quantity": 100,
  "unit": "kg",
  "price": 250,
  "description": "Product description",
  "category": "Grains"
}
```

#### PUT `/api/products?id=<productId>`

Updates an existing product.

## Role-Based Access Matrix

| Feature | Manager | Store Keeper |
|---------|---------|--------------|
| Login | ✅ | ✅ |
| Dashboard | ✅ | ❌ |
| View Products | ✅ | ✅ |
| Add Products | ✅ | ✅ |
| Edit Products | ✅ | ✅ |
| Theme Toggle | ✅ | ✅ |

## Assumptions & Customizations

### Sample Data
- 5 pre-loaded products (Wheat, Rice, Corn, Soybeans, Barley)
- Realistic pricing and quantities
- Multiple product categories

### Theme Implementation
- Uses `next-themes` for theme management
- Supports system theme detection
- localStorage persistence
- Tailwind dark mode support

### Authentication
- Mock authentication (no backend required)
- Token stored in localStorage
- Auto-logout on browser refresh if token missing
- Session validation on page load

### API Simulation
- All API calls are simulated in-memory
- No database persistence (resets on refresh)
- Mock users with fixed credentials

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
npm run build

# Deploy the 'out' or '.next' folder
# Or use Netlify CLI
netlify deploy
```

## Troubleshooting

### Issue: Dependencies not installing
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
**Solution:**
```bash
npm run dev -- -p 3001
```

### Issue: Dark mode not working
**Solution:**
- Ensure cookies are not disabled
- Clear browser cache
- Check that `suppressHydrationWarning` is in `<html>` tag

### Issue: Login not working
**Solution:**
- Verify you're using correct credentials:
  - Manager: `admin@commodities.com` / `password123`
  - Store Keeper: `keeper@commodities.com` / `password123`
- Check browser console for errors

## Future Enhancements

1. **Backend Integration**
   - Replace mock API with real endpoints
   - Add MongoDB/PostgreSQL database

2. **Advanced Features**
   - Inventory alerts
   - Supplier management
   - Sales analytics
   - Export reports (CSV/PDF)

3. **Security**
   - JWT authentication
   - Refresh tokens
   - Password reset
   - Email verification

4. **Performance**
   - Image optimization
   - Code splitting
   - Caching strategies
   - API pagination

## Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Happy coding! 🚀**
