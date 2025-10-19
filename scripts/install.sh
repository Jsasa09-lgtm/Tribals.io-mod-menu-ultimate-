#!/bin/bash

# GitHub Improvement Bot - Installation Script
# This script installs all dependencies and sets up the bot system

set -e

echo "🚀 Installing GitHub Improvement Bot..."

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

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root for security reasons"
   exit 1
fi

# Check system requirements
print_status "Checking system requirements..."

# Check Node.js
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi
print_success "Node.js $(node -v) found"

# Check Python
if ! command -v python3 &> /dev/null; then
    print_error "Python 3 is not installed. Please install Python 3.8+ first."
    exit 1
fi

PYTHON_VERSION=$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
print_success "Python $PYTHON_VERSION found"

# Check Git
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi
print_success "Git $(git --version | cut -d' ' -f3) found"

# Create necessary directories
print_status "Creating directory structure..."
mkdir -p logs
mkdir -p models
mkdir -p training_data
mkdir -p improvements
mkdir -p config
mkdir -p scripts
mkdir -p .github/workflows

print_success "Directory structure created"

# Install Node.js dependencies
print_status "Installing Node.js dependencies..."
if [ -f "package.json" ]; then
    npm install
    print_success "Node.js dependencies installed"
else
    print_warning "package.json not found, skipping npm install"
fi

# Install Python dependencies
print_status "Installing Python dependencies..."
if [ -f "requirements.txt" ]; then
    python3 -m pip install --user -r requirements.txt
    print_success "Python dependencies installed"
else
    print_warning "requirements.txt not found, skipping pip install"
fi

# Set up Git hooks
print_status "Setting up Git hooks..."
if [ -d ".git" ]; then
    # Pre-commit hook
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# Run linting and tests before commit
echo "Running pre-commit checks..."

# Run ESLint if available
if command -v npx &> /dev/null; then
    npx eslint *.js *.html --ext .js,.html || exit 1
fi

# Run Python linting if available
if command -v pylint &> /dev/null; then
    find . -name "*.py" -exec pylint {} \; || exit 1
fi

echo "Pre-commit checks passed!"
EOF
    chmod +x .git/hooks/pre-commit
    print_success "Git hooks configured"
else
    print_warning "Not a Git repository, skipping Git hooks setup"
fi

# Set up environment variables
print_status "Setting up environment variables..."
if [ ! -f ".env" ]; then
    cat > .env << 'EOF'
# GitHub Improvement Bot Environment Variables
GITHUB_TOKEN=your_github_token_here
REPO_URL=your_repository_url_here
BOT_NAME=GitHub Improvement Bot
BOT_EMAIL=bot@github-improvement.com

# AI Configuration
OPENAI_API_KEY=your_openai_api_key_here
AI_MODEL=gpt-4
AI_TEMPERATURE=0.7
AI_MAX_TOKENS=4000

# Security
ENCRYPTION_KEY=your_encryption_key_here
JWT_SECRET=your_jwt_secret_here

# Monitoring
LOG_LEVEL=INFO
METRICS_ENABLED=true
DASHBOARD_PORT=8080
EOF
    print_success "Environment file created (.env)"
    print_warning "Please edit .env file with your actual values"
else
    print_warning ".env file already exists, skipping creation"
fi

# Set up logging
print_status "Setting up logging..."
mkdir -p logs
touch logs/bot.log
touch logs/metrics.json
print_success "Logging configured"

# Make scripts executable
print_status "Making scripts executable..."
chmod +x scripts/*.sh 2>/dev/null || true
chmod +x scripts/*.js 2>/dev/null || true
print_success "Scripts made executable"

# Create systemd service (optional)
if command -v systemctl &> /dev/null && [ "$EUID" -ne 0 ]; then
    print_status "Creating systemd service..."
    cat > github-improvement-bot.service << EOF
[Unit]
Description=GitHub Improvement Bot
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$(pwd)
ExecStart=/usr/bin/node scripts/github-bot.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF
    print_success "Systemd service file created (github-improvement-bot.service)"
    print_warning "To install: sudo cp github-improvement-bot.service /etc/systemd/system/ && sudo systemctl enable github-improvement-bot"
fi

# Run initial tests
print_status "Running initial tests..."
if [ -f "package.json" ] && command -v npm &> /dev/null; then
    npm test 2>/dev/null || print_warning "Tests failed or not configured"
fi

# Final setup
print_status "Finalizing setup..."

# Create a simple test script
cat > test-setup.js << 'EOF'
#!/usr/bin/env node
console.log('🤖 GitHub Improvement Bot setup test');
console.log('✅ Node.js is working');
console.log('✅ Script execution is working');
console.log('✅ Setup completed successfully!');
EOF
chmod +x test-setup.js
node test-setup.js
rm test-setup.js

print_success "GitHub Improvement Bot installation completed!"
print_status "Next steps:"
echo "1. Edit .env file with your GitHub token and API keys"
echo "2. Configure bot settings in config/bot-config.yaml"
echo "3. Run: node scripts/github-bot.js to start the bot"
echo "4. Open index.html in your browser to access the web interface"
echo ""
print_status "For more information, see README.md"