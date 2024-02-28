var dnsResult = $request.dnsResult;
var v6 = true;
if(dnsResult.v6Addresses.length === 0) {
    v6 = false;
}
var hostname = $request.hostname;
var domainSuffixContains = hostname.indexOf('3lysia.com') >= 0 || hostname.indexOf('miss-pink-elf-elysia.com') >= 0;
$done({matched: v6 && domainSuffixContains});