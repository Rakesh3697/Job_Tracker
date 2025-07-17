# Job Tracker Using MERN Stack

# Job Application Tracker - MERN Stack

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Frontend Components](#frontend-components)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Functionality
- **Application Management**:
  - Add new job applications
  - Edit existing entries
  - Delete applications
  - View all applications in sortable table

### Advanced Features
- **Status Tracking**:
  - Pending
  - Interview
  - Offer
  - Rejected
- **Search & Filter**:
  - Full-text search across all fields
  - Status-based filtering
- **Data Visualization**:
  - Interactive dashboard with statistics
  - Response rate calculation
- **Data Export**:
  - Export to CSV functionality

## Technologies

### Frontend
| Technology | Purpose |
|------------|---------|
| React | UI Framework |
| Axios | HTTP Client |
| CSS3 | Styling |
| React Hooks | State Management |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express | Web Framework |
| MongoDB | Database |
| Mongoose | ODM |
| CORS | Cross-Origin Resource Sharing |

## Installation

### Backend Setup
```bash
# Clone repository
git clone https://github.com/yourusername/job-tracker-mern.git
cd job-tracker-mern/backend

# Install dependencies
npm install

# Configure environment
echo "MONGODB_URI=mongodb://localhost:27017/job_tracker" > .env
echo "PORT=5000" >> .env

# Start development server
npm run dev

cd ../frontend

# Install dependencies
npm install

# Start React app
npm start
