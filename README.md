<img width="715" height="280" alt="Image" src="https://github.com/user-attachments/assets/188944a1-3ac7-4c14-9f11-fcf13225e23e" />

# Agentic AI  (Frontend)

Dashboard • Agent Management • Authority View • Impact Overview

Suzana is a React-based CRUD application for modeling AI agent authority before execution.

Built with React, React Router, and a custom Flask REST API.

Suzana helps users create AI agents, assign predefined actions, and automatically visualize the impact of those permissions at design time.

---

## Live Application

Frontend:
 [Vercel](https://ai-agent-javascript-frontend.vercel.app/)

Backend:
[Heroku](https://agent-ai-8ddadc32eb21.herokuapp.com/)

Backend: 
[GitHub Repository](https://github.com/angelikakasia/ai-agent-python-backend)

---

## Tech Stack

- React (Vite)
- React Router
- JavaScript
- CSS
- REST API (Flask)
- Vercel (frontend deployment)
- Heroku (backend deployment)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- Backend API running locally or deployed

---

### Installation

Clone the frontend repository:
git clone [git clone](https://github.com/angelikakasia/ai-agent-javascript-frontend.git)

cd ai-agent-javascript-frontend

Install dependencies:
1. npm install
2. Create a `.env` file and add:

VITE_API_URL=http://localhost:5000

3. Start development server:

npm run dev

The app runs at:

VITE_API_URL=http://localhost:5000


---

## Features

- User authentication (sign up, login, logout)
- Protected routes for authenticated users
- Create, edit, and delete AI agents
- Assign predefined actions to agents
- Remove actions from agents
- Automatic impact aggregation (low, medium, high, irreversible)
- Full authority overview per agent
- Owner-only edit and delete controls
- Guest users cannot modify data

---

## Impact System

Each agent automatically displays grouped impact levels based on assigned actions:

- Low
- Medium
- High
- Irreversible

Impact updates immediately when permissions change.

---

## Notes

- Frontend built with React and Context API
- Authentication enforced by backend (JWT)
- Users can only modify their own agents
- Design-time security modeling tool (not runtime monitoring)

---

## Development

This project was built by:

Angelika 
