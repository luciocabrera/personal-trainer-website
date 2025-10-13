# Database Setup Guide

This project now includes PostgreSQL and pgAdmin for database operations.

## Services Added

### PostgreSQL

- **Container**: `personal-trainer-postgres`
- **Port**: `5432`
- **Database**: `personal_trainer`
- **Username**: `admin`
- **Password**: `admin123`

### pgAdmin

- **Container**: `personal-trainer-pgadmin`
- **Port**: `5050`
- **URL**: `http://localhost:5050`
- **Email**: `admin@personal-trainer.com`
- **Password**: `admin123`

## Quick Start

1. **Start all services**:

   ```bash
   docker-compose up -d
   ```

2. **Access pgAdmin**:
   - Open http://localhost:5050
   - Login with `admin@personal-trainer.com` / `admin123`
   - The PostgreSQL server should be pre-configured as "Personal Trainer DB"

3. **Connect to PostgreSQL directly**:
   ```bash
   docker-compose exec postgres psql -U admin -d personal_trainer
   ```

## Database Schema

The database includes these tables:

### `clients`

- Client information and contact details
- Medical conditions and fitness goals
- Emergency contact information

### `trainers`

- Trainer profiles and specializations
- Contact information and rates

### `training_sessions`

- Session scheduling and management
- Links clients with trainers
- Session notes and pricing

### `contact_messages`

- Contact form submissions from the website
- Message status tracking

## Environment Variables

Add these to your `.env` file (already included):

```env
# Database Configuration
POSTGRES_DB=personal_trainer
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123
DATABASE_URL=postgresql://admin:admin123@localhost:5432/personal_trainer

# pgAdmin Configuration
PGADMIN_EMAIL=admin@personal-trainer.com
PGADMIN_PASSWORD=admin123
```

## Database Operations

### Backup Database

```bash
docker-compose exec postgres pg_dump -U admin personal_trainer > backup.sql
```

### Restore Database

```bash
docker-compose exec -T postgres psql -U admin personal_trainer < backup.sql
```

### Reset Database

```bash
docker-compose down -v
docker-compose up -d
```

## Next Steps

1. **Install PostgreSQL client libraries** in your React Router app:

   ```bash
   npm install pg @types/pg
   # or
   npm install postgres
   ```

2. **Create database service** in your app to handle CRUD operations

3. **Update contact form** to save messages to the database

4. **Add admin interface** for managing clients and sessions

## Security Notes

- Change default passwords in production
- Use environment variables for sensitive data
- Consider using connection pooling for production
- Set up proper backup strategy for production data
