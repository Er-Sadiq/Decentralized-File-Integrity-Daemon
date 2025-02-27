# Decentralized-File-Integrity-Daemon Using Blockchain for Linux

## Overview
A **real-time file integrity monitor** for Linux systems that uses **Arbitrum** (Ethereum L2) to store file hashes securely. Protects critical files (`/etc/passwd`, `/bin/`, `/boot/`) from unauthorized changes by malware or attackers. Alerts admins instantly via Telegram, Slack, or email.

---

## Features
- **Real-time monitoring**: Tracks file changes using `fsnotify`/`inotify`.
- **Blockchain-backed**: Stores file hashes on **Arbitrum** for tamper-proof records.
- **Instant alerts**: Notifies admins of unauthorized changes.
- **Decentralized security**: Immutable logs, even if attackers gain root access.

---

## How It Works
1. **Golang Backend**: Monitors files, computes SHA-256 hashes, and detects changes.
2. **Arbitrum Smart Contract**: Stores file hashes and timestamps immutably.
3. **Alerts**: Sends notifications via Telegram/Slack/email when changes occur.
4. **CLI/Dashboard**: Query file integrity history from the blockchain.

---

## Tech Stack
- **Backend**: Golang (fsnotify/inotify, Gin)
- **Blockchain**: Solidity (deployed on Arbitrum)
- **Alerts**: Telegram/Slack API
- **Frontend**: Optional CLI or React.js dashboard.

---

## Getting Started

### Prerequisites
- Go 1.20+
- Access to an Arbitrum node (e.g., Infura, Alchemy)
- Telegram/Slack API keys (for alerts)

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/file-integrity-monitor.git
   cd file-integrity-monitor
Install dependencies:

````bash
go mod download
Deploy the smart contract:
cd contracts
npm install
npx hardhat deploy --network arbitrum
Configure the backend:

Update config.yaml with your Arbitrum node URL and contract address.

Run the daemon:

go run main.go
The daemon monitors files and sends alerts for unauthorized changes.

Use the CLI or dashboard to query file integrity history from Arbitrum.
````

### Why This Project?

Tamper-proof logs: Hashes stored on Arbitrum cannot be altered.

Real-time alerts: Admins are notified instantly.

Decentralized: Secure even if attackers gain root access.
