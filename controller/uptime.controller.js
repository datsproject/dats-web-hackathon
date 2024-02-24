const axios = require('axios');
const { getAddress } = require('ethers');

const MIDDLEWARE_API_URL = "https://middleware.datsproject.io/api";

const CONFIG = {
    headers: {
        'x-api-key': `630a91dc-820a-4225-abe8-4966482e45a1`
    }
};

const getAllUptimesForWallet = async(req, res) => {
    try {
        const walletAddress = req.query.walletAddress;
        const response = await axios.get(`${MIDDLEWARE_API_URL}/users/uptimes/all/${walletAddress}`, CONFIG);
        return res.status(200).send(response.data);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getAllUptimesForWallet
}