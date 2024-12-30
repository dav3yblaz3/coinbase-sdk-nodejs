const axios = require('axios');

async function fetchCoinbaseData() {
    // Replace with your actual Coinbase API endpoint and API key
    const response = await axios.get('https://api.coinbase.com/v2/accounts', {
        headers: {
            'Authorization': `Bearer YOUR_COINBASE_API_KEY`
        }
    });
    return response.data;
}

module.exports = fetchCoinbaseData;
