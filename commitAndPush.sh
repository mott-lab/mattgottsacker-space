#!/bin/bash

# Commit added files and push.
git commit -m $1
git push

# Log into VPS, pull the changes, and logout.
ssh bitnami@52.204.128.172 -i ~/.ssh/LightsailDefaultPrivateKey-us-east-1.pem 
cd /opt/bitnami/apps/mattgottsacker-space/
git pull
logout
