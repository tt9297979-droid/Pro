function analyze(){

  // จำลอง AI (คุณสามารถต่อ LSTM ทีหลังได้)
  let price = 2160 + Math.random()*10
  let trend = Math.random()

  let signal = trend > 0.5 ? "BUY" : "SELL"

  let tp = signal == "BUY" ? price + 10 : price - 10
  let sl = signal == "BUY" ? price - 10 : price + 10

  // Liquidity Zone (จุดทุบราคา)
  let liquidity = [
    price + 5,
    price - 5
  ]

  return {
    price: price.toFixed(2),
    signal,
    entry: price.toFixed(2),
    tp: tp.toFixed(2),
    sl: sl.toFixed(2),
    liquidity
  }
}

export default function handler(req,res){
  res.json(analyze())
}
