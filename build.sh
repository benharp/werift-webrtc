#!/bin/sh
rm -rf lib
yarn format
yarn build
cd lib
mv src/* .
rm -rf examples
rm -rf tests
rm -rf src