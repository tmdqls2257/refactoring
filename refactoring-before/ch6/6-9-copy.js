export class Reading {
  #customer
  #quantity
  #month
  #year
  constructor(data) {
    this.#customer = data.customer
    this.#quantity = data.quantity
    this.#month = data.month
    this.#year = data.year
  }

  get customer() {
    return this.#customer
  }

  get quantity() {
    return this.#quantity
  }

  get year() {
    return this.#year
  }

  get month() {
    return this.#month
  }

  get baseRate() {
    if (year === 2017 && month === 5) return 0.1 * quantity
    return 0.2 * quantity
  }

  get baseCharge() {
    return this.baseRate * this.quantity
  }

  get taxThreshold() {
    return 0.1
  }

  get taxableCharge() {
    return Math.max(0, this.baseRate - taxThreshold(aReading.year))
  }
}

const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
})

export function acquireReading() {
  return reading
}

export function baseRate(Date) {
  if (Date.year === 2017 && Date.month === 5) return 0.1
  return 0.2
}
