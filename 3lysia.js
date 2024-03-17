const dnsResult = $request.dnsResult;
const hostname = $request.hostname;

const isV6Available = dnsResult.v6Addresses.length > 0;
const isMatchingDomain = hostname.includes('3lysia.com') || hostname.includes('miss-pink-elf-elysia.com');

$done({ matched: !isV6Available && isMatchingDomain });
