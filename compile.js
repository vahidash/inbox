const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.join(__dirname, 'contracts', 'inbox.sol');
const inboxSource = fs.readFileSync(inboxPath, 'utf8');

solc.compile(inboxSource, 1, (err, output) => {
    if (err) {
        console.error(err);
        return;
    }

    const contract = output.contracts[':Inbox'];
    const abi = JSON.parse(contract.interface);
    const bytecode = contract.bytecode;

    console.log('ABI:', abi);
    console.log('Bytecode:', bytecode);
});
