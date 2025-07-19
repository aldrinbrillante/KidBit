# KidBit

A TypeScript Next.js web application with Tailwind CSS styling and Firebase authentication.

## Getting Started

Due to PowerShell execution policy restrictions, you'll need to install dependencies and run the development server manually.

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Open Command Prompt (cmd) or Git Bash instead of PowerShell
2. Navigate to the project directory:
   ```bash
   cd "c:\Users\aldri\CascadeProjects\windsurf-project\KidBit"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication and Email/Password sign-in method
3. Copy `.env.local.example` to `.env.local`:
   ```bash
   copy .env.local.example .env.local
   ```
4. Fill in your Firebase configuration values in `.env.local`:
   - Go to Project Settings > General > Your apps
   - Copy the Firebase config values to your `.env.local` file

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

- `src/app/page.tsx` - Homepage component with "Welcome to KidBit" message
- `src/app/layout.tsx` - Root layout component
- `src/app/globals.css` - Global styles with Tailwind CSS
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.mjs` - Next.js configuration

### Features

- ✅ TypeScript support
- ✅ Tailwind CSS for styling
- ✅ ESLint configuration
- ✅ Modern Next.js App Router
- ✅ Responsive design
- ✅ Kid-friendly homepage design
- ✅ Firebase Authentication (Email/Password)
- ✅ Authentication Context Provider
- ✅ Environment-based configuration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Alternative: Using Command Prompt

If you continue to have issues with PowerShell, you can:

1. Open Command Prompt as Administrator
2. Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Then try running npm commands in PowerShell again

Or simply use Command Prompt (cmd) or Git Bash for all npm commands.

## Firebase Authentication

The project includes Firebase authentication utilities:

- `lib/firebase.ts` - Firebase initialization and configuration
- `lib/auth.ts` - Authentication helper functions (signUp, signIn, logOut)
- `lib/AuthContext.tsx` - React context for authentication state

### Available Auth Functions

```typescript
import { signUp, signIn, logOut, useAuth } from './lib/auth';

// Sign up new user
const userCredential = await signUp(email, password);

// Sign in existing user
const userCredential = await signIn(email, password);

// Sign out current user
await logOut();

// Use auth context in components
const { user, loading } = useAuth();
```
