#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 3 ]; then
  echo "Usage: $0 <PROJECT_ID> <REGION> <MONGO_URI>"
  exit 1
fi

PROJECT_ID="$1"
REGION="$2"
MONGO_URI="$3"

API_SERVICE="padmavati-api"
WEB_SERVICE="padmavati-web"

gcloud config set project "$PROJECT_ID"
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

echo "Building API image..."
gcloud builds submit --tag "gcr.io/$PROJECT_ID/$API_SERVICE:latest" ./server

echo "Deploying API..."
gcloud run deploy "$API_SERVICE" \
  --image "gcr.io/$PROJECT_ID/$API_SERVICE:latest" \
  --platform managed \
  --region "$REGION" \
  --allow-unauthenticated \
  --min-instances 0 \
  --set-env-vars "MONGO_URI=$MONGO_URI,JWT_SECRET=change_me_prod,ADMIN_USERNAME=govind,ADMIN_PASSWORD=singh"

echo "Building Web image..."
gcloud builds submit --tag "gcr.io/$PROJECT_ID/$WEB_SERVICE:latest" ./client

echo "Deploying Web..."
gcloud run deploy "$WEB_SERVICE" \
  --image "gcr.io/$PROJECT_ID/$WEB_SERVICE:latest" \
  --platform managed \
  --region "$REGION" \
  --allow-unauthenticated \
  --min-instances 0

echo "Done."
gcloud run services list --region "$REGION"
