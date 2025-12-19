# Urfa Grill Hildesheim

Production-ready starter for a modern Turkish fast-food ordering platform.

## Stack
- **Frontend:** Next.js (React)
- **Backend:** Spring Boot 3 (REST API)
- **Database:** PostgreSQL
- **Security:** Spring Security + JWT (short-lived access token) + refresh token in HttpOnly cookie

## Repository structure
```
frontend/   Next.js storefront
backend/    Spring Boot API
docs/       Static demo for GitHub Pages
```

## GitHub Pages demo
This repository includes a static demo in the `docs/` folder. Enable GitHub Pages
and point it to the `/docs` folder to preview the storefront.

```

## Frontend
```bash
cd frontend
npm install
npm run dev
```

## Backend
```bash
cd backend
mvn spring-boot:run
```

### Environment configuration
Update `backend/src/main/resources/application.yml` with your database credentials and a secure JWT secret.

## Core API endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/menu/categories`
- `GET /api/menu/products`
- `POST /api/cart/items`
- `POST /api/orders`
- `PATCH /api/orders/{id}/status`
