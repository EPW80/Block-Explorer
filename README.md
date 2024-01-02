# Block Explorer

## Description

This project is an Ethereum Block Explorer Clone, designed to interface with the Ethereum Mainnet. It allows users to view the latest blocks and transactions, explore specific blocks and transactions in detail, and check account balances. The project is built for educational purposes and provides a basic yet functional insight into blockchain explorations.

## Features

- View current block number of Ethereum Mainnet.
- Display detailed information about blocks and their transactions.
- Fetch transaction receipts for detailed analysis.
- Search and view Ethereum addresses and their balances.
- Interactivity: click on blocks and transactions for more details.

## Technologies Used

- React.js
- React Router
- Alchemy SDK
- Tailwind CSS
- React Icons

## Setup and Installation

Prerequisites

1. Create an Alchemy API Key: If you haven't already, create a unique Alchemy API Mainnet key as described in the Alchemy documentation.

## Project Setup

1. Clone the Repository:

```bash
git clone https://github.com/your-username/ethereum-block-explorer-clone.git
```

1. **Navigate to Project Directory**:

```bash
cd ethereum-block-explorer-clone
```

1. Install Dependencies

```bash
npm install
```

## Set Environment Variables

- Create an empty .env file in the base directory.

- Add the following line, replacing YOUR_ALCHEMY_API_KEY with your actual API key

```bash
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY

```

1. Start your application

```bash
npm start
```

## Usage

- The application displays the current block number of the Ethereum Mainnet upon loading.
- Explore more detailed information about each block and its associated transactions.
- Click on individual blocks or transactions to view their detailed data.
- Use the search functionality to explore specific Ethereum addresses and their transaction histories and balances.

## Demo

[![Etherscan - 2 January 2024 - Watch Video](https://cdn.loom.com/sessions/thumbnails/5b59365c1e6b416993dcd8f42c280e12-with-play.gif)](https://www.loom.com/share/5b59365c1e6b416993dcd8f42c280e12)

## Deployment

[Vercel](https://block-explorer-epw80.vercel.app/)

## Contributor

Erik Williams
