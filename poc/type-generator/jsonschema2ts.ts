#!/usr/bin/env ts-node

import fs from 'fs'
import { compileFromFile } from 'json-schema-to-typescript'

const source = process?.argv?.[2]
const destination = process?.argv?.[3]
const isSourceExisting = fs.existsSync(source)
const isDestExisting = fs.existsSync(destination)

if (isSourceExisting && !isDestExisting){
  console.log(source)
  console.log(destination)

  compileFromFile(source)
    .then(ts => fs.writeFileSync(destination, ts))
  // console.log(`hi from tool :0`)

}

