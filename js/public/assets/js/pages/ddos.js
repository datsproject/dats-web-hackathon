const saveDdosButton = document.getElementById("saveDdos");
const processingDdosButton = document.getElementById('processingDdos');
const approveDdosServiceSwitch = document.getElementById("approveDdosService");
const trafficScaleRangeInput = document.getElementById("rangeMbit");
const selectedTrafficScaleRangeValueSpan = document.getElementById("selectedMbitRangeValue");


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

        await getDDos();
    } else {
        saveDdosButton.disabled = true;
    }


});

const showRangeValue = (newValue) => {
    selectedTrafficScaleRangeValueSpan.innerHTML = `${newValue} mbit`;
}

async function saveDDos(isApprove, trafficScale, callback) {

    saveDdosButton.classList.add("d-none");
    processingDdosButton.classList.remove("d-none");

    const datsContract = await contract(contractAbi, contractAddress);

    const listener = (id, consumer, data) => {
        console.log(`id: ${id}, consumer: ${consumer}, data: ${data}`);
    }

    datsContract.on("DDosSaved", listener);

    setTimeout(async() => {
        try {
            await datsContract.saveDDos(isApprove, trafficScale);
            callback(saveDdosButton, processingDdosButton);
        } catch (error) {
            savedErrorNotify(error.message);
            saveDdosButton.classList.remove("d-none");
            processingDdosButton.classList.add("d-none");
        }

    }, 1000);

}

async function getDDos() {

    setTimeout(async() => {
        try {
            const datsContract = await contract(contractAbi, contractAddress);
            const ddosData = await datsContract.getDDos();
            if (ddosData && parseInt(ddosData.id, 16) > 0) {
                approveDdosServiceSwitch.checked = ddosData.isApprove;
                trafficScaleRangeInput.value = ddosData.trafficScale;
                showRangeValue(trafficScaleRangeInput.value);
            } else {
                savedWarningNotify("Ddos settings are not saved in the contract. Please save your ddos settings from Dats Desktop first.");
                saveDdosButton.disabled = true;
            }
        } catch (error) {
            console.log(`Get DDos settings from contract error, ${error.message}`);
        }

    }, 1000);

}

saveDdosButton.addEventListener('click', async() => {
    try {
        await saveDDos(approveDdosServiceSwitch.checked, trafficScaleRangeInput.value, (saveBtn, processingBtn) => {
            savedSuccessNotify();
            saveBtn.classList.remove("d-none");
            processingBtn.classList.add("d-none");
            console.log(`ddos settings saved successfully. Approve: ${approveDdosServiceSwitch.checked}, TrafficScale: ${trafficScaleRangeInput.value}`);
        });
    } catch (error) {
        console.log(`Save DDos settings to contract error. ${error.message}`);
    }
});