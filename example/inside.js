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
