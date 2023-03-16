import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signup, setSignup] = useState(false)
  const [checkPassword, setCheckPassword] = useState(false)

  useEffect(() => {
    async function getPass() {
      let reply = await axios.get('http://localhost:8000/password/'+ email).catch((err) => console.log(err))
      console.log(reply)
    }

    console.log('running');

    getPass()
  }, [checkPassword])

  return (
    !signup && <div 
      className={`
        flex
        flex-col
        justify-center
        items-center
        bg-zinc-200
        h-[400px]
        w-[600px]
        p-5
        rounded-[30px]
        gap-[15px]
      `}
    >
      <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email'
        className={`
        w-[400px]
        h-[40px]
        rounded-[20px]
        px-5
      `}
      />
      <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password'
        className={`
        w-[400px]
        h-[40px]
        rounded-[20px]
        px-5
      `}
      />
      <button className={`
        w-[400px]
        h-[40px]
        mt-[10px]
        rounded-[20px]
        bg-[#ff6c02]
        hover:border-2
        hover:bg-white
        hover:text-[#ff6c02]
        hover:border-[#ff6c02]
        transition
        text-white
        font-bold
        text-lg
      `}
        onClick={() => setCheckPassword(!checkPassword)}
      >
        Login
      </button>
      <button className={`
        w-[400px]
        h-[40px]
        rounded-[20px]
        bg-[#ff6c02]
        hover:border-2
        hover:bg-white
        hover:text-[#ff6c02]
        hover:border-[#ff6c02]
        transition
        text-white
        font-bold
        text-lg
      `}
      onClick={() => setSignup(true)}
      >
        No Account? Sign-up here!
      </button>
    </div>
    )
}

export default Login