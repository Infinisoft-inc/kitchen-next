sudo apt update
sudo apt upgrade
sudo apt install xsel

yarn add @infini-soft/store -W
yarn global add lerna @infini-soft/kli serve
export PATH="$PATH:/home/nnode/.yarn:/com.docker.devenvironments.code/node_modules/.bin"
cd /com.docker.devenvironments.code/packages/tools/kli
yarn build:tool:dev