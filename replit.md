# Overview

This is a full-stack web application for "Venice Community," a Discord community platform featuring an Arabic-language interface. The application includes QR code integration for easy Discord access and an improved emoji-based rating system for user feedback. It's built as a single-page application with server-side API endpoints for data management.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes (August 21, 2025)

## Fixed Deployment Issues
- ✓ Resolved runtime error causing white screen on hosted domains
- ✓ Added PostgreSQL database configuration for full functionality  
- ✓ Configured Discord webhook integration for real-time rating notifications
- ✓ Added production error logging for debugging deployment issues
- ✓ Tested successful API integration with Discord webhooks

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development tooling
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Right-to-left (RTL) layout support for Arabic content with custom CSS variables for theming

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for rating submission and retrieval
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Processing**: JSON and URL-encoded body parsing with request logging

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Fallback Storage**: In-memory storage implementation for development/testing
- **Connection**: Environment-based database URL configuration

## Authentication and Authorization
- **Current State**: No authentication system implemented - completely free and open access
- **Session Management**: PostgreSQL session store configured (connect-pg-simple) but not actively used
- **Security**: Basic request validation through Zod schemas

## Integration Services
- **Discord Webhook**: Configured for real-time rating notifications to Discord server
- **Webhook URL**: Environment variable DISCORD_WEBHOOK_URL configured
- **Notification Format**: Rich embeds with user details, ratings, and comments in Arabic

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Development**: TSX for TypeScript execution, Replit-specific plugins

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS, class-variance-authority for component variants
- **Icons**: Lucide React icons, Font Awesome (via CDN)
- **Fonts**: Google Fonts (Cairo) for Arabic typography

### Database and Validation
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Client**: Neon Database serverless driver
- **Validation**: Zod for schema validation and type inference
- **Migrations**: Drizzle Kit for database schema management

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Class Management**: clsx and tailwind-merge for conditional styling
- **Carousel**: Embla Carousel for interactive components
- **Unique IDs**: nanoid for generating unique identifiers

### Development and Deployment
- **Environment**: Replit-optimized with specific plugins for development
- **Error Handling**: Runtime error overlay for development debugging
- **Build Process**: Vite for frontend bundling, ESBuild for backend compilation