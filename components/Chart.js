export default function Chart(){

  return (
    <div style={{height:"400px"}}>

      <iframe
        src="https://s.tradingview.com/widgetembed/?symbol=XAUUSD&interval=5&theme=dark"
        style={{width:"100%", height:"100%", border:"none"}}
      />

    </div>
  )
}
