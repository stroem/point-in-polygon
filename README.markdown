point-in-polygon
================

Determine if a point or a polygon is inside of a polygon.

This module casts a ray from the inquiry point and counts intersections,
based on
[this algorithm](http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html).

example
=======

``` js
var inside = require('point-in-polygon');
var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];

console.dir([
    inside([ 1.5, 1.5 ], polygon),
    inside([ 4.9, 1.2 ], polygon),
    inside([ 1.8, 1.1 ], polygon)
]);

console.dir([
    inside([[ 1.5, 1.5 ], [ 1.1, 1.4 ], [ 1.2, 1.2 ]], polygon, false), // All points inside polygon, returns true
    inside([[ 4.9, 1.2 ], [ 1.1, 1.4 ], [ 5, 9 ]], polygon, true), // One point inside polygon, returns true
    inside([[ 4.9, 1.2 ], [ 1.1, 1.4 ], [ 5, 9 ]], polygon, false) // All points needs to be inside polygon, returns false
]);
```

output:

```
[ true, false, true ]

[ true, true, false ]
```

methods
=======

var inside = require('point-in-polygon')

inside(point, polygon)
----------------------

Return whether `point` is contained in `polygon`.

`point` should be a 2-item array of coordinates.

`polygon` should be an array of 2-item arrays of coordinates.

inside(polygon1, polygon2, contains)
----------------------

Return whether all points inside `polygon1` is contained in `polygon2`,
or if `contains` is set to `true`, returns if any of the points inside `polygon1`
is contained in `polygon2`.

`polygon1` should be a array of 2-item array of coordinates.

`polygon2` should be an array of 2-item arrays of coordinates.

`contains` should be a boolean.

install
=======

    npm install point-in-polygon
