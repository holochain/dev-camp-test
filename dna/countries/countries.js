/*
  Within this file, you can natively call any of the functions defined on the API specification page
  https://developer.holochain.org/API
  Look for examples in JavaScript
*/

// every zome must implement a genesis function that returns true if it is successful
function genesis() {
  return true;
}

function addCountry(country) {
  // add code here
  // use 'commit'
  // make changes to 'validateCommit'
}

function getCountry(hash) {
  // add code here
  // use 'get'
  // make changes to 'validatePut' since 'get' retrieves entries
  // by default from the DHT, and entries can pass 'validateCommit'
  // make it into the source chain, but not the DHT. They must pass
  // 'validatePut' to be written to the DHT.
}

function linkCountries(inputs) {
  // add code here
  // use commit (for links entry type)
  // make change to 'validateCommit', 'validatePut' AND 'validateLink'
}

function getLinkedCountries(inputs) {
  // add code here
  // use getLinks
}

/*
 *
   validation hooks that Holochain will call
 *
 */

function validateCommit(entryType, entry, header, package, sources) {
  // add code here
  // differentiate between countryLinks type and country type
  return true
}

function validatePut(entryType, entry, header, package, sources) {
  // add code here
  // differentiate between countryLinks type and country type
}

function validateLink(entryType, hash, links, package, sources) {
  // add code here
  // only need to validate for countryLinks type
}