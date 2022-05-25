# ✨ Micro Front-End Command Line Interface - Module Federation - React 18 - Mono Repo
- Module Federation
  - Strongly typed
- Federated Components
  - Create / Build / Deploy / Use / Remove 
- Typescrcipt / Css / Less
- Monorepo
- Yarn workspace
- React 18 / Webpack 5 boilerplate

# 🔥 Usage - Without installing
Creates a new repo from git template using cli and npx.

```bash
$ npx @infini-soft/kli mono create myrepo

```

# 📦 Install
```bash
$ yarn global add @infini-soft/kli
or
$ npm install @infini-soft/kli -g

```

# 🔨 Usage

```bash
Kitchen Line Interface v0.0.6
Powered 🚀 by Infinisoft


Usage
$ kli <commands> <subcommands> [arguments] [--options]

options
--debug                     - Verbose mode
--help                      - Usage
--version                   - Version
--dry-run                   - Simulate the execution without changing anything
--skeleton                  - Console log json skeleton for the command input
--input <json file>         - Customized json skeleton for input

commands    subcommands    arguments
mono         create          <target>      - Create new monorepo to <target> folder.


component     create          <json input>      - Create new federated component.
              build                             - Build component
              deploy                            - Deploy component on cloud.
              use             <name>            - Add module to container
              remove          <name>            - removes module from container

```

# Examples

Create new mono repo
```bash
$ kli mono create my-new-repo
```

Change parameters within `skeleton.json` then run command below.
```bash
$ kli mono create skeleton.json
```

Create new federated react component
```bash
$ kli component create --skeleton

Component sample json input skeleton
{ name: 'appname', component: 'ButtonA', port: 8088 }
```

Use our test federated component
Run following command, it will configure `test1` hosted component on our registry. Without any package installation, you will be able to use it.
```bash
$ kli component use test1
```

# Stay tuned
Alot more to come soon

Powered 🚀 by [Infinisoft Inc.](https://www.infini-soft.com)
<br>
Wanna cook the future? Come in the kitchen [https://www.kitchen.infini-soft.com]
