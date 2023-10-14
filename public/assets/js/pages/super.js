const saveSuperCompuerButton = document.getElementById("saveSuperComputer");
const processingSuperComputerBtn = document.getElementById('processingSuperComputer');
const approveSuperComputerSwitch = document.getElementById("approveSuperComputer");
const cpuValueRangeInput = document.getElementById("rangeCpu");
const selectedCpuRangeValueSpan = document.getElementById("selectedCpuRangeValue");

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

        await getSuperComputer();
    } else {
        saveSuperCompuerButton.disabled = true;
    }

});

const showRangeValue = (newValue) => {
    selectedCpuRangeValueSpan.innerHTML = `${newValue} core`;
}

async function saveSuperComputer(isApprove, cpuValue, callback) {

    saveSuperCompuerButton.classList.add("d-none");
    processingSuperComputerBtn.classList.remove("d-none");

    const datsContract = await contract(contractAbi, contractAddress);

    const listener = (id, consumer, data) => {
        console.log(`id: ${id}, consumer: ${consumer}, data: ${data}`);
        log.logInfo(`id: ${id}, consumer: ${consumer}, data: ${data}`);
    }

    datsContract.on("SuperComputerSaved", listener);

    setTimeout(async() => {

        try {
            await datsContract.saveSuperComputer(isApprove, cpuValue);
            callback(saveSuperCompuerButton, processingSuperComputerBtn);
        } catch (error) {
            savedErrorNotify(error.message);
            saveSuperCompuerButton.classList.remove("d-none");
            processingSuperComputerBtn.classList.add("d-none");
        }

    }, 1000);
}

async function getSuperComputer() {

    setTimeout(async() => {

        try {
            const datsContract = await contract(contractAbi, contractAddress);
            const superComputerData = await datsContract.getSuperComputer();
            if (superComputerData && parseInt(superComputerData.id, 16) > 0) {
                approveSuperComputerSwitch.checked = superComputerData.isApprove;
                cpuValueRangeInput.value = superComputerData.cpuValue;
                showRangeValue(cpuValueRangeInput.value);
            } else {
                savedWarningNotify("Super Computer settings are not saved in the contract. Please save your super computer settings from Dats Desktop first.");
                saveSuperCompuerButton.disabled = true;
            }
        } catch (error) {
            console.log(`Get super computer settings from contract error, ${error.message}`);
        }

    }, 1000);
}

saveSuperCompuerButton.addEventListener('click', async() => {

    await saveSuperComputer(approveSuperComputerSwitch.checked, cpuValueRangeInput.value, (saveBtn, processingBtn) => {
        savedSuccessNotify();
        saveBtn.classList.remove("d-none");
        processingBtn.classList.add("d-none");
    });

    /*
    const SuperComputer = {
        approveSuperComputer: approveSuperComputerSwitch.checked,
        cpuValue: parseFloat(cpuValueRangeInput.value)
    };

    localStorage.removeItem("super");
    localStorage.setItem("super", JSON.stringify(SuperComputer));

    localStorage.notificationCount ? localStorage["notificationCount"] = parseInt(localStorage["notificationCount"]) + 1 : localStorage.setItem("notificationCount", 1);
    alertCountSpan.innerHTML = localStorage["notificationCount"];

    if (!alertCountSpan.classList.contains("alert-count")) {
        alertCountSpan.classList.add("alert-count");
    }
    */

    //savedSuccessNotify();
    //checkNotifications();
});