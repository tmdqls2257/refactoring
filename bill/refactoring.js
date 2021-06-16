function amountFor(perf, play){// 값이 바뀌지 않는 변수는 매개변수로 전달
  let thisAmount = 0;//변수를 초기화할 코드
  switch(play.type){
    case "tragedy": //비극
      thisAmount = 40000;
      if (perf.audience > 30){
        thisAmount +=1000 * (perf.audience - 30);
      }
    case "comedy": //희극
      thisAmount = 30000;
      if (perf.audience > 20){
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;
    default: throw new Error(`알 수 없는 장르: ${play.type}`);
  }
  return thisAmount;
  }
  
  function statement(invoice, plays){
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invocie.cutomer})\n`;
    const format = new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", minimumFractionDigits: 2}).format;
    for (let perf of invoice.performances){
      const play = plays[perf.playID];
      let thisAmount = amountFor(perf, play);
      // 포인트를 적립한다.
      volumeCredits += Math.max(perf.audience - 30, 0);
      // 희슷 관객 5명마다 추가 포인트를 제공
      if ("comedy" ===play.type) volumeCredits +=Math.floor(perf.audience / 5);
  
      // 청구 내역을 출력한다.
      result += `${play.name}: ${format(thisAmount/100)} (${perf.audience}석)\n`;
      totalAmount += thisAmount;
    }
    result +=`총액: ${format(totalAmount/100)}\n`;
    result +=`적립 포인트: ${volumeCredits}점\n`;
    return result;
  }