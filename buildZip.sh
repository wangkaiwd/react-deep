yarn build:doc
mkdir -p ~/Desktop/temp
mv -f dist ~/Desktop/temp
cd ~/Desktop/temp
rm -rf dist-*
zip -r "dist-$(date +"%Y-%m-%d %H-%M").zip" dist
rm -rf dist
