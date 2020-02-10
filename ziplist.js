function zipList(l1, l2) {
  const len = l1.length;
  const res = [];
  for (let i = 0; i < len; ++i) {
    res.push(l1[i]);
    res.push(l2[i]);
  }
  return res;
}
console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
