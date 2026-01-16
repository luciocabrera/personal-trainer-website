# Quick Start - Dev Container Setup

## What I've Set Up

✅ Created `docker-compose.dev.yml` - PostgreSQL + pgAdmin containers
✅ Created `.env` file with default development credentials
✅ Updated dev container config to include Docker support
✅ Added npm scripts for database management

## Next Steps

### 1. Rebuild the Dev Container

To enable Docker support, you need to rebuild the dev container:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: "Dev Containers: Rebuild Container"
3. Press Enter

This will rebuild the container with Docker support.

### 2. Start the Database

After the rebuild completes, run:

```bash
npm run db:up
```

This starts PostgreSQL and pgAdmin containers.

### 3. Start the Application

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## What's Available

### Services

- **App**: `http://localhost:3000` (after running `npm run dev`)
- **PostgreSQL**: `localhost:5432`
- **pgAdmin**: `http://localhost:5050`

### Credentials

All stored in `.env`:

- **Database**: `personal_trainer`
- **DB User**: `admin`
- **DB Password**: `admin123`
- **pgAdmin Email**: `admin@personal-trainer.com`
- **pgAdmin Password**: `admin123`

### Database Commands

```bash
npm run db:up       # Start database
npm run db:down     # Stop database
npm run db:logs     # View logs
npm run db:restart  # Restart database
npm run db:reset    # Reset (deletes all data)
```

## Troubleshooting

If you see "docker: command not found", you need to rebuild the container (see step 1 above).

For more details, see `docs/DEV_CONTAINER_SETUP.md`
