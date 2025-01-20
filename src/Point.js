class Point {
    constructor(pos, color, size) {
      this.pos = pos
      this.color = color;
      this.size = size;
    }

    render() {
        var pos = this.pos
        var color = this.color
        var currSize = this.size

        gl.disableVertexAttribArray(a_Position);
        //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([pos[0], pos[1]]), gl.DYNAMIC_DRAW)
        gl.vertexAttrib3f(a_Position, pos[0], pos[1], 0.0);
        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3]);
        gl.uniform1f(u_Size, currSize);
        gl.drawArrays(gl.POINTS, 0, 1);
    }
  }