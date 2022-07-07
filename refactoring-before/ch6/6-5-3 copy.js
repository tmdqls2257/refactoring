// customer의 정보를 모두 받아오는것보다 특정한 정보만 받아오는 것이 좋다.
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
