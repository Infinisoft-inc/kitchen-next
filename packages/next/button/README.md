```
                            _ 
                           | |
   ___   _ __   _   _    __| |
  / __| | '__| | | | |  / _` |
 | (__  | |    | |_| | | (_| |
  \___| |_|     \__,_|  \__,_|
                              
                                                                                                
                                                                    _   
                                                                   | |  
   ___    ___    _ __ ___    _ __     ___    _ __     ___   _ __   | |_ 
  / __|  / _ \  | '_ ` _ \  | '_ \   / _ \  | '_ \   / _ \ | '_ \  | __|
 | (__  | (_) | | | | | | | | |_) | | (_) | | | | | |  __/ | | | | | |_ 
  \___|  \___/  |_| |_| |_| | .__/   \___/  |_| |_|  \___| |_| |_|  \__|
                            | |                                         
                            |_|                                         
  _                                _           _                        
 | |                              | |         | |                       
 | |_    ___   _ __ ___    _ __   | |   __ _  | |_    ___               
 | __|  / _ \ | '_ ` _ \  | '_ \  | |  / _` | | __|  / _ \              
 | |_  |  __/ | | | | | | | |_) | | | | (_| | | |_  |  __/              
  \__|  \___| |_| |_| |_| | .__/  |_|  \__,_|  \__|  \___|              
                          | |                                           
                          |_|   

“I have not failed. I’ve just found 10,000 ways that won’t work.” by Thomas Edison.
```
[repo](../../../README.md)  / [components](../README.md)  / <strong>base_component</strong>
<br />

# Getting started
Focus on features instead working to prepare what's required to start working!. This template is the micro boilerplate core foundation of Infinisoft Kitchen-next module federation ecosystem.

<br />

# Features
- Complete Micro Boiler Plate
- Tiny < 15kb
- Blazing fast
  - Lighthouse Perfect Score  
    a. Performance     100  
    b. Accessibility   100   
    c. Best Practices  100  
    d. SEO             100   
- 0 Configuration
- 0 Dependencies
- 100% Strongly Typed
- 100% Open Configuration
- Mutliple Environment
  - Development
  - Production
- Live Reload
- VSCode Debug
- Cli
- Quality Analysis Reports 
  a. Bundle  
  b. Dependencies  
  c. Performance  
  d. Accessibility  
  e. Best Practices  
  f. SEO  
- Micro State Management  
  Inspect with Redux Chrome Extension
- Event Driven Pub Sub
- Complete Design System
- Compatible Material Design v3 Specification
- DSP Tokens
- Themes
- Encapsulated Style
- Federation Styling Single Source of Truth at runtime  
- Dynamic Runtime Style Injection
- Customizable

# My Feature
Your component entry point starts under `src/component/index.tsx`.

# Micro Context
Component is wrapped around MicroContextProvider and is easy from anywhere to access it with [`useMicronContext()`](src/core/context/index.tsx) hook. By default it contains:

|  Default                     |                                                                |  
|------------------------------|-----------------------------------------------------------------
| store                        |  Reference to the store holding, state, subscriptions, events 
|                              |  [@infini-soft/store](https://www.npmjs.com/package/@infini-soft/store)  
| config                       |  Runtime reference to [`config.json`](src/config/config.json) file 
| log                          |  Logger                                                        

```tsx
const {store} = useMicroContext()
```


Quality Analysis  
- Bundle  
- Performance  

Customization  
src/config/  
  config.json  
  custom.webpack.config.dev  

  Extend  
   - Type  
   - Store  
   - State  
   - Webpack  
     a. custom.webpack.config.dev.js  
     b.   custom.webpack.config.prod.js  
  - Html SPA  
    index.html  

# Stack
> 1. React 18  
> 2. Typescript/Javascript  
> 3. Webpack 5  

# Development Environment  
> - Docker  
> - Linux  
> - Nodejs  
> - Webpack  
> - @infini-soft/kli  
> - @infini-soft/store   

> # Prerequisites  
> 1. Make sure to run node v16.15.0 prior anything    
> `$ nvm use v16.15.0`   
> 2. Install dependencies  
> `$ npm install`  
  
<br />

# How to use
Run folowing scripts for development tasks.   

<br />

# Commands
These commands must be run from within the workspace root folder.    

<br />

# Build

| BUILD COMMANDS         | DESCRIPTIONS                           |
| ---------------------- | -------------------------------------- |
| yarn build             | Prod build                             |
| yarn build:dev:watch   | Build & watch                          |
| yarn build:dev         | Build dev                              |
| yarn build:prod:watch  | Build & watch                          |
| yarn build:prod        | Build                                  |

<br />

> ## Dev vs Prod Builds ?
>  - Dev
>    - Source maps
>    - Not optimized for performance   
>  - Prod
>    - No source maps
>    - Optimized for peformance 

# Run

| RUN COMMANDS           | DESCRIPTIONS                           |
| ---------------------- | -------------------------------------- |

<br />

# Test
| TEST COMMANDS          | DESCRIPTIONS                           |
| ---------------------- | -------------------------------------- |

<br />

## Deploy


| DEPLOY COMMANDS                    | DESCRIPTIONS                           |
| ---------------------------------- | -------------------------------------- |
| yarn deploy:dev                    |  Deploy dev                            |
| yarn deploy:prod                   |  Deploy prod                           |

<br />

# Utils
Utils command

| UTILS  COMMANDS                    | DESCRIPTIONS                           |
| ---------------------------------- | -------------------------------------- |
| yarn clean                         |  Clean temp files                      |
| yarn clean:all                     |  Deletes node modules lock artefacts   |

<br />

<br />

# Folder structure

```
.

```

![image](https://user-images.githubusercontent.com/47437825/177013766-f22d19ab-f60c-4adf-a82a-1314ac609323.png)

# Configurations
These configuration can be found under `src/config/config.json`.

| Keys                   | Types         |  constraints  | Descriptions                          |
| ---------------------- |-------------- | ------------  |-------------------------------------- |
| devtools               |  boolean      |   required    | Enable Redux Chrome Extension         |
|                        |               |               | Observe Micro State / Store Events    |


config/config.json
- devtools

config/index.html
- html spa template

config/custom.webpack.config.dev.json
- custom webpack config

src/components/style/tokens.ts
- define required tokens

src/components/types.ts
- extend types
  - props
  - context
  - state
  - payload

  port forward

  3000    app
  3030    app
  8080    app
  9229    chrome debugger
  40001   module fed live reload
