console.log('Starting to solve ip');

var v6 = $request.sourceIP;
console.log(v6);

var dnsResult = $request.dnsResult;
console.log(dnsResult);

$done({matched: true});
