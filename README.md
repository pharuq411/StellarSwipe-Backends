# StellarSwipe-Backends

Off-chain indexing and API layer for **StellarSwipe** — real-time event processing and caching for the frontend.


## Overview

Handles:

- Horizon/Soroban RPC event streaming (new signals, trades, slashes)
- Caching provider stats, leaderboards, signal metadata
- Light API endpoints (e.g., aggregated data, IPFS uploads)
- WebSocket real-time updates

Keeps the DApp performant without overloading public RPC nodes.

## Tech Stack

- Node.js 20+
- NestJS (TypeScript)
- WebSockets (Socket.io)
- stellar-sdk / soroban-client
- Optional: Redis for caching

## Quick Start

1. Clone & install:
   ```bash
   git clone https://github.com/EndeMathew/StellarSwipe-backend.git
   cd StellarSwipe-backend
   npm install

 Configure .env:
    PORT=4000
    SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
    HORIZON_URL=https://horizon-testnet.stellar.org
    
Run dev:
npm run start:dev
