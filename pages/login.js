import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login(){

  const [user,setUser] = useState("")
  const [pass,setPass] = useState("")
  const router = useRouter()

  async function login(){

    let r = await fetch('/api/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({user,pass})
    })

    let d = await r.json()

    if(d.success){
      router.push('/dashboard')
    }else{
      alert("ผิด")
    }

  }

  return(
    <div className="container">

      <input placeholder="user" onChange={e=>setUser(e.target.value)}/>
      <input placeholder="pass" type="password" onChange={e=>setPass(e.target.value)}/>
      <button onClick={login}>Login</button>

    </div>
  )
}
