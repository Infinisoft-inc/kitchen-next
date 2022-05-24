#!/usr/bin/env ts-node

const { writeFileSync, readFileSync } = require('fs')
const pkg = require('./package.json')


type MetaMf = {
  name: string
  component: string
  // url:string
  typeAlias: string
  // title:string
  // description:string
  // image: string
}

// const model: MetaMf = {
//   name: pkg.name,
//   component: pkg.infinisoft.moduleFederation.component,
//   typeAlias: ''
// }

const originalType = readFileSync(pkg.types).toString('utf-8')

const defaultComponent = originalType.match(/export default.*;/)[0].split(" ").reverse()[0].replace(';','')

if (!pkg.infinisoft.moduleFederation.component.includes(defaultComponent)){
  console.log(`Configuration error, component is unlikely to be loaded successfully!`)
  console.error(`package.json configured component name is ${pkg.infinisoft.moduleFederation.component}`)
  console.error(`${pkg.types} component type alias is ${defaultComponent}`)
}

pkg.infinisoft.moduleFederation.typeAlias = originalType.replace(`declare module "component/index"`, `declare module "${pkg.name}/${pkg.infinisoft.moduleFederation.component}"`)

writeFileSync('pkg.json', JSON.stringify(pkg))
writeFileSync('extracted.d.ts', pkg.infinisoft.moduleFederation.typeAlias)
