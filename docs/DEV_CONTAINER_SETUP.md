# Development Environment Setup

This guide explains how to run the project in the dev container with PostgreSQL.

## What's Included

The dev container automatically sets up:

- Node.js 20
- Docker (for running PostgreSQL)
- Git and GitHub CLI
- PostgreSQL database in a container
- pgAdmin for database management

## Getting Started

### 1. Initial Setup

When you open the project in the dev container, it will automatically:

1. Install npm dependencies
2. Start PostgreSQL in a Docker container
3. Initialize the database with the scripts in `init-scripts/`

### 2. Configuration

The `.env` file is already created with default development values:

- PostgreSQL: `localhost:5432`
- Database: `personal_trainer`
- User: `admin`
- Password: `admin123`

You can modify these values in `.env` if needed.

### 3. Running the Application

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Database Management

### Useful Commands

```bash
# Start PostgreSQL container
npm run db:up

# Stop PostgreSQL container
npm run db:down

# View PostgreSQL logs
npm run db:logs

# Restart PostgreSQL
npm run db:restart

# Reset database (removes all data)
npm run db:reset
```

### Accessing pgAdmin

pgAdmin is available at `http://localhost:5050`

- Email: `admin@personal-trainer.com`
- Password: `admin123`

The database connection is pre-configured in pgAdmin.

### Direct Database Access

Connect to PostgreSQL directly:

```bash
docker exec -it personal-trainer-postgres-dev psql -U admin -d personal_trainer
```

## Ports

The following ports are forwarded from the container:

- `3000` - Application (dev server)
- `5173` - Vite dev server (if used)
- `5432` - PostgreSQL
- `5050` - pgAdmin

## Troubleshooting

### PostgreSQL not starting

Check the logs:

```bash
npm run db:logs
```

Restart the database:

```bash
npm run db:restart
```

### Database connection errors

1. Ensure PostgreSQL is running:

   ```bash
   docker ps | grep postgres
   ```

2. Check the `DATABASE_URL` in `.env` matches:

   ```
   postgresql://admin:admin123@localhost:5432/personal_trainer
   ```

3. Restart the database:
   ```bash
   npm run db:restart
   ```

### Reset everything

If things get messy, reset the database:

```bash
npm run db:reset
```

This will delete all data and reinitialize the database.

## Email Configuration (Optional)

For testing email functionality, update these values in `.env`:

- `EMAIL_PROVIDER` (gmail, smtp, or outlook)
- `GMAIL_USER` and `GMAIL_APP_PASSWORD` (if using Gmail)
- `EMAIL_TO` and `EMAIL_FROM`

## Next Steps

1. Make sure the database is running: `npm run db:up`
2. Start the dev server: `npm run dev`
3. Open `http://localhost:3000` in your browser
4. Start coding! 🚀
