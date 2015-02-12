function raycastPoint(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0], y = point[1];
    var isInside = false;

    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi <= y && yj > y) || (yj < y && yi > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

        if (intersect) {
            isInside = !isInside;
        }
    }

    return isInside;
}

function raycastPolygon(vs1, vs2, inverse) {
    for(var i = 0; i < vs1.length; i++) {
        var isInside = raycastPoint(vs1[i], vs2);
        if(!isInside && !inverse || isInside && inverse) {
            return inverse;
        }
    }

    return !inverse;
};

function inside(points, vs, contains) {
    if(points instanceof Array) {
        if(points.length == 2) {
            return raycastPoint(points, vs)
        } else {
            return raycastPolygon(points, vs, !!contains);
        }
    }

    return false;
};

module.exports = inside;
