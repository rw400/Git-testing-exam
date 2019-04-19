let test = require('./index.js');

test.sign("sign message exam q", "0x1a27a72f03e1957607d6aaf6f619f68ab8689d7dc4cf8d68746c0115931d0d3f").then(sig => {
    console.log(sig);
}).then(console.log);