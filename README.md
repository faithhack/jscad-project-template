# jscad-project-template
A very simple layout I use with OpenJSCAD V2 when creating 3D printing designs.
This currently depends on https://github.com/jscad/OpenJSCAD.org.git V2 branch.
The fonts directory is from https://github.com/lautr3k/jscad-vector-fonts with additional single-line fonts referenced 
at http://imajeenyus.com/computer/20150110_single_line_fonts/index.shtml

To make use of this template with the OpenJSCAD web app:
* install and run OpenJSCAD from localhost
* clone this project
* edit the project.json as needed, the 'name' attribute will be used by OpenJSCAD to as the default name for rendered parts

You can change which part is rendered by changing file name in the first 'require' in index.js:
`var inc = require('./my_other_part.js')`
