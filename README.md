# Vehicle Maintenance Scheduler Microservice

## Overview

This project is a backend microservice designed to optimize daily vehicle maintenance scheduling for logistics depots.

The system selects maintenance tasks based on:
available mechanic hours
operational impact score
task duration

The optimization logic maximizes total operational impact while staying within the available mechanic-hour budget.

---

## Tech Stack

Node.js
Express.js
Axios
JavaScript

---

## Features

REST API implementation
Token-based authentication flow
Depot and vehicle data integration
Dynamic Programming based optimization
Modular backend architecture
Error handling and fallback strategy

---


Network Restriction Note

During integration testing, the provided external evaluation APIs were inaccessible from the current network environment due to security/firewall restrictions.

The following message was consistently returned while attempting API authentication and data retrieval:

"The web page you are trying to visit has been blocked in accordance with company policy."

To ensure continued local validation of the backend architecture and scheduling logic, fallback handling and local testing workflows were implemented where necessary.

The core implementation for:
- authentication flow
- API integration
- scheduling optimization
- backend routing
- error handling




## Project Structure

vehicle_maintence_scheduler/
│
├── src/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md

---

## Installation

```bash
npm install


remains fully implemented within the project.
