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
  return commit("country", country);
}

function getCountry(hash) {
  return get(hash);
}

function linkCountries(inputs) {
  return commit("countryLinks", {
    Links: [
      {
        Base: inputs.from,
        Link: inputs.to,
        Tag: inputs.tag
      }
    ]
  });
}

function getLinkedCountries(inputs) {
  return getLinks(inputs.from, "", { Load: true })
}

/*
 *
   validation hooks that Holochain will call
 *
 */

function validateCommit(entryType, entry, header, package, sources) {
  if (entryType === "countryLinks") {
    return true;
  }

  if (entry.length < 20) {
    return true;
  } else {
    return false;
  }
}

function validatePut(entryType, entry, header, package, sources) {
  if (entryType === "countryLinks") {
    return true;
  }

  if (entry.length < 20) {
    return true;
  } else {
    return false;
  }
}

function validateLink(entryType, hash, links, package, sources) {
  if (entryType === "countryLinks") {
    return true;
  }
}