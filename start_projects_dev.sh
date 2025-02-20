#!/bin/bash

NODE_PROJECT_DIR="./backend"
ANGULAR_PROJECT_DIR="./frontend"

gnome-terminal -- bash -c "cd '$NODE_PROJECT_DIR' && npm run dev; exec bash"

gnome-terminal -- bash -c "cd '$ANGULAR_PROJECT_DIR' && npm run start; exec bash"
