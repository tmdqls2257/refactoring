import { acquireReading, baseRate } from './6-9-copy'

const aReading = acquireReading()

export const taxableCharge = aReading.taxableCharge
console.log(taxableCharge)
