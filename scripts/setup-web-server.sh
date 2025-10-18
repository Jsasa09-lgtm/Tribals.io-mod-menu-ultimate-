#!/bin/bash

# GitHub Improvement Bot - Web Server Setup Script
# This script sets up a local web server to run the bot interface

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Default port
PORT=${1:-8000}

print_status "Setting up web server on port $PORT..."

# Check if port is available
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
    print_warning "Port $PORT is already in use"
    print_status "Trying alternative ports..."
    
    for alt_port in 8001 8002 8003 8080 8081 8082; do
        if ! lsof -Pi :$alt_port -sTCP:LISTEN -t >/dev/null 2>&1; then
            PORT=$alt_port
            print_success "Using port $PORT instead"
            break
        fi
    done
    
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
        print_error "No available ports found. Please stop other services or specify a different port."
        exit 1
    fi
fi

# Check if Python is available
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    print_error "Python is not installed. Please install Python to run the web server."
    exit 1
fi

print_status "Using Python: $PYTHON_CMD"

# Check if the main HTML file exists
if [ ! -f "index.html" ]; then
    print_error "index.html not found. Please run this script from the project root directory."
    exit 1
fi

print_success "Starting web server..."
print_status "Server will be available at: http://localhost:$PORT"
print_status "Press Ctrl+C to stop the server"

# Create a simple HTTP server
cat > simple_server.py << 'EOF'
#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
import webbrowser
from urllib.parse import urlparse

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        # Handle root path
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def start_server(port):
    try:
        with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as httpd:
            print(f"🚀 Server started at http://localhost:{port}")
            print(f"📁 Serving files from: {os.getcwd()}")
            print("🌐 Available pages:")
            print(f"   - Main Interface: http://localhost:{port}/")
            print(f"   - GitHub Bot: http://localhost:{port}/github_improvement_bot.html")
            print(f"   - My GitHub Bot: http://localhost:{port}/my_github_improvement_bot.html")
            print(f"   - Mod Menu: http://localhost:{port}/mod_menu_system.html")
            print(f"   - Self-Improving: http://localhost:{port}/self_improving_mod_system.html")
            print("\nPress Ctrl+C to stop the server")
            
            # Try to open browser
            try:
                webbrowser.open(f'http://localhost:{port}')
            except:
                pass
                
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {port} is already in use. Please try a different port.")
        else:
            print(f"❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    start_server(port)
EOF

# Make the server script executable
chmod +x simple_server.py

# Start the server
$PYTHON_CMD simple_server.py $PORT

# Cleanup
rm -f simple_server.py