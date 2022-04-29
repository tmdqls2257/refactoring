'use strict'

function statement(invoice) {
  let totalAmount = 0
  let volumeCredits = 0
  let result = `청구 내역 (고객명: ${invocie.cutomer})\n`
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format

  for (let perf of invoice.performances) {
    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0)
    // 희극 관객 5명마다 추가 포인트를 제공
    if ('comedy' === playFor(perf).type)
      volumeCredits += Math.floor(perf.audience / 5)

    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${
      perf.audience
    }석)\n`
    totalAmount += amountFor(perf)
  }
  result += `총액: ${format(thisAmount / 100)}\n`
  result += `적립 포인트: ${volumeCredits}점\n`
  return result
}
function amountFor(aPerformance) {
  // 값이 바뀌지 않는 변수는 매개 변수로 전달
  let thisAmount = 0 // 변수를 초기화하는 코드
  switch (playFor(aPerformance).type) {
    case 'tragedy': // 비극
      thisAmount = 4000
      if (aPerformance.audience > 30) {
        thisAmount += 1000 * (aPerformance.audience - 30)
      }
      break
    case 'comedy': // 희극
      thisAmount = 3000
      if (aPerformance.audience > 20) {
        thisAmount += 1500 * (aPerformance.audience - 20)
      }
      thisAmount += 300 * aPerformance.audience
      break
    default:
      throw new Error(`알 수 없는 장르; ${playFor(aPerformance).type}`)
  }
  return thisAmount
}

function playFor(aPerformance) {
  return plays[aPerformance.playID]
}
