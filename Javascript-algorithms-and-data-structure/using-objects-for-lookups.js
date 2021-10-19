// Setup
function phoneticLookup(value) {
  let result = ""
  let lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  };
  result = lookup[value]
  return result;
}

console.log(phoneticLookup())
