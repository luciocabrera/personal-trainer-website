#!/bin/bash

# Test the local contact form
echo "Testing local contact form..."
echo "URL: http://localhost:5174"
echo ""

# Simple test with curl to check if server responds
echo "1. Testing if server responds to GET:"
curl -s http://localhost:5174 > /dev/null
if [ $? -eq 0 ]; then
    echo "✅ Server is responding"
else
    echo "❌ Server is not responding"
    exit 1
fi

echo ""
echo "2. Testing POST to contact form:"
response=$(curl -X POST http://localhost:5174/ \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "name=Test User&email=test@example.com&message=Test message" \
    -w "%{http_code}" \
    -s -o /tmp/response.html)

echo "HTTP Status Code: $response"

if [ "$response" = "200" ]; then
    echo "✅ Contact form submitted successfully!"
    echo ""
    echo "Checking for success indicators in response:"
    if grep -q "success\|✅\|Contact.*success" /tmp/response.html; then
        echo "✅ Found success indicators in response"
    else
        echo "⚠️  No clear success indicators found"
    fi
elif [ "$response" = "405" ]; then
    echo "❌ Method Not Allowed - Action routing issue"
elif [ "$response" = "302" ] || [ "$response" = "303" ]; then
    echo "✅ Form submitted (redirect response)"
else
    echo "⚠️  Unexpected response code: $response"
fi

# Cleanup
rm -f /tmp/response.html