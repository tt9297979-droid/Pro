import { useState } from 'react'

export default function Home(){

  const [msg, setMsg] = useState("")

  async function uploadSlip(e){
    const file = e.target.files[0]

    const reader = new FileReader()

    reader.onload = async () => {

      let r = await fetch('/api/verifySlip',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          slip_image: reader.result,
          user_id: "demo"
        })
      })

      let d = await r.json()

      if(d.success){
        setMsg("✅ KEY: " + d.key)
      }else{
        setMsg("❌ ไม่ผ่าน")
      }
    }

    reader.readAsDataURL(file)
  }

  return(
    <div className="container">

      <div className="card">
        <h2>💳 สมัคร VIP</h2>
        <img src="/qr.png" width="200"/>
        <p>ราคา 199 บาท</p>
        <input type="file" onChange={uploadSlip}/>
        <p>{msg}</p>
      </div>

    </div>
  )
}
