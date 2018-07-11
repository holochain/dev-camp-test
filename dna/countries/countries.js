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
}

function getCountry(hash) {
  // add code here
  // use 'get'
}

function linkCountries(inputs) {
  // add code here
  // use commit (for links entry type)
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
}

function validatePut(entryType, entry, header, package, sources) {
  // add code here
  // differentiate between countryLinks type and country type
}

function validateLink(entryType, hash, links, package, sources) {
  // add code here
  // only need to validate for countryLinks type
}