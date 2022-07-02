![image](https://user-images.githubusercontent.com/47437825/177013766-f22d19ab-f60c-4adf-a82a-1314ac609323.png)

TODO
 Requirement
 - Dynamic Component/Module loading at runtime
 Final Optimization
 - Enable CSP in html and bundler with nonce
 - Add robot.txt for crawling
   https://web.dev/robots-txt/?utm_source=lighthouse&utm_medium=devtools
 
Features
- Live Reload on Dev
- Debug (first load is slow, maybe narrow the pattern in launch.settings could be good)

Nice to Have
- Http FS or Custom Webpack Plugin for types live reload over module federation
 - remotly mount over http to get types.d.ts
 - https://github.com/fangfufu/httpdirfs
 - /dev/fuse missing on wsl2 (should work with linux)
 - https://github.com/microsoft/WSL/issues/17#issuecomment-759817472


Implementation
- under src/component

Analyze
- Bundle
- Performance

Config file

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
