#!/bin/sh

serve -s . -l 5000 &
cd buttona
yarn run build:dev
cd ..
cd buttonb
yarn run build:dev
cd ..
cd container1
yarn run start:dev