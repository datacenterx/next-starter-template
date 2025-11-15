# Database Management Guide

## Setup

Your SQLite database is located at: `prisma/dev.db`

## Available Tables

1. **ContactSubmission** - Stores all contact form submissions
2. **NewsletterSubscription** - Manages newsletter subscribers
3. **BlogPost** - Blog posts management
4. **PageView** - Analytics and page view tracking

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)
- `GET /api/contact?status=new` - Filter by status

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Get all subscribers

### Analytics
- `POST /api/analytics` - Track page view
- `GET /api/analytics?days=7` - Get analytics data

## Viewing Data

Use Prisma Studio to view and edit database:
```bash
npx prisma studio
```

## Database Commands

```bash
# View database schema
npx prisma db push

# Reset database
npx prisma migrate reset

# Generate Prisma Client
npx prisma generate

# Create new migration
npx prisma migrate dev --name <migration_name>
```

## Production

For production, consider using:
- PostgreSQL
- MySQL
- MongoDB

Update `.env` with production DATABASE_URL.
