const saveBlockchainButton = document.getElementById('saveBlockchain');
const processingBlockchainButton = document.getElementById('processingBlockchain');
const approveAttackPreventionSwitch = document.getElementById('switchApproveAttackPrevention');

document.addEventListener('DOMContentLoaded', async() => {
    if (supportedChains.includes(parseInt(window.ethereum.chainId, 16))) {
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

        await getBlockchain();
    } else {
        saveBlockchainButton.disabled = true;
    }
});

async function saveBlockchain(isApprove, callback) {

    saveBlockchainButton.classList.add("d-none");
    processingBlockchainButton.classList.remove("d-none");

    const datsContract = await contract(contractAbi, contractAddress);

    const listener = (id, consumer, data) => {
        console.log(`id: ${id}, consumer: ${consumer}, data: ${data}`);
        log.logInfo(`id: ${id}, consumer: ${consumer}, data: ${data}`);
    }

    datsContract.on("BlockchainSaved", listener);

    setTimeout(async() => {
        try {
            await datsContract.saveBlockchain(isApprove);
            callback(saveBlockchainButton, processingBlockchainButton);
        } catch (error) {
            savedErrorNotify(error.message);
            saveBlockchainButton.classList.remove("d-none");
            processingBlockchainButton.classList.add("d-none");
        }
    }, 1000);
}

async function getBlockchain() {

    setTimeout(async() => {

        try {
            const datsContract = await contract(contractAbi, contractAddress);
            const blockchainData = await datsContract.getBlockchain();
            if (blockchainData && parseInt(blockchainData.id, 16) > 0) {
                approveAttackPreventionSwitch.checked = blockchainData.approveAttackPrevention;
            } else {
                savedWarningNotify("Blockchain security settings are not saved in the contract. Please save your blockchain security settings from Dats Desktop first.");
                saveBlockchainButton.disabled = true;
            }
        } catch (error) {
            console.log(`Get blockchain settings from contract error, ${error.message}`);
        }

    }, 1000);

}

saveBlockchainButton.addEventListener('click', async() => {

    await saveBlockchain(approveAttackPreventionSwitch.checked, (saveBtn, processingBtn) => {
        savedSuccessNotify();
        saveBtn.classList.remove("d-none");
        processingBtn.classList.add("d-none");
    });
});