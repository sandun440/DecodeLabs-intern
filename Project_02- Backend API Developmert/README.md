# Project 02 — Backend API Development

A simple Express.js backend API for DecodeLabs internship work.

## Overview

This project provides a lightweight API server built with Node.js, Express, and dotenv for configuration. It includes a health check route and basic user endpoints for demonstration.

## Files

- `index.js` — main server entry point
- `package.json` — project metadata and dependencies
- `.env` (optional) — environment variables for runtime configuration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root if you want to customize the port:
   ```env
   PORT=5000
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. Open the API in a browser or API client:
   ```text
   http://localhost:5000
   ```

## Available Endpoints

- `GET /` — returns a welcome message
- `GET /users` — returns a sample list of users
- `POST /users` — creates a new user from JSON body input

### Example POST payload

```json
{
  "name": "Asha",
  "email": "asha@example.com"
}
```

## Notes

- The POST route includes basic validation for `name` and `email`.
- Current user data is not persisted to a database; it is returned only for demonstration.
- You can extend this API with real database integration, authentication, and more routes.
