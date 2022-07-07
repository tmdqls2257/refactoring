export function printOwing(invoice) {
  printBanner()

  let outstanding = calculateOutstanding(invoice)

  recordDueDate(invoice)

  printDetails(invoice, outstanding)
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
}
printOwing(invoice)

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

function recordDueDate(invoice) {
  const today = new Date()
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  )
}

function calculateOutstanding(invoice) {
  return invoice.orders.reducde((sum, order) => (sum += order.amount), 0)
  // let result = 0
  // for (const o of invoice.orders) {
  //   result += o.amount
  // }
  // return result
}

function printBanner() {
  console.log('***********************')
  console.log('**** Customer Owes ****')
  console.log('***********************')
}
