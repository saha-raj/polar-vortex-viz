#!/bin/sh
# Copy all necessary assets explicitly to ensure they're in the dist directory
mkdir -p dist/assets/textures/seaice dist/assets/backgrounds

# Copy specific files that are causing issues
cp public/assets/textures/2_no_clouds_8k_no_seaice.jpg dist/assets/textures/
cp public/assets/textures/rodinia_unpix.png dist/assets/textures/
cp public/assets/textures/seaice/*.png dist/assets/textures/seaice/
cp public/assets/backgrounds/*.webp dist/assets/backgrounds/

# Copy favicon.ico to root of dist
cp public/favicon.ico dist/ 2>/dev/null || :

# Remove favicon file explicitly since it's causing issues
rm -f dist/sagelabs-favicon.png
rm -f dist/assets/sagelabs-favicon.png

# Create a build marker file with a timestamp
echo "{\"buildTime\": \"$(date)\", \"version\": \"1.0.4\"}" > dist/build-info.json

# Additional debugging - list contents of assets directory
echo "Asset directory contents:"
ls -la dist/assets/
ls -la dist/assets/textures/
ls -la dist/assets/textures/seaice/
ls -la dist/

echo "Critical assets copied to dist directory"
echo "Build info created at dist/build-info.json" 