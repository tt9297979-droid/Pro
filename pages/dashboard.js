import { useEffect, useState } from 'react'

export default function Dashboard(){

  const [signal,setSignal] = useState(null)

  async function loadSignal(){
    let r = await fetch('/api/getSignal')
    let d = await r.json()
    setSignal(d)
  }

  useEffect(()=>{
    loadSignal()
    setInterval(loadSignal, 300000) // 5 นาที
  },[])

  if(!signal) return <p>Loading...</p>

  return(
    <div className="container">

      <div className="card">
        <h2>📊 AI SIGNAL</h2>
        <p>Signal: {signal.signal}</p>
        <p>Entry: {signal.entry}</p>
        <p>TP: {signal.tp}</p>
        <p>SL: {signal.sl}</p>
      </div>

    </div>
  )
}
