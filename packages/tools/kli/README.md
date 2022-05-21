# ✨ React 18 Mono Repo
- Monorepo
- Yarn workspace
- Webpack 5 boilerplate
- React 18
- Typescrcipt
- Css / Less

# 🔥 Usage - Without installing
Creates a new repo from git template using cli and npx.

```bash
$ npx @infini-soft/kli mono create myrepo

```

# 📦 Install
```bash
$ yarn add @infini-soft/kli
or
$ npm install @infini-soft/kli

```

# 🔨 Usage

```bash
$ ./kli.js

Kitchen Line Interface v0.0.1-alpha.0
Powered 🚀 by Infinisoft


Usage
$ kli.js <commands> <subcommands> [arguments] [--options]

options
--debug                     - Verbose mode
--help                      - Usage
--version                   - Version
--dry-run                   - Simulate the execution without changing anything
--skeleton                  - Console log json skeleton for the command input

commands    subcommands    arguments
mono         create          <target>      - Create new monorepo to <target> folder.
component    create          <json input>  - Create new federated component.

```

# Examples

Create new mono repo
```bash
$ ./kli.js mono create my-new-repo
```

Create new federated react component
```bash
$ ./kli.js component create --skeleton

Component sample json input skeleton
{ name: 'appname', component: 'ButtonA', port: 8088 }
```

Change parameters within `skeleton.json` then run command below.
```bash
$ ./kli.js mono create skeleton.json
```

# Stay tuned
Alot more to come soon

Powered 🚀 by [Infinisoft Inc.](https://www.infini-soft.com)
<br>
Wanna cook the future? Come in the kitchen [https://www.kitchen.infini-soft.com]
