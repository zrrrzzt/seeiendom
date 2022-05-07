'use strict'

const tap = require('tap')

const { dependencies, devDependencies } = require('../../package.json')
const dropModules = ['standard']
const isDropped = module => !dropModules.includes(module)

if (dependencies && Object.keys(dependencies).filter(isDropped).length > 0) {
  Object.keys(dependencies).filter(isDropped).forEach((dependency) => {
    const module = require(dependency)
    tap.ok(module, `${dependency} loads ok`)
  })
}

if (devDependencies && Object.keys(devDependencies).filter(isDropped).length > 0) {
  Object.keys(devDependencies).filter(isDropped).forEach((dependency) => {
    const module = require(dependency)
    tap.ok(module, `${dependency} loads ok`)
  })
}
