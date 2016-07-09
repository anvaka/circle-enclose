var test = require('tap').test;

var enclose = require('../');

test('it finds a circle', function(t) {
  var circle = enclose([
    {x: -5, y: 0, r: 5},
    {x: 0, y: 0, r: 2},
    {x: 5, y: 0, r: 5}
  ]);

  t.ok(circle.r === 10, 'radius is ok');
  t.ok(circle.x === 0, 'x is ok');
  t.ok(circle.y === 0, 'y is ok');
  t.end();
});

test('random sets', function(t) {
  var attempts = 5;
  var circleCount = 20;
  var lastEnclosed;

  while(attempts--) {
    var circles = [];
    for (var i = 0; i < circleCount; ++i) {
      circles.push({
        x: (Math.random() - 0.5) * 50,
        y: (Math.random() - 0.5) * 50,
        r: 1 + Math.random() * 25,
      });
    }
    lastEnclosed = enclose(circles);
    circles.forEach(assertInside);
  }

  t.end();

  function assertInside(circle) {
    var testObjects = JSON.stringify({
      circle: circle,
      enclosedIn: lastEnclosed
    });
    var dx = circle.x - lastEnclosed.x;
    var dy = circle.y - lastEnclosed.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > circle.r + lastEnclosed.r) {
      t.fail('circles do not overlap at all: ' + testObjects);
    } else if (distance <= Math.abs(circle.r - lastEnclosed.r) + 1e-6) {
      t.ok(true, 'Enclose is fine for ' + testObjects);
    } else {
      t.fail('Only partial overlap for ' + testObjects);
    }
  }
})
