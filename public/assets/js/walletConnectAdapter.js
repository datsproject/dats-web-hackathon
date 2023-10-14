let contractAddress = ''; //'0xFE809A2d316db1D4831Bd1340FB930075069Cda5'; 

//let contractAbi = null; //JSON.parse(fs.readFileSync(path.join(__dirname, '/pages/contract-abi.json'), 'utf-8'));


const connectButton = document.querySelector("#connectToMetamask");
const disconnectButton = document.querySelector("#logout");
const connectedProfile = document.querySelector("#connectedProfile");
const accountAddressText = document.querySelector("#accountAddress");

const rpcUrl = "https://bsc-dataseed.binance.org/"; // https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3

let provider = null;
let signer = null;
let accounts = null;
let selectedAccount = null;

const onConnect = async() => {
    /*
    const provider = new ethers.providers.JsonRpcProvider('');
    const signer = provider.getSigner();
    */

    provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    signer = await window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
        console.log(accounts);
        selectedAccount = accounts[0];
        accountAddressText.innerHTML = `${selectedAccount.substring(0,10)}..........${selectedAccount.slice(-10)}`;

        connectButton.classList.add('d-none');
        connectedProfile.classList.remove('d-none');

        return new ethers.providers.Web3Provider(window.ethereum).getSigner();
    });

    console.log(signer);


    window.ethereum.on("chainChanged", (network) => {
        console.log(`Chain changed: ${network}`);
        window.location.reload();
    });

    window.ethereum.on("accountsChanged", (account) => {
        console.log(`Account changed: ${account}`);
        window.location.reload();
    });


    if (!supportedChains.includes(parseInt(window.ethereum.chainId, 16))) {
        savedWarningNotify(`
                Unsupported network. <br> <br>

                Supported Networks
                <ul>
                    <li>BNB Smart Chain Mainnet</li>
                    <li>ZetaChain Athens-3 Testnet</li>
                    <li>opBNB Mainnet</li>
                </ul>
        `)
            //savedWarningNotify("Dats Project does not support other than Binance Smart Chain Mainnet and Shardeum Dapp Sphinx 1.X networks.")
    }

    /*

    accounts = await provider.listAccounts();
    console.log(accounts);

    accountAddressText.innerHTML = `${accounts[0].substring(0,10)}..........${accounts[0].slice(-10)}`;

    connectButton.classList.add('d-none');
    connectedProfile.classList.remove('d-none');
    */

}

const contract = async(contractAbi, contractAddress) => {
    if (selectedAccount) {
        return new ethers.Contract(contractAddress, contractAbi, signer);
    } else {
        return false;
    }
}

const onDisconnect = () => {
    provider = null;
    signer = null;
    accounts = null;
    selectedAccount = null;
    window.location.reload();
}

window.addEventListener('load', async() => {

    connectButton.classList.remove('d-none');
    connectedProfile.classList.add('d-none');

    connectButton.addEventListener("click", onConnect);
    disconnectButton.addEventListener("click", onDisconnect);

    connectButton.click();
});