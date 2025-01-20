// HelloPoint1.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE = 
  `attribute vec4 a_Position;
  uniform float u_Size;
    void main() {
    gl_Position = vec4(a_Position);
    gl_PointSize = u_Size;
  }`;

// Fragment shader program
var FSHADER_SOURCE =
  `precision mediump float; 
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  }`;

let canvas;
let gl;
let a_Position; 
let u_Size;
let size = 10;
let segments = 10;
let u_FragColor;
let rgba = {
  'red' : 1,
  'green' : 1,
  'blue' : 1,
  'alpha' : 1
}
let shape = 0;
let shapesList = []



function setupWebGL() {
  // Retrieve <canvas> element
  canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  // gl = getWebGLContext(canvas);
  gl = canvas.getContext("webgl", { preserveDrawingBuffer: true})
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
}

function connectVariablesToGLSL() {
  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if(a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  u_Size = gl.getUniformLocation(gl.program, 'u_Size');
  if(u_Size < 0) {
    console.log('Failed to get the storage location of u_Size');
    return;
  }

  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if(u_FragColor < 0) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }
}

function main() {
  //Set up canvas and gl variables
  setupWebGL();

  //Set up GLSL shader programs and connect GLSL Variables
  connectVariablesToGLSL();

  canvas.onmousedown=click;
  // canvas.onmousemove=click;
  canvas.onmousemove = function(ev) {
    if(ev.buttons == 1) {
      click(ev);
      // console.log(ev)
    }
  }

  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

}



function renderAllShapes() {
  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);
  
  for(var i = 0; i < shapesList.length; i++) {
    shapesList[i].render()
  }
}

function convertCoordinatesEventToGL(ev) {
  var x = ev.clientX
  var y = ev.clientY
  var rect = ev.target.getBoundingClientRect();

  x = ((x-rect.left) - canvas.height/2)/(canvas.height/2); 
  y = (canvas.width/2 - (y-rect.top))/(canvas.width/2);

  return([x,y])
}

function click(ev) {
  
    //Add Shapes to shape list
    if(shape == 0) {
      shapesList.push(new Point(convertCoordinatesEventToGL(ev), Object.values(rgba), size))
    }
    else if (shape == 1){
      shapesList.push(new Triangle(convertCoordinatesEventToGL(ev), Object.values(rgba), size))
    }
    else {
      shapesList.push(new Circle(convertCoordinatesEventToGL(ev), Object.values(rgba), size, segments))
    }
    

    //Draw all shapes currently stored
    renderAllShapes();
}


let sizeDisplay = document.getElementById('size');
function handleSizeChange(ev) {
  size = ev.target.value
  sizeDisplay.innerHTML = "Size: " + size
}

function handleColorChange(ev) {
  rgba = {
    ...rgba,
    [ev.target.id] : ev.target.value
  }
}

function handleSegmentsChange(ev) {
  segments = ev.target.value
}

function clearCanvas() {
  shapesList = []
  renderAllShapes();
}