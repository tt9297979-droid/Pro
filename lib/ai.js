export function getSignal(){

  const rand = Math.random()

  if(rand > 0.5){
    return {
      signal: "BUY",
      entry: 2160,
      tp: 2170,
      sl: 2150
    }
  }else{
    return {
      signal: "SELL",
      entry: 2160,
      tp: 2150,
      sl: 2170
    }
  }

}
