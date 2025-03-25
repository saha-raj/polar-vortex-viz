#!/bin/sh
# Copy all necessary assets explicitly to ensure they're in the dist directory
mkdir -p dist/assets/textures/seaice dist/assets/backgrounds

# Copy specific files that are causing issues
cp public/assets/textures/2_no_clouds_8k_no_seaice.jpg dist/assets/textures/
cp public/assets/textures/rodinia_unpix.png dist/assets/textures/
cp public/assets/textures/seaice/*.png dist/assets/textures/seaice/
cp public/assets/backgrounds/*.webp dist/assets/backgrounds/
cp public/assets/sagelabs-favicon.png dist/assets/
echo "Critical assets copied to dist directory" 