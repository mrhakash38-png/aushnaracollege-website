#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://aushnaracollege.edu.bd}"

echo "🔎 Monitoring check for: $BASE_URL"
echo "Timestamp: $(date -u +"%Y-%m-%d %H:%M:%S UTC")"
echo

pass_count=0
fail_count=0

check_url() {
  local name="$1"
  local url="$2"
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url" || echo "000")

  if [[ "$code" == "200" || "$code" == "301" || "$code" == "302" ]]; then
    echo "✅ $name ($code): $url"
    pass_count=$((pass_count + 1))
  else
    echo "❌ $name ($code): $url"
    fail_count=$((fail_count + 1))
  fi
}

check_contains() {
  local name="$1"
  local url="$2"
  local token="$3"

  if curl -fsSL "$url" | grep -qi "$token"; then
    echo "✅ $name contains '$token'"
    pass_count=$((pass_count + 1))
  else
    echo "❌ $name missing '$token'"
    fail_count=$((fail_count + 1))
  fi
}

# Availability checks
check_url "Homepage" "$BASE_URL/"
check_url "Admissions" "$BASE_URL/admissions"
check_url "Programs" "$BASE_URL/programs"
check_url "Contact" "$BASE_URL/contact"
check_url "Sitemap" "$BASE_URL/sitemap.xml"
check_url "Robots" "$BASE_URL/robots.txt"

# Content checks
check_contains "Robots" "$BASE_URL/robots.txt" "Sitemap:"
check_contains "Sitemap" "$BASE_URL/sitemap.xml" "<urlset"
check_contains "Sitemap" "$BASE_URL/sitemap.xml" "/admissions"

# Security header quick check
headers=$(curl -sI "$BASE_URL/" || true)
if echo "$headers" | grep -qi "strict-transport-security"; then
  echo "✅ HSTS header detected"
  pass_count=$((pass_count + 1))
else
  echo "⚠️  HSTS header not detected"
fi

echo
echo "---"
echo "Passed: $pass_count"
echo "Failed: $fail_count"

if [[ "$fail_count" -gt 0 ]]; then
  echo "Status: FAILED"
  exit 1
fi

echo "Status: OK"
