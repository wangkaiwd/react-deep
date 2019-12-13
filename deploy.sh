#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build:doc

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wangkaiwd/react-deep.git master:gh-pages

# back root directory and delete build files
cd -
rm -rf dist

