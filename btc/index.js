var bitcoin = require('bitcoin');
// var client = new bitcoin.Client('http://39.106.140.165', 30000, 'bihu', 'bihuo123456');
var client = new bitcoin.Client({
  host: '39.107.112.5',
  port: 30000,
  user: 'bihu',
  pass: 'bihuo123456'
});
client.getBalance('*', 6, function(err, balance) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
