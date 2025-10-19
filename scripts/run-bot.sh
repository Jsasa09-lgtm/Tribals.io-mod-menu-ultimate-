#!/bin/bash

# GitHub Improvement Bot - Run Script
# This script starts the GitHub Improvement Bot with proper configuration

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

# Check if .env file exists
if [ ! -f ".env" ]; then
    print_error ".env file not found. Please run install.sh first or create .env file manually."
    exit 1
fi

# Load environment variables
export $(cat .env | grep -v '^#' | xargs)

# Check required environment variables
if [ -z "$GITHUB_TOKEN" ] || [ "$GITHUB_TOKEN" = "your_github_token_here" ]; then
    print_error "GITHUB_TOKEN not set in .env file"
    print_status "Please edit .env file and set your GitHub token"
    exit 1
fi

if [ -z "$REPO_URL" ] || [ "$REPO_URL" = "your_repository_url_here" ]; then
    print_warning "REPO_URL not set, using current repository"
    REPO_URL=$(git config --get remote.origin.url 2>/dev/null || echo "current-repository")
fi

print_status "Starting GitHub Improvement Bot..."
print_status "Repository: $REPO_URL"
print_status "Bot Name: ${BOT_NAME:-GitHub Improvement Bot}"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed or not in PATH"
    exit 1
fi

# Check if the main bot script exists
if [ ! -f "scripts/github-bot.js" ]; then
    print_error "Bot script not found: scripts/github-bot.js"
    exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs

# Set up logging
LOG_FILE="logs/bot-$(date +%Y%m%d-%H%M%S).log"

print_status "Logging to: $LOG_FILE"

# Function to handle script interruption
cleanup() {
    print_warning "Bot interrupted. Cleaning up..."
    print_status "Bot stopped at $(date)"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start the bot
print_success "Bot starting..."
print_status "Press Ctrl+C to stop the bot"

# Run the bot with logging
node scripts/github-bot.js 2>&1 | tee "$LOG_FILE"