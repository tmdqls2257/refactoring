// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1
}
// 어떤 특정한 조건을 검사하고 그 조건이 변경이 가능할 경우 함수로 추출하는 것이 좋다.

// 예제 2
function reportLines(customer) {
  const lines = []
  lines.push(['name', customer.name])
  lines.push(['location', customer.location])
  return lines
}
