const fetchCoinbaseData = require('./services/coinbase');
const fetchArkhamData = require('./services/arkham');
const generateReport = require('./utils/report');

async function main() {
    try {
        const coinbaseData = await fetchCoinbaseData();
        const arkhamData = await fetchArkhamData();
        
        const report = generateReport(coinbaseData, arkhamData);
        console.log(report);
    } catch (error) {
        console.error('Error generating report:', error);
    }
}

main();
