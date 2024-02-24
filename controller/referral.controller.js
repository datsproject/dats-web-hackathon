const axios = require('axios');
const { getAddress } = require('ethers');

const REFERRAL_API_URL = "https://referral.datsproject.io/api";

const CONFIG = {
    headers: {
        'x-api-key': `b80f92b0-1b36-4572-b88f-81396b0abd68`
    }
};

const getCountOfReferralByCode = async(req, res) => {
    try {
        const code = req.query.code;
        const response = await axios.get(`${REFERRAL_API_URL}/count?code=${code}`, CONFIG);
        return res.status(200).send({ count: response.data });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
}

const useReferralCode = async(req, res) => {
    try {

        const { walletAddress, code } = req.body;

        const data = {
            user: walletAddress,
            code: code
        };

        const response = await axios.post(`${REFERRAL_API_URL}/code`, data, CONFIG);
        return res.status(200).send(response.data);

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const getReferralDetailByUsingWalletAddress = async(req, res) => {
    try {
        const walletAddress = req.query.walletAddress;
        const response = await axios.get(`${REFERRAL_API_URL}/referral/detail?walletAddress=${walletAddress}`, CONFIG);
        return res.status(200).send(response.data);

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const getAddressFromEthers = async(req, res) => {
    try {
        const data = getAddress(req.query.account)

        const obj = {
            account: data,
        }

        return res.status(200).send(obj);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getCountOfReferralByCode,
    useReferralCode,
    getReferralDetailByUsingWalletAddress,
    getAddressFromEthers
}