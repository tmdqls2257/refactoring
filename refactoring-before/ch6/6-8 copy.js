export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

// 온도가 정상적인 범위내에 있는지 확인하는 클래스를 만들어 놓으면 더 좋을 것 같다.
export class NumberRange{
  #min
  #max
  constructor(min, max){
    this.min = min;
    this.max = max;
  }

  get min(){
    return this.#min;
  }

  get max(){
    return this.#max;
  }

  contains(numbers){
    return numbers >= this.#min && this.max <= this.#max;
  }
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
const operationPlan = new NumberRange(51, 53);

readingsOutsideRange(
  station,
  operationPlan
);
