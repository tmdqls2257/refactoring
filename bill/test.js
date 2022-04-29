function inNewEngland(customer) {
  const stateCode = customer.address.state
  return NEWinNewEngland(stateCode)
}
function NEWinNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
}
