import React, {useState} from 'react'

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div 
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
      <input value={name} type='text' onChange={(e) => setName(e.target.value)} placeholder='Name'
        className={`
          w-[400px]
          h-[40px]
          rounded-[20px]
          px-5
        `}
      />
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
        mt-[20px]
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
      >
        Signup
      </button>
    </div>
  )
}

export default Signup