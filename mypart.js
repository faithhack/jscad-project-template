/* All the csg API functions: */
/* All the csg API functions: */
const modeling = require('@jscad/modeling')
const { color, colorManeToRgb, cssColors, hexToRgb, hslToRgb, hsvToRgb, hueRoColorComponant, rgbToHex, rgbToHsl, rgbToHsv } = modeling.color
const { create, fromPointAxisNormal, transformationBetween } = modeling.connectors
const { geom2, geom3, path2, poly2, poly3 } = modeling.geometry
const { constants, line2, line3, mat4, plane, utils, vec2, vec3, vec4 } = modeling.math
const { arc, circle, cube, cuboid, cylinder, cylinderElliptic, ellipse, ellipsoid, geodesicSphere, line, polygon, polyhedron, rectangle, roundedCuboid, roundedCylinder, roundedRectangle, sphere, square, star, torus } = require('@jscad/modeling').primitives
const { vectorChar, vectorText } = modeling.text
const {areAllShapesTheSameType, flatten, fnNumberSort, insertSorted, interpolateBetween2DPointsForY } = modeling.utils

const { intersect, subtract, union } = modeling.booleans
const { expand, offset } = modeling.expansions
const {extrudeFromSlices, extrudeLinear, extrudeRectangular, extrudeRotate, slice} = modeling.extrusions
const { hull, hullChain } = modeling.hulls
const { measureArea, measureBounds, measureVolume} = modeling.measurements
const { center, centerX, centerY, centerZ, mirror, mirrorX, mirrorY, mirrorZ, 
    rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, 
    translate, translateX, translateY, translateZ} = modeling.transforms

const { extrudeText } = require('./fonts/index.js')

const paramDefaults = {size: 10}

const getParameterDefinitions = () => {
  return [{ name: 'size', type: 'int', initial: 10, caption: 'Cube Size?' }]
}

const main = (params) => {
	params = Object.assign({}, paramDefaults, params)

	let results = []
        // replace this
        myPart = cube(params.size)
	results.push(myPart)

	//

	return results 
}

module.exports = { main, getParameterDefinitions, paramDefaults }
