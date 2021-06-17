  'use strict';

function statement(invoice, plays){
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances;
  return renderPlainText(statementData, plays);
}
function renderPlainText(data, plays){
  let result = `청구 내역 (고객명: ${data.cutomer})\n`;
  for (let perf of data.performances){

    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${USD(amountFor(aPerformance)/100)} (${perf.audience}석)\n`;
  }
  result +=`총액: ${USD(appleSauce()/100)}\n`;
  result +=`적립 포인트: ${totalVolumeCredits()}점\n`;
  
  function appleSauce(){
    let totalAmount = 0;
    for (let perf of data.performances){
      totalAmount += amountFor(perf);
    }
    return totalAmount;
  }
  
  function totalVolumeCredits(){
    let volumeCredits = 0;
    for (let perf of data.performances){
      volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
  }
  
  function USD(aNumber){
    return new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", minimumFractionDigits: 2}).format(aNumber);
  }
  
  function volumeCreditsFor(aPerformance){
    let result = 0;
    // 포인트를 적립한다.
    result += Math.max(aPerformance.audience - 30, 0);
    // 희슷 관객 5명마다 추가 포인트를 제공
    if ("comedy" === playFor(aPerformance).type) result +=Math.floor(aPerformance.audience / 5);
  }
  
  function playFor(perf){
    return plays[perf.playID];
  }
  
  function amountFor(aPerformance){// 값이 바뀌지 않는 변수는 매개변수로 전달
    let result = 0;//변수를 초기화할 코드
    switch(playFor(perf).type){
      case "tragedy": //비극
        result = 40000;
        if (aPerformance.audience > 30){
          result +=1000 * (aPerformance.audience - 30);
        }
      case "comedy": //희극
        result = 30000;
        if (aPerformance.audience > 20){
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default: throw new Error(`알 수 없는 장르: ${playFor(perf).type}`);
    }
    return result;
    }
  return result;
}