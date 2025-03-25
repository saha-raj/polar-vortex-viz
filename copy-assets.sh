#!/bin/sh
# Copy assets to BOTH locations to ensure they're available at all paths

echo "===== COPYING ASSETS ====="

# Create both directory structures
mkdir -p dist/assets/textures/seaice dist/assets/backgrounds
mkdir -p dist/public dist/public/assets/textures/seaice dist/public/assets/backgrounds

# Create .nojekyll file for GitHub Pages
touch dist/.nojekyll
echo "Created .nojekyll file to disable GitHub Pages Jekyll processing"

# Copy favicon
echo "Copying favicon..."
cp public/favicon.ico dist/
cp public/favicon.ico dist/public/ 2>/dev/null || :

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

# Copy all textures to BOTH locations
echo "Copying textures to both paths..."
cp -R public/assets/* dist/assets/
cp -R public/assets/* dist/public/assets/

# Create build marker
echo "{\"buildTime\": \"$(date)\", \"version\": \"1.0.8\"}" > dist/build-info.json

# Verify directories
echo "===== VERIFICATION ====="
echo "Files in dist/public/assets:"
find dist/public/assets -type f | wc -l
echo "Files in dist/assets:"
find dist/assets -type f | wc -l

echo "===== ASSET COPYING COMPLETE =====" 