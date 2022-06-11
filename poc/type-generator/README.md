
```
  _________     _______  ______    _____ ______ _   _ 
 |__   __\ \   / /  __ \|  ____|  / ____|  ____| \ | |
    | |   \ \_/ /| |__) | |__    | |  __| |__  |  \| |
    | |    \   / |  ___/|  __|   | | |_ |  __| | .   |
    | |     | |  | |    | |____  | |__| | |____| |\  |
    |_|     |_|  |_|    |______|  \_____|______|_| \_|
```

# Goal
Single source of truthe for data models

# Data Model Language
Json Schema

# Requirements
Generate code & sdk from json schema files

# POC
Tried `json-schema-to-typescript` lib and did small cli tool in `jsonschema2ts.ts` and its working super!

# Files

- schema.json         Data model trial
- jsonschema2ts.ts    Cli tool

# Usage

```bash
$ ./jsonschema2ts.ts schema.json foo.d.ts
```
