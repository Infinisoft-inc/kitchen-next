sudo apt update
sudo apt upgrade
sudo apt install xsel

# Docker Image bootstrap script
nvm use --delete-prefix v16.15.0
nvm install 16.15.0
nvm use v16.15.0
yarn global add lerna typescript @infini-soft/kli  webpack webpack-cli  serve ts-node-dev
yarn

yarn add @infini-soft/store -W
export PATH="$PATH:/home/nnode/.yarn:/com.docker.devenvironments.code/node_modules/.bin"
cd /com.docker.devenvironments.code/packages/tools/kli
yarn build:tool:dev