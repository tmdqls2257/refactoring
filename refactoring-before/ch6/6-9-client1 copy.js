import { acquireReading } from './6-9-copy.js'

const aReading = acquireReading()

const baseCharge = aReading.baseRate * aReading.quantity

console.log(baseCharge)
