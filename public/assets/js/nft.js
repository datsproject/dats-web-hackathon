const bscNftContractAddress = "0xb6Ad71ded9C092Aa4105fB367950647ca4B67bC0";
const mintNftButton = document.getElementById("mintNft");
const processingMintNftButton = document.getElementById('processingMintNft');

document.addEventListener('DOMContentLoaded', async() => {

    if (parseInt(window.ethereum.chainId, 16) == 56) {
        contractAddress = '0x213f2D530e983897f52993B89d70e60cDDe91b0e';
        contractAbi = JSON.parse(bscContractAbi);
    }

    if (parseInt(window.ethereum.chainId, 16) == 8081) {
        contractAddress = '0xB42fC442857CF83a9dE80a74bB5865214fDc2ECd';
        contractAbi = JSON.parse(shardeumContractAbi);
    }

    if (parseInt(window.ethereum.chainId, 16) == 7001) {
        contractAddress = '0x6A907532d057daD23dD34df76ed571f76f85aeCE';
        contractAbi = JSON.parse(zetaContractAbi);
    }

    await getNft();
});

const mintNft = async(callback) => {

    mintNftButton.classList.add("d-none");
    processingMintNftButton.classList.remove("d-none");

    if (!await checkContractByAddress()) {
        mintNftButton.classList.remove("d-none");
        processingMintNftButton.classList.add("d-none");
        savedWarningNotify(`
            Transaction canceled <br><br>
            You must first register with at least one of the Dats services.
        `);

        return false;
    }

    setTimeout(async() => {

        try {
            await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(bscNftContractAddress, bscNftAbi, signer);
            const contractWithSigner = nftContract.connect(signer);
            const txResponse = await contractWithSigner.mintArtwork();

            const receipt = await txResponse.wait();

            console.log('Transaction confirmed with block number:', receipt.blockNumber);

            const event = receipt.events.find(e => e.event === "ArtworkMinted");

            if (event) {
                const mintedId = event.args[0];
                console.log('Minted ID:', mintedId.toString());
            }
            callback(mintNftButton, processingMintNftButton);
        } catch (error) {
            savedErrorNotify(error.message);
            mintNftButton.classList.remove("d-none");
            processingMintNftButton.classList.add("d-none");
        }


    }, 1000);
}

const getNft = async() => {

    setTimeout(async() => {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const nftContract = new ethers.Contract(bscNftContractAddress, bscNftAbi, signer);
        const nftContract = await contract(bscNftAbi, bscNftContractAddress, signer);
        // const contractWithSigner = nftContract.connect(signer);
        // console.log('contractWithSigner: ', contractWithSigner);
        const hasMinted = await nftContract.hasMinted(selectedAccount);

        if (hasMinted) {

            mintNftButton.classList.add('d-none');

            const mintedToken = await nftContract.mintedToken(selectedAccount);
            let tokenURI = await nftContract.tokenURI(mintedToken);
            tokenURI = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');

            const response = await fetch(tokenURI);
            const json = await response.json();
            let nftImage = json.image;
            nftImage = nftImage.replace('ipfs://', 'https://ipfs.io/ipfs/');
            document.getElementById('nftImage').src = nftImage;

            // ipfs://bafybeihvzofteqs4tkn62bndf7uqjq2fh3jpsu3xae6gwljpbvrfune4ci/0.json
            // https://ipfs.io/ipfs/bafybeihvzofteqs4tkn62bndf7uqjq2fh3jpsu3xae6gwljpbvrfune4ci/0.json
        }
    }, 1000);

}

async function checkContractByAddress() {

    let result = false;


    try {
        const datsContract = await contract(contractAbi, contractAddress);
        const ddosData = await datsContract.getDDos();
        if (ddosData && parseInt(ddosData.id, 16) > 0) {
            result = true;
        }
    } catch (error) {
        console.log(`Get DDos settings from contract error, ${error.message}`);
    }

    console.log('checkDDos: ', result);

    if (result) {
        return result;
    }


    try {
        const datsContract = await contract(contractAbi, contractAddress);
        const superComputerData = await datsContract.getSuperComputer();
        if (superComputerData && parseInt(superComputerData.id, 16) > 0) {
            result = true;
        }
    } catch (error) {
        console.log(`Get super computer settings from contract error, ${error.message}`);
    }

    console.log('checkSuperComputer: ', result);

    if (result) {
        return result;
    }


    try {
        const datsContract = await contract(contractAbi, contractAddress);
        const cyberData = await datsContract.getCyberSecurity();
        if (cyberData && parseInt(cyberData.id, 16) > 0) {
            result = true;
        }
    } catch (error) {
        console.log(`Get cyber security research settings from contract error, ${error.message}`);
    }


    console.log('checkCyber: ', result);


    if (result) {
        return result;
    }



    try {
        const datsContract = await contract(contractAbi, contractAddress);
        const vulnerabilityData = await datsContract.getVulnerability();
        if (vulnerabilityData && parseInt(vulnerabilityData.id, 16) > 0) {
            result = true;
        }
    } catch (error) {
        console.log(`Get vulnerability scanning settings from contract error, ${error.message}`);
    }



    console.log('checkVulnerability: ', result);

    if (result) {
        return result;
    }



    try {
        const datsContract = await contract(contractAbi, contractAddress);
        const blockchainData = await datsContract.getBlockchain();
        if (blockchainData && parseInt(blockchainData.id, 16) > 0) {
            result = true;
        }
    } catch (error) {
        console.log(`Get blockchain settings from contract error, ${error.message}`);
    }



    console.log('checkBlockchain: ', result);

    return result;

}

mintNftButton.addEventListener("click", async() => {
    try {
        await mintNft((mintBtn, processingBtn) => {
            mintBtn.classList.remove("d-none");
            processingBtn.classList.add("d-none");
        });

        await getNft();
    } catch (error) {
        console.log(`Mint NFT error. ${error.message}`);
    }
});