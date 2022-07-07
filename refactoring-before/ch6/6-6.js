// let defaultOwner = { firstName: '마틴', lastName: '파울러' };
// 불변성
// getDefaultOwner라는 함수를 통해서만 defaultOwner를 반환 받을 수 있게 해줍니다.

// export function getDefaultOwner() {
//   return defaultOwner;
// }

// export function getDefaultOwner() {
//   return Object.assign(defaultOwner);
// }

// 하지만 얕은 복사를 하기 때문에 이중 객체로 호출하면 값을 변경 시킬 수 있다.
export function getDefaultOwner() {
  return {...defaultOwner};
}
// 클래스를 만들어서 해결할 수 있다.
// get한 값만 리턴을 하기 때문에 다시는 수정을 할 수 없다.
let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

class Person{
  #lastName;
  #firstName;

  constructor(data){
    this.#lastName = data.lastName
    this.#firstName = data.firstName
  }

  get lastName(){
    return this.#lastName
  }

  get firstName(){
    return this.#firstName
  }
}