const supportedChains = [56, 204, 7001];

let contractAbi;

let bscContractAbi = `
[{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_consumer", "type": "address" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "approveAttackPrevention", "type": "bool" }], "indexed": false, "internalType": "struct DatsContract.Blockchain", "name": "_data", "type": "tuple" }], "name": "BlockchainSaved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_consumer", "type": "address" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webSecurity", "type": "bool" }, { "internalType": "bool", "name": "serverSecurity", "type": "bool" }, { "internalType": "bool", "name": "ransomwareResearch", "type": "bool" }, { "internalType": "bool", "name": "malwareResearch", "type": "bool" }], "indexed": false, "internalType": "struct DatsContract.CyberSecurity", "name": "_data", "type": "tuple" }], "name": "CyberSecuritySaved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_consumer", "type": "address" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "trafficScale", "type": "uint8" }], "indexed": false, "internalType": "struct DatsContract.DDos", "name": "_data", "type": "tuple" }], "name": "DDosSaved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_consumer", "type": "address" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "cpuValue", "type": "uint8" }], "indexed": false, "internalType": "struct DatsContract.SuperComputer", "name": "_data", "type": "tuple" }], "name": "SuperComputerSaved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_consumer", "type": "address" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webPenetration", "type": "bool" }, { "internalType": "bool", "name": "serverPenetration", "type": "bool" }, { "internalType": "bool", "name": "scadaPenetration", "type": "bool" }, { "internalType": "bool", "name": "blockchainPenetration", "type": "bool" }, { "internalType": "bool", "name": "contractPenetration", "type": "bool" }], "indexed": false, "internalType": "struct DatsContract.Vulnerability", "name": "_data", "type": "tuple" }], "name": "VulnerabilitySaved", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "blockchainLength", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "blockchains", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "approveAttackPrevention", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "cyberLength", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "cybers", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webSecurity", "type": "bool" }, { "internalType": "bool", "name": "serverSecurity", "type": "bool" }, { "internalType": "bool", "name": "ransomwareResearch", "type": "bool" }, { "internalType": "bool", "name": "malwareResearch", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ddosLength", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "ddoses", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "trafficScale", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAllUserBlockchainSettings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "approveAttackPrevention", "type": "bool" }], "internalType": "struct DatsContract.Blockchain[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAllUserCyberSecuritySettings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webSecurity", "type": "bool" }, { "internalType": "bool", "name": "serverSecurity", "type": "bool" }, { "internalType": "bool", "name": "ransomwareResearch", "type": "bool" }, { "internalType": "bool", "name": "malwareResearch", "type": "bool" }], "internalType": "struct DatsContract.CyberSecurity[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAllUserDDosSettings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "trafficScale", "type": "uint8" }], "internalType": "struct DatsContract.DDos[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAllUserSuperComputerSettings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "cpuValue", "type": "uint8" }], "internalType": "struct DatsContract.SuperComputer[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAllUserVulnerabilitySettings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webPenetration", "type": "bool" }, { "internalType": "bool", "name": "serverPenetration", "type": "bool" }, { "internalType": "bool", "name": "scadaPenetration", "type": "bool" }, { "internalType": "bool", "name": "blockchainPenetration", "type": "bool" }, { "internalType": "bool", "name": "contractPenetration", "type": "bool" }], "internalType": "struct DatsContract.Vulnerability[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBlockchain", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "approveAttackPrevention", "type": "bool" }], "internalType": "struct DatsContract.Blockchain", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBlockchainCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCyberSecurity", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webSecurity", "type": "bool" }, { "internalType": "bool", "name": "serverSecurity", "type": "bool" }, { "internalType": "bool", "name": "ransomwareResearch", "type": "bool" }, { "internalType": "bool", "name": "malwareResearch", "type": "bool" }], "internalType": "struct DatsContract.CyberSecurity", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCyberSecurityCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getDDos", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "trafficScale", "type": "uint8" }], "internalType": "struct DatsContract.DDos", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "getDDosByUser", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "trafficScale", "type": "uint8" }], "internalType": "struct DatsContract.DDos", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getDDosCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSuperComputer", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "cpuValue", "type": "uint8" }], "internalType": "struct DatsContract.SuperComputer", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "getSuperComputerByUser", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "cpuValue", "type": "uint8" }], "internalType": "struct DatsContract.SuperComputer", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSuperComputerCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVulnerability", "outputs": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webPenetration", "type": "bool" }, { "internalType": "bool", "name": "serverPenetration", "type": "bool" }, { "internalType": "bool", "name": "scadaPenetration", "type": "bool" }, { "internalType": "bool", "name": "blockchainPenetration", "type": "bool" }, { "internalType": "bool", "name": "contractPenetration", "type": "bool" }], "internalType": "struct DatsContract.Vulnerability", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVulnerabilityCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_approveAttackPrevention", "type": "bool" }], "name": "saveBlockchain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_isApprove", "type": "bool" }, { "internalType": "bool", "name": "_webSecurity", "type": "bool" }, { "internalType": "bool", "name": "_serverSecurity", "type": "bool" }, { "internalType": "bool", "name": "_ransomwareResearch", "type": "bool" }, { "internalType": "bool", "name": "_malwareResearch", "type": "bool" }], "name": "saveCyberSecurity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_isApprove", "type": "bool" }, { "internalType": "uint8", "name": "_trafficScale", "type": "uint8" }], "name": "saveDDos", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_isApprove", "type": "bool" }, { "internalType": "uint8", "name": "_cpuValue", "type": "uint8" }], "name": "saveSuperComputer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_isApprove", "type": "bool" }, { "internalType": "bool", "name": "_webPenetration", "type": "bool" }, { "internalType": "bool", "name": "_serverPenetration", "type": "bool" }, { "internalType": "bool", "name": "_scadaPenetration", "type": "bool" }, { "internalType": "bool", "name": "_blockchainPenetration", "type": "bool" }, { "internalType": "bool", "name": "_contractPenetration", "type": "bool" }], "name": "saveVulnerability", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "superLength", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "supers", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "uint8", "name": "cpuValue", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "vulnerabilities", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "bool", "name": "isApprove", "type": "bool" }, { "internalType": "bool", "name": "webPenetration", "type": "bool" }, { "internalType": "bool", "name": "serverPenetration", "type": "bool" }, { "internalType": "bool", "name": "scadaPenetration", "type": "bool" }, { "internalType": "bool", "name": "blockchainPenetration", "type": "bool" }, { "internalType": "bool", "name": "contractPenetration", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vulnerabilityLength", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]`;

let bscNftAbi = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "mintedId",
            "type": "uint256"
        }],
        "name": "ArtworkMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mintArtwork",
        "outputs": [{
            "internalType": "uint256",
            "name": "mintedId",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bool",
            "name": "_mintable",
            "type": "bool"
        }],
        "name": "setMintable",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_owner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "getApproved",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "hasMinted",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_ARTWORKS",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "mintedToken",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "ownerOf",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "tokenURI",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "tokenURIS",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];

let shardeumContractAbi = `[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approveAttackPrevention",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct DATSContract.Blockchain",
          "name": "_data",
          "type": "tuple"
        }
      ],
      "name": "BlockchainSaved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "webSecurity",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "serverSecurity",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "ransomwareResearch",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "malwareResearch",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct DATSContract.CyberSecurity",
          "name": "_data",
          "type": "tuple"
        }
      ],
      "name": "CyberSecuritySaved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "trafficScale",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct DATSContract.DDos",
          "name": "_data",
          "type": "tuple"
        }
      ],
      "name": "DDosSaved",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_approveAttackPrevention",
          "type": "bool"
        }
      ],
      "name": "saveBlockchain",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_webSecurity",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_serverSecurity",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_ransomwareResearch",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_malwareResearch",
          "type": "bool"
        }
      ],
      "name": "saveCyberSecurity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "_trafficScale",
          "type": "uint8"
        }
      ],
      "name": "saveDDos",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "_cpuValue",
          "type": "uint8"
        }
      ],
      "name": "saveSuperComputer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_webPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_serverPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_scadaPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_blockchainPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_contractPenetration",
          "type": "bool"
        }
      ],
      "name": "saveVulnerability",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "cpuValue",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct DATSContract.SuperComputer",
          "name": "_data",
          "type": "tuple"
        }
      ],
      "name": "SuperComputerSaved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "webPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "serverPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "scadaPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "blockchainPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "contractPenetration",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct DATSContract.Vulnerability",
          "name": "_data",
          "type": "tuple"
        }
      ],
      "name": "VulnerabilitySaved",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "blockchainLength",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "blockchains",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approveAttackPrevention",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cyberLength",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "cybers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "webSecurity",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "serverSecurity",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "ransomwareResearch",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "malwareResearch",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ddoses",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "trafficScale",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ddosLength",
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
      "name": "getAllUserBlockchainSettings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approveAttackPrevention",
              "type": "bool"
            }
          ],
          "internalType": "struct DATSContract.Blockchain[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllUserCyberSecuritySettings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "webSecurity",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "serverSecurity",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "ransomwareResearch",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "malwareResearch",
              "type": "bool"
            }
          ],
          "internalType": "struct DATSContract.CyberSecurity[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllUserDDosSettings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "trafficScale",
              "type": "uint8"
            }
          ],
          "internalType": "struct DATSContract.DDos[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllUserSuperComputerSettings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "cpuValue",
              "type": "uint8"
            }
          ],
          "internalType": "struct DATSContract.SuperComputer[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllUserVulnerabilitySettings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "webPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "serverPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "scadaPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "blockchainPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "contractPenetration",
              "type": "bool"
            }
          ],
          "internalType": "struct DATSContract.Vulnerability[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBlockchain",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approveAttackPrevention",
              "type": "bool"
            }
          ],
          "internalType": "struct DATSContract.Blockchain",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBlockchainCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCyberSecurity",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "webSecurity",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "serverSecurity",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "ransomwareResearch",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "malwareResearch",
              "type": "bool"
            }
          ],
          "internalType": "struct DATSContract.CyberSecurity",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCyberSecurityCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDDos",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "trafficScale",
              "type": "uint8"
            }
          ],
          "internalType": "struct DATSContract.DDos",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getDDosByUser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "trafficScale",
              "type": "uint8"
            }
          ],
          "internalType": "struct DATSContract.DDos",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDDosCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSuperComputer",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "cpuValue",
              "type": "uint8"
            }
          ],
          "internalType": "struct DATSContract.SuperComputer",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getSuperComputerByUser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "cpuValue",
              "type": "uint8"
            }
          ],
          "internalType": "struct DATSContract.SuperComputer",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSuperComputerCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVulnerability",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "webPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "serverPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "scadaPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "blockchainPenetration",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "contractPenetration",
              "type": "bool"
            }
          ],
          "internalType": "struct DATSContract.Vulnerability",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVulnerabilityCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "superLength",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "supers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "cpuValue",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "vulnerabilities",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "webPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "serverPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "scadaPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "blockchainPenetration",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "contractPenetration",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "vulnerabilityLength",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  `;

let zetaContractAbi = `
[{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
      },
      {
          "components": [{
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
              },
              {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              },
              {
                  "internalType": "bool",
                  "name": "approveAttackPrevention",
                  "type": "bool"
              }
          ],
          "indexed": false,
          "internalType": "struct DATSPORContract.Blockchain",
          "name": "_data",
          "type": "tuple"
      }
  ],
  "name": "BlockchainSaved",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
      },
      {
          "components": [{
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
              },
              {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              },
              {
                  "internalType": "bool",
                  "name": "isApprove",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "webSecurity",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "serverSecurity",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "ransomwareResearch",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "malwareResearch",
                  "type": "bool"
              }
          ],
          "indexed": false,
          "internalType": "struct DATSPORContract.CyberSecurity",
          "name": "_data",
          "type": "tuple"
      }
  ],
  "name": "CyberSecuritySaved",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
      },
      {
          "components": [{
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
              },
              {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              },
              {
                  "internalType": "bool",
                  "name": "isApprove",
                  "type": "bool"
              },
              {
                  "internalType": "uint8",
                  "name": "trafficScale",
                  "type": "uint8"
              }
          ],
          "indexed": false,
          "internalType": "struct DATSPORContract.DDos",
          "name": "_data",
          "type": "tuple"
      }
  ],
  "name": "DDosSaved",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
      },
      {
          "components": [{
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
              },
              {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              },
              {
                  "internalType": "bool",
                  "name": "isApprove",
                  "type": "bool"
              },
              {
                  "internalType": "uint8",
                  "name": "cpuValue",
                  "type": "uint8"
              }
          ],
          "indexed": false,
          "internalType": "struct DATSPORContract.SuperComputer",
          "name": "_data",
          "type": "tuple"
      }
  ],
  "name": "SuperComputerSaved",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "_consumer",
          "type": "address"
      },
      {
          "components": [{
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
              },
              {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              },
              {
                  "internalType": "bool",
                  "name": "isApprove",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "webPenetration",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "serverPenetration",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "scadaPenetration",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "blockchainPenetration",
                  "type": "bool"
              },
              {
                  "internalType": "bool",
                  "name": "contractPenetration",
                  "type": "bool"
              }
          ],
          "indexed": false,
          "internalType": "struct DATSPORContract.Vulnerability",
          "name": "_data",
          "type": "tuple"
      }
  ],
  "name": "VulnerabilitySaved",
  "type": "event"
},
{
  "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "blockchainLength",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "name": "blockchains",
  "outputs": [{
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "user",
          "type": "address"
      },
      {
          "internalType": "bool",
          "name": "approveAttackPrevention",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "cyberLength",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "name": "cybers",
  "outputs": [{
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "user",
          "type": "address"
      },
      {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "webSecurity",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "serverSecurity",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "ransomwareResearch",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "malwareResearch",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "ddosLength",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "name": "ddoses",
  "outputs": [{
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "user",
          "type": "address"
      },
      {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
      },
      {
          "internalType": "uint8",
          "name": "trafficScale",
          "type": "uint8"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getAllUserBlockchainSettings",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "approveAttackPrevention",
              "type": "bool"
          }
      ],
      "internalType": "struct DATSPORContract.Blockchain[]",
      "name": "",
      "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getAllUserCyberSecuritySettings",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "webSecurity",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "serverSecurity",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "ransomwareResearch",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "malwareResearch",
              "type": "bool"
          }
      ],
      "internalType": "struct DATSPORContract.CyberSecurity[]",
      "name": "",
      "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getAllUserDDosSettings",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "trafficScale",
              "type": "uint8"
          }
      ],
      "internalType": "struct DATSPORContract.DDos[]",
      "name": "",
      "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getAllUserSuperComputerSettings",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "cpuValue",
              "type": "uint8"
          }
      ],
      "internalType": "struct DATSPORContract.SuperComputer[]",
      "name": "",
      "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getAllUserVulnerabilitySettings",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "webPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "serverPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "scadaPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "blockchainPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "contractPenetration",
              "type": "bool"
          }
      ],
      "internalType": "struct DATSPORContract.Vulnerability[]",
      "name": "",
      "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getBlockchain",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "approveAttackPrevention",
              "type": "bool"
          }
      ],
      "internalType": "struct DATSPORContract.Blockchain",
      "name": "",
      "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getBlockchainCount",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getCyberSecurity",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "webSecurity",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "serverSecurity",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "ransomwareResearch",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "malwareResearch",
              "type": "bool"
          }
      ],
      "internalType": "struct DATSPORContract.CyberSecurity",
      "name": "",
      "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getCyberSecurityCount",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getDDos",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "trafficScale",
              "type": "uint8"
          }
      ],
      "internalType": "struct DATSPORContract.DDos",
      "name": "",
      "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "address",
      "name": "_user",
      "type": "address"
  }],
  "name": "getDDosByUser",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "trafficScale",
              "type": "uint8"
          }
      ],
      "internalType": "struct DATSPORContract.DDos",
      "name": "",
      "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getDDosCount",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getSuperComputer",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "cpuValue",
              "type": "uint8"
          }
      ],
      "internalType": "struct DATSPORContract.SuperComputer",
      "name": "",
      "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "address",
      "name": "_user",
      "type": "address"
  }],
  "name": "getSuperComputerByUser",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "cpuValue",
              "type": "uint8"
          }
      ],
      "internalType": "struct DATSPORContract.SuperComputer",
      "name": "",
      "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getSuperComputerCount",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getVulnerability",
  "outputs": [{
      "components": [{
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isApprove",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "webPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "serverPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "scadaPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "blockchainPenetration",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "contractPenetration",
              "type": "bool"
          }
      ],
      "internalType": "struct DATSPORContract.Vulnerability",
      "name": "",
      "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getVulnerabilityCount",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "owner",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "bool",
      "name": "_approveAttackPrevention",
      "type": "bool"
  }],
  "name": "saveBlockchain",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [{
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_webSecurity",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_serverSecurity",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_ransomwareResearch",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_malwareResearch",
          "type": "bool"
      }
  ],
  "name": "saveCyberSecurity",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [{
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
      },
      {
          "internalType": "uint8",
          "name": "_trafficScale",
          "type": "uint8"
      }
  ],
  "name": "saveDDos",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [{
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
      },
      {
          "internalType": "uint8",
          "name": "_cpuValue",
          "type": "uint8"
      }
  ],
  "name": "saveSuperComputer",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [{
          "internalType": "bool",
          "name": "_isApprove",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_webPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_serverPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_scadaPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_blockchainPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "_contractPenetration",
          "type": "bool"
      }
  ],
  "name": "saveVulnerability",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "superLength",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "name": "supers",
  "outputs": [{
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "user",
          "type": "address"
      },
      {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
      },
      {
          "internalType": "uint8",
          "name": "cpuValue",
          "type": "uint8"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "name": "vulnerabilities",
  "outputs": [{
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "user",
          "type": "address"
      },
      {
          "internalType": "bool",
          "name": "isApprove",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "webPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "serverPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "scadaPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "blockchainPenetration",
          "type": "bool"
      },
      {
          "internalType": "bool",
          "name": "contractPenetration",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "vulnerabilityLength",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}
]
`;