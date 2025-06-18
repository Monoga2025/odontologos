# SaNan Odontología Integral

## Overview

SaNan Odontología Integral is a modern dental clinic website built as a full-stack application. The project provides a comprehensive online presence for a dental practice, featuring service information, appointment booking, patient testimonials, and contact management. The application uses a modern React frontend with a Node.js/Express backend and is designed to be deployed on Replit.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Node.js with Express and TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage as fallback)
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Deployment**: Replit-optimized with auto-scaling deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with optimized development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Prepared for PostgreSQL session storage
- **API Design**: RESTful API structure with `/api` prefix
- **Development**: tsx for TypeScript execution in development

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database (serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Fallback Storage**: In-memory storage implementation for development

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL store
- **User Schema**: Prepared user table with username/password authentication
- **Storage Interface**: Abstracted storage layer for easy testing and development

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Persistence**: Drizzle ORM manages database operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **Client Updates**: React Query manages cache invalidation and UI updates

The application currently stores appointment data in localStorage as a temporary solution, with the infrastructure ready for full database integration.

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible React components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Font Awesome**: Additional icons via CDN

### Development and Build
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code quality and formatting (implied)

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Modern TypeScript ORM
- **Express**: Web application framework
- **connect-pg-simple**: PostgreSQL session store

### Deployment and DevOps
- **Replit**: Primary hosting platform
- **PostgreSQL 16**: Database runtime
- **Node.js 20**: JavaScript runtime

## Deployment Strategy

The application is optimized for Replit deployment with the following configuration:

- **Development**: `npm run dev` starts both frontend and backend with HMR
- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Production**: Serves static files and API from a single Express server
- **Auto-scaling**: Configured for Replit's autoscale deployment target
- **Port Configuration**: Backend runs on port 5000, exposed on port 80

The deployment process includes:
1. Frontend build to `dist/public`
2. Backend bundling to `dist/index.js`
3. Static file serving in production
4. Environment-based configuration

## Changelog

Changelog:
- June 18, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.