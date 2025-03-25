#!/bin/sh
# Simple asset copying script - no complex logic, just copying files

echo "===== COPYING ASSETS ====="

# Create necessary directories
mkdir -p dist/assets/textures/seaice dist/assets/backgrounds

# Create .nojekyll file for GitHub Pages
touch dist/.nojekyll

# Copy favicon explicitly
echo "Copying favicon..."
cp public/favicon.ico dist/

# Remove old favicon files
echo "Removing old favicon files..."
rm -f dist/sagelabs-favicon.png
rm -f dist/assets/sagelabs-favicon.png

# Core textures - copy only what's needed
echo "Copying core textures..."
cp public/assets/textures/2_no_clouds_8k_no_seaice.jpg dist/assets/textures/
cp public/assets/textures/rodinia_unpix.png dist/assets/textures/
cp public/assets/textures/seaice/*.png dist/assets/textures/seaice/

# Backgrounds
echo "Copying backgrounds..."
cp public/assets/backgrounds/*.webp dist/assets/backgrounds/

# Build marker
echo "{\"buildTime\": \"$(date)\", \"version\": \"1.0.6\"}" > dist/build-info.json

# Print directory contents for verification
echo "===== VERIFICATION ====="
find dist -type f | sort

echo "===== ASSET COPYING COMPLETE =====" 