# altcha-tutorial
This example project demonstrates the steps taken in the tutorial found here. The final application contains a single page form, with Captcha included. It is entirely self-hosted, and uses a Proof of Work (PoW) model through the Altcha library.

## Setup instructions
Below are instructions to setup both the backend and frontend of this demo application. Each section must be completed in a separate terminal tab. When both are running, navigate to `http://localhost:5173` to see the example form with Altcha included.

### Backend
1. Rename `backend/.env.example` -> `backend/.env`, making sure to set your own HMAC_KEY
2. `cd backend && npm install`
3. `node index.js`

### Frontend
1. `cd frontend && npm install`
2. `npm run dev`
