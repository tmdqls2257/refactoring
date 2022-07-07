export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

// 빠른 예약을 하고 진행하고 싶은경우 true를 전달
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
