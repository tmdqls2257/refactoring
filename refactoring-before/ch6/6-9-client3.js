import { acquireReading, baseRate } from './6-9.js'

const aReading = acquireReading()

function calculateBaseCharge(aReading) {
  return baseRate(aReading) * aReading.quantity
}

const basicChargeAmount = calculateBaseCharge(aReading)
