class Triangle {
    constructor(pos, color, size) {
      this.pos = pos
      this.color = color;
      this.size = size;
    }

    render() {
        var pos = this.pos
        var color = this.color
        var currSize = this.size
        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3]);
        gl.uniform1f(u_Size, currSize);
        var d = this.size/200.0
        drawTriangle( [pos[0], pos[1], pos[0], pos[1] + d, pos[0] + d, pos[1] ])
    }
  }

function drawTriangle(vertices) {
//   var vertices = new Float32Array([
//     0, 0.5,   -0.5, -0.5,   0.5, -0.5
//   ]);
  var n = 3; // The number of vertices

  // Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

//   var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
//   if (a_Position < 0) {
//     console.log('Failed to get the storage location of a_Position');
//     return -1;
//   }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  gl.drawArrays(gl.TRIANGLES, 0 , n)
}
