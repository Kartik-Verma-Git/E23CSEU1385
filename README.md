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