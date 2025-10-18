#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

usage() {
  cat <<EOF
Personal Trainer - Dev/Ops CLI

Usage: $0 <command> [args]

Commands:
  # Development
  dev                  Start dev server (npm run dev)
  build                Build the app (npm run build)
  start                Start prod server (npm start)

  # Docker (default compose)
  dc-up                docker compose up -d
  dc-down              docker compose down
  dc-logs [svc]        docker compose logs -f [service]
  dc-restart [svc]     docker compose restart [service]
  dc-ps                docker compose ps

  # Docker (prod compose)
  dcp-up               docker compose -f docker-compose.prod.yml up -d
  dcp-down             docker compose -f docker-compose.prod.yml down
  dcp-logs [svc]       docker compose -f docker-compose.prod.yml logs -f [service]
  dcp-restart [svc]    docker compose -f docker-compose.prod.yml restart [service]
  dcp-ps               docker compose -f docker-compose.prod.yml ps

  # Deployment helpers
  deploy-simple        scripts/deploy-simple.sh
  deploy-registry      scripts/deploy-with-registry.sh

  # SSL / Certbot
  ssl-init             scripts/init-letsencrypt.sh
  ssl-setup            scripts/setup-letsencrypt-simple.sh
  ssl-renew            docker compose -f docker-compose.prod.yml run --rm certbot renew && \
                       docker compose -f docker-compose.prod.yml exec nginx nginx -s reload

  # Logs shortcuts
  logs-nginx           docker compose -f docker-compose.prod.yml logs -f nginx
  logs-app             docker compose -f docker-compose.prod.yml logs -f app

  # Misc
  fmt                  Prettify staged docs (no-op placeholder)
  help                 Show this help
EOF
}

cmd=${1:-help}
shift || true

case "$cmd" in
  dev) npm run dev ;;
  build) npm run build ;;
  start) npm start ;;

  dc-up) docker compose up -d ;;
  dc-down) docker compose down ;;
  dc-logs) docker compose logs -f ${1:-} ;;
  dc-restart) docker compose restart ${1:-} ;;
  dc-ps) docker compose ps ;;

  dcp-up) docker compose -f docker-compose.prod.yml up -d ;;
  dcp-down) docker compose -f docker-compose.prod.yml down ;;
  dcp-logs) docker compose -f docker-compose.prod.yml logs -f ${1:-} ;;
  dcp-restart) docker compose -f docker-compose.prod.yml restart ${1:-} ;;
  dcp-ps) docker compose -f docker-compose.prod.yml ps ;;

  deploy-simple) scripts/deploy-simple.sh ;;
  deploy-registry) scripts/deploy-with-registry.sh ;;

  ssl-init) scripts/init-letsencrypt.sh ;;
  ssl-setup) scripts/setup-letsencrypt-simple.sh ;;
  ssl-renew) docker compose -f docker-compose.prod.yml run --rm certbot renew && \
             docker compose -f docker-compose.prod.yml exec nginx nginx -s reload ;;

  logs-nginx) docker compose -f docker-compose.prod.yml logs -f nginx ;;
  logs-app) docker compose -f docker-compose.prod.yml logs -f app ;;

  fmt) echo "(placeholder)" ;;
  help|*) usage ;;
 esac
