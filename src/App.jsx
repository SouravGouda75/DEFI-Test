import React, { useEffect, useState } from 'react'
import './App.css'
import { Provider,Contract, getBalance, PAY } from './Back-end/backend';

const App = () => {
  const [Address,setAddress]=useState('');
  const [userAddress,setuserAddress]=useState('');
  const [amount,setAmount]=useState('');
  const [balance,setBalance]=useState('');
  useEffect(()=>{
    const load=async()=>{
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAddress(accounts[0])
      setBalance(await getBalance());
    }
    load();
  },[balance])

  const submit=async(e)=>{
    e.preventDefault()
    await PAY(userAddress,amount)
    setuserAddress('')
    setAmount('')
  }
  return (
    <div>
      <form onSubmit={submit}>
        <h3>ETH: {balance}</h3>
        <h5>Address: {Address}</h5>
        <input type="text" placeholder="Enter Address" onChange={(e)=>setuserAddress(e.target.value)}/>
        <input type="text" placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
