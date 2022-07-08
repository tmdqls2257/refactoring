export default class Book {
  #reservations
  constructor() {
    this.#reservations = []
  }

  // 기존의 사용자가 예약을 할 때는 더 빠르게 하고 싶다면은
  // isPriority를 true로 설정하고 isPriority가 true일 경우
  // 더 빠르게 예약
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer)
  }

  hasReservation(customer) {
    return this.#reservations.some(
      reservedCustomer => reservedCustomer.id === customer.id
    )
  }
}
