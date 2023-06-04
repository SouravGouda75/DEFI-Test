import { ethers } from 'ethers';

import { address,abi } from './globals';
export const Provider=()=>{
	return new ethers.providers.Web3Provider(window.ethereum)
}
export const Contract=()=>{
	const signer=Provider().getSigner();
		return new ethers.Contract(address,abi,signer)
}

export const getBalance=async()=>{
	const signer=Provider().getSigner();
	const balance=await signer.getBalance();
	return ethers.utils.formatEther(balance);
	
}

export const PAY=async(address,amount)=>{
	await Contract().PAY(address,{value:ethers.utils.parseEther(amount)})
}
