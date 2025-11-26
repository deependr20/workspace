# Commodities Management System - Next.js

A modern role-based Commodities Management System built with Next.js, featuring authentication, dashboard, product management, and theme switching.

## Features

✅ **Authentication**
- Email/password login with validation
- Secure session management
- Role-based access (Manager & Store Keeper)

✅ **Dashboard** (Manager Only)
- Statistics and insights for commodities
- Product overview and analytics

✅ **Product Management**
- View all products (accessible to both roles)
- Add new products (Manager & Store Keeper)
- Edit existing products

✅ **UI Enhancements**
- Light/Dark mode toggle with localStorage persistence
- Role-based menu restrictions
- Protected routes with middleware

✅ **Role-Based Access Control**
| Feature | Manager | Store Keeper |
|---------|---------|--------------|
| Login | ✅ | ✅ |
| Dashboard | ✅ | ❌ |
| View Products | ✅ | ✅ |
| Add/Edit Products | ✅ | ✅ |
| Role-Based UI | ✅ | ✅ |

## Sample Credentials

- **Manager:** email@manager.com / password123
- **Store Keeper:** keeper@store.com / password123

## Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── api/
│   ├── auth/
│   │   └── login/
│   │       └── route.ts          # Login API endpoint
│   └── products/
│       └── route.ts               # Products API endpoints
├── (auth)/
│   └── login/
│       └── page.tsx               # Login page
├── (protected)/
│   ├── dashboard/
│   │   └── page.tsx               # Manager dashboard
│   ├── products/
│   │   └── page.tsx               # Products listing
│   └── add-product/
│       └── page.tsx               # Add/Edit product form
├── layout.tsx                      # Root layout with theme provider
└── page.tsx                        # Home/redirect page
components/
├── auth/
│   └── ProtectedRoute.tsx          # Route protection wrapper
├── navigation/
│   └── Navbar.tsx                  # Navigation with role-based menu
├── products/
│   ├── ProductForm.tsx             # Add/Edit product form
│   ├── ProductCard.tsx             # Product display card
│   └── ProductList.tsx             # Products grid
├── theme/
│   └── ThemeToggle.tsx             # Dark/Light mode toggle
└── common/
    ├── Button.tsx                  # Reusable button
    ├── Input.tsx                   # Reusable input
    └── Loading.tsx                 # Loading spinner
hooks/
├── useAuth.ts                      # Authentication hook
├── useTheme.ts                     # Theme hook
└── useProducts.ts                  # Products management hook
lib/
├── auth.ts                         # Auth utilities
├── types.ts                        # TypeScript types
└── mockData.ts                     # Sample data
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theme:** next-themes
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **State Management:** React Context API

## Assumptions & Sample Data

### Users
- **Manager Account:** 
  - Email: admin@commodities.com
  - Password: password123
  - Role: manager

- **Store Keeper Account:**
  - Email: keeper@commodities.com
  - Password: password123
  - Role: storekeeper

### Sample Products
- Wheat (1000 kg)
- Rice (500 kg)
- Corn (750 kg)
- Soybeans (600 kg)
- Barley (400 kg)

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product
- `PUT /api/products/:id` - Edit product

## Key Features

### 1. Role-Based Access Control
- Routes are protected using middleware
- UI elements dynamically show/hide based on user role
- Unauthorized access redirects to login

### 2. Theme Switching
- Toggle between light and dark modes
- Preferences persist in localStorage
- Smooth transitions between themes

### 3. Session Management
- Secure token-based session storage
- Auto-logout on token expiry
- Session persistence on page reload

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy
```

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Real API integration
- Advanced filtering and search
- Export product data (CSV/PDF)
- User management dashboard
- Analytics and reports
- Real-time notifications

---

**Built with ❤️ for the Slooze Challenge**
