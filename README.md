# electron-react-fastapi-boilerplate

A boilerplate for electron, react and fastapi

## Setup

### Prerequisites

- Node.js (v18 or higher)
- Python 3.13
- uv package manager

### Installation

1. Install frontend dependencies:

```bash
cd frontend
npm install
```

2. Install backend dependencies:

```bash
cd backend

# Create virtual environment
uv venv

# Activate virtual environment
.venv/Scripts/activate  # On Windows
# source .venv/bin/activate  # On Unix/macOS

# Install dependencies from pyproject.toml
uv pip sync
```

3. Start both frontend and backend with a single command:

```bash
cd frontend
npm run start-all
```
