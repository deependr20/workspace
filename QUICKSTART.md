# Quick Reference Guide

## Getting Started (30 seconds)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

## Demo Login Credentials

### Manager Account
- **Email:** admin@commodities.com
- **Password:** password123
- **Permissions:** Dashboard, Products, Add/Edit

### Store Keeper Account
- **Email:** keeper@commodities.com
- **Password:** password123
- **Permissions:** Products, Add/Edit

## File Navigation

### Pages
| Page | Path | Role | Purpose |
|------|------|------|---------|
| Login | `/login` | All | User authentication |
| Dashboard | `/dashboard` | Manager | Stats & overview |
| Products | `/products` | Manager, SK | View inventory |
| Add Product | `/add-product` | Manager, SK | Create/edit items |
| Home | `/` | All | Auto-redirect |

### Components
| Component | Path | Usage |
|-----------|------|-------|
| Navbar | `components/navigation/Navbar.tsx` | Main navigation |
| Theme Toggle | `components/theme/ThemeToggle.tsx` | Dark/Light switch |
| Protected Route | `components/auth/ProtectedRoute.tsx` | Route protection |
| Product Form | `components/products/ProductForm.tsx` | Product CRUD |
| Product Card | `components/products/ProductCard.tsx` | Product display |
| Product List | `components/products/ProductList.tsx` | Grid layout |

## API Endpoints

### Login
```
POST /api/auth/login
{
  "email": "string",
  "password": "string"
}
```

### Products
```
GET /api/products              # Get all
POST /api/products             # Create
PUT /api/products?id=<id>      # Update
```

## Features Checklist

### Core Features (50 Points)
- [x] Login with email/password (5)
- [x] Dashboard (Manager only) (30)
- [x] View Products (both roles) (10)
- [x] Add/Edit Products (5)

### UI Enhancements (40 Points)
- [x] Light/Dark Mode (15)
- [x] Role-Based Menu (25)

### Bonus (25+ Points)
- [x] Protected Routes (5)
- [x] Route Guards (5)
- [x] Responsive Design (5)
- [x] Loading States (5)
- [x] Error Handling (5)

## Key Hooks

### useAuth
```typescript
const { user, isAuthenticated, login, logout, isLoading } = useAuth();
```

### useProducts
```typescript
const { products, isLoading, addProduct, updateProduct } = useProducts();
```

### useTheme (from next-themes)
```typescript
const { theme, setTheme } = useTheme();
```

## Tailwind Classes Used

### Layout
- `min-h-screen`: Full screen height
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`: Responsive grid
- `flex flex-col md:flex-row`: Responsive flex

### Colors
- `text-blue-600 dark:text-blue-400`: Theme-aware text
- `bg-white dark:bg-slate-800`: Theme-aware background
- `border-blue-500`: Colored borders

### States
- `hover:bg-blue-700`: Hover effects
- `disabled:bg-blue-400`: Disabled state
- `focus:ring-2 focus:ring-blue-500`: Focus state

## Project Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Create production build
npm start               # Run production build
npm run lint            # Check code quality

# Install specific package
npm install package-name

# Remove package
npm uninstall package-name
```

## Common Issues & Solutions

### Issue: Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Issue: Dependencies error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Dark mode not working
- Clear browser cache
- Check HTML has `suppressHydrationWarning`

### Issue: Login fails
- Verify exact email/password match
- Check browser console for errors
- Clear localStorage if corrupted

## Environment Variables

Create `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Debug Tips

### View Console Logs
- Open DevTools: F12
- Go to Console tab
- Look for auth/API errors

### Check Auth State
```javascript
// In browser console
JSON.parse(localStorage.getItem('auth_user'))
```

### Test API Manually
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@commodities.com","password":"password123"}'
```

## Project Statistics

- **Total Files:** ~25
- **Components:** 6
- **Pages:** 6
- **API Routes:** 2
- **Hooks:** 3
- **Lines of Code:** ~2000+
- **Features:** 100+ points
- **Setup Time:** < 5 minutes

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| DevTools | F12 |
| Toggle Sidebar | Ctrl+B |
| Format Code | Shift+Alt+F |
| Save | Ctrl+S |
| Search | Ctrl+P (files) |

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## Support

For issues, check:
1. Browser console (F12)
2. Terminal output (dev server)
3. README.md for overview
4. SETUP.md for installation help
5. FEATURES.md for feature details

---

**Pro Tips:**
- Use React DevTools browser extension
- Enable "Pause on exceptions" in DevTools
- Use `console.log` for debugging
- Check Network tab for API calls
- Use Lighthouse for performance audit

---

Last Updated: November 2025
