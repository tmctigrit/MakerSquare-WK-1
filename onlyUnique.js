function onlyUnique (str) {
  var counts = {}
  str.split('').forEach(function (c) {
    counts[c] || (counts[c] = 0)
    counts[c] += 1
  })
  var ans = ""
  for (c in counts){
    if (counts[c] === 1){
      ans += c;
    }
  }

  return ans
}