# circle-enclose

Smallest circle problem. This code was extracted from [d3-hierarchy](https://github.com/d3/d3-hierarchy)
([licensed](https://github.com/d3/d3-hierarchy/blob/master/LICENSE) under BSD-3 by Mike Bostock).

# usage

From npm:

``` js
var enclose = require('circle-enclose');

var circle = enclose([
  {x: -5, y: 0, r: 5},
  {x: 0, y: 0, r: 2},
  {x: 5, y: 0, r: 5}
])

assert(circle.r === 10);
assert(circle.x === 0);
assert(circle.y === 0);
```


# license

BSD-3-Clause
