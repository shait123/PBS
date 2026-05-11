# Padmavati Bangle Store

Premium modern e-commerce website with multilingual UI (English, Hindi, Telugu), customer shopping experience, and secure admin APIs.

## Tech
- Frontend: React + Vite + Tailwind + Framer Motion
- Backend: Node.js + Express + MongoDB + JWT + bcrypt
- Deployment: Docker + Google Cloud Run

## Local Run
```bash
npm install
cp server/.env.example server/.env
npm run dev
```

## One-command GCP Deploy (Easy)
I added a script so you don’t have to remember complex commands.

### Step 1) Install tools once
- Google Cloud SDK (`gcloud`)
- Docker Desktop / Docker Engine

### Step 2) Login
```bash
gcloud auth login
```

### Step 3) Run deploy script
```bash
chmod +x scripts/deploy-gcp.sh
./scripts/deploy-gcp.sh YOUR_PROJECT_ID asia-south1 "YOUR_MONGO_URI"
```

This script automatically:
1. Enables required Google APIs
2. Builds backend image
3. Deploys backend to Cloud Run (`padmavati-api`)
4. Builds frontend image
5. Deploys frontend to Cloud Run (`padmavati-web`)

### Step 4) Open your website
After deploy completes, run:
```bash
gcloud run services list --region asia-south1
```
Open the URL for `padmavati-web`.

## Important Production Notes
- Move secrets to Secret Manager (JWT secret, admin password, DB URI)
- Restrict CORS to your frontend domain only
- Keep `min instances = 0` for cheaper billing

## Admin Demo Login (Development Only)
- Username: `govind`
- Password: `singh`
