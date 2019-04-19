let ethers = require('ethers')
const { ABI, ADDRESS } = require('./credentials')
let provider = ethers.getDefaultProvider('mainnet');
let contract = new ethers.Contract(ADDRESS, ABI, provider);

const listening = async () => {
    contract.on("Transfer", (from, to, amount) => {
        obj = {
            from: from,
            to: to,
            amount: ethers.utils.formatEther(amount.toString())
        }
        console.log(obj)
    })
}
listening()