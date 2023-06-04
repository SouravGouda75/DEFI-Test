export const abi=[
	{
			"inputs": [
					{
							"internalType": "address payable",
							"name": "to",
							"type": "address"
					}
			],
			"name": "PAY",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "owner",
			"outputs": [
					{
							"internalType": "address",
							"name": "",
							"type": "address"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "userBalance",
			"outputs": [
					{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
					}
			],
			"stateMutability": "view",
			"type": "function"
	}
]

// export const address='0x5FbDB2315678afecb367f032d93F642f64180aa3'

// CONTRACT ADDRESS RECEIVED FROM THE SEPOLIA NETWORK
 export const address=`${import.meta.env.VITE_CONTRACT_ADDRESS}`
