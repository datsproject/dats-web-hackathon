const saveCyberButton = document.getElementById("saveCyber");
const processingCyberButton = document.getElementById("processingCyber");
const approveCyberSecurityResearchSwitch = document.getElementById("switchApproveCyberSecurityResearch");
const webSecurityCheckbox = document.getElementById("chkWebSecurity");
const serverSecurityCheckbox = document.getElementById("chkServerSecurity");
const ransomwareResearchCheckbox = document.getElementById("chkRansomwareResearch");
const malwareResearchCheckbox = document.getElementById("#chkMalwareResearch");


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

        await getCyber();
    } else {
        saveCyberButton.disabled = true;
    }
});


async function saveCyber(isApprove, webSecurity, serverSecurity, ransomwareResearch, malwareResearch, callback) {

    saveCyberButton.classList.add("d-none");
    processingCyberButton.classList.remove("d-none");

    const datsContract = await contract(contractAbi, contractAddress);

    const listener = (id, consumer, data) => {
        console.log(`id: ${id}, consumer: ${consumer}, data: ${data}`);
        log.logInfo(`id: ${id}, consumer: ${consumer}, data: ${data}`);
    }

    datsContract.on("CyberSecuritySaved", listener);

    setTimeout(async() => {

        try {
            await datsContract.saveCyberSecurity(isApprove, webSecurity, serverSecurity, ransomwareResearch, malwareResearch);
            callback(saveCyberButton, processingCyberButton);
        } catch (error) {
            savedErrorNotify(error.message);
            saveCyberButton.classList.remove("d-none");
            processingCyberButton.classList.add("d-none");
        }


    }, 1000);
}

async function getCyber() {

    setTimeout(async() => {

        try {
            const datsContract = await contract(contractAbi, contractAddress);
            const cyberData = await datsContract.getCyberSecurity();
            if (cyberData && parseInt(cyberData.id, 16) > 0) {
                approveCyberSecurityResearchSwitch.checked = cyberData.isApprove;
                webSecurityCheckbox.checked = cyberData.webSecurity;
                serverSecurityCheckbox.checked = cyberData.serverSecurity;
                ransomwareResearchCheckbox.checked = cyberData.ransomwareResearch;
                malwareResearchCheckbox.checked = cyberData.malwareResearch;
            } else {
                savedWarningNotify("Cyber Security Research settings are not saved in the contract. Please save your cyber security research settings from Dats Desktop first.");
                saveCyberButton.disabled = true;
            }
        } catch (error) {
            console.log(`Get cyber security research settings from contract error, ${error.message}`);
        }
    }, 1000);

}

saveCyberButton.addEventListener('click', async() => {

    await saveCyber(
        approveCyberSecurityResearchSwitch.checked,
        webSecurityCheckbox.checked,
        serverSecurityCheckbox.checked,
        ransomwareResearchCheckbox.checked,
        malwareResearchCheckbox.checked, (saveBtn, processingBtn) => {
            savedSuccessNotify();
            saveBtn.classList.remove("d-none");
            processingBtn.classList.add("d-none");
        });
});