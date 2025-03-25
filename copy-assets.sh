#!/bin/sh
# Copy all necessary assets to the dist directory
mkdir -p dist/public/assets/textures dist/public/assets/backgrounds
cp -r public/assets/textures dist/public/assets/
cp -r public/assets/backgrounds dist/public/assets/
cp public/assets/sagelabs-favicon.png dist/public/assets/
echo "Assets copied to dist directory" 