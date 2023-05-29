// Syntax - dns.resolve(hostname, rrtype, callback)

// The list of records (‘A’, ‘AAAA’, ‘ANY’, ‘CNAME’, ‘MX’, ‘TXT’, ‘NS’, ‘NAPTR’, ‘PTR’, ‘SOA’, ‘SRV’) are described below:
// A: IPv4 address
// AAAA: IPv6 address
// ANY: Any records
// CNAME: canonical name records
// MX: mail exchange records
// NAPTR: name authority pointer records
// NS: name server records
// PTR: pointer records
// SOA: start of authority records
// SRV: service records
// TXT: text records

const dns = require('dns')

let rrtype = 'A'

dns.resolve('unipune.ac.in', rrtype, (error, records)=>{
    console.log('records: %j', records)
})
