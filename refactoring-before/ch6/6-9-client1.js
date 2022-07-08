import { acquireReading, baseRate } from './6-9.js'

const aReading = acquireReading()

const baseCharge = baseRate(aReading) * aReading.quantity
console.log(baseCharge)
