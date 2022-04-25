#!/bin/sh

NODE_MODULES_DIR="node_modules"

if [ ! -d "$NODE_MODULES_DIR" ]; then
  yarn install
fi

yarn start