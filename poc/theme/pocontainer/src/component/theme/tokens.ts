#!/usr/bin/env ts-node

const dark = {
  // --md-sys
  color: {
    primary: '#204BC0',
    "on-primary": '#FFFFFF',
    secondary: '#435268',
    "on-secondary": '#FFFFFF',
    background: '#1B1B1B',
    "on-background": '#E3E2E6',
    surface: '#1B1B1B',
    "on-surface": '#E3E2E6',
  },
};


const object2token = <T extends Record<string, any>>(token: string, obj: T) => {
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'object') {
      return object2token(`${token}-${k}`, obj[k])
    }

    return `${token}-${obj[k]}`
  })
}

console.log(`Helo`)