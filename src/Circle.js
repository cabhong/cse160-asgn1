class Circle {
    constructor(pos, color, size, segments) {
      this.pos = pos
      this.color = color;
      this.size = size;
      this.segments = segments;
    }

    render(){
        var pos = this.pos
        var color = this.color
        var currSize = this.size

        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3])

        var d = this.size/200.0

        let angleStep=360/this.segments;
        for(var angle = 0; angle < 360; angle = angle+angleStep) {
            let centerPt = [pos[0], pos[1]];
            let angle1 = angle;
            let angle2 = angle + angleStep;
            let vec1 = [ Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d]
            let vec2 = [ Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d]
            let pt1 = [ centerPt[0] + vec1[0], centerPt[1] + vec1[1] ]
            let pt2 = [ centerPt[0] + vec2[0], centerPt[1] + vec2[1] ]

            drawTriangle([pos[0],pos[1],pt1[0],pt1[1],pt2[0],pt2[1]]);
        }
    }
    topHalf() {
        var pos = this.pos
        var color = this.color
        var currSize = this.size

        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3])

        var d = this.size/200.0

        let angleStep=360/this.segments;
        for(var angle = 0; angle < 180; angle = angle+angleStep) {
            let centerPt = [pos[0], pos[1]];
            let angle1 = angle;
            let angle2 = angle + angleStep;
            let vec1 = [ Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d]
            let vec2 = [ Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d]
            let pt1 = [ centerPt[0] + vec1[0], centerPt[1] + vec1[1] ]
            let pt2 = [ centerPt[0] + vec2[0], centerPt[1] + vec2[1] ]

            drawTriangle([pos[0],pos[1],pt1[0],pt1[1],pt2[0],pt2[1]]);
        }
    }

    bottomHalf() {
        var pos = this.pos
        var color = this.color
        var currSize = this.size

        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3])

        var d = this.size/200.0

        let angleStep=360/this.segments;
        for(var angle = 180; angle < 360; angle = angle+angleStep) {
            let centerPt = [pos[0], pos[1]];
            let angle1 = angle;
            let angle2 = angle + angleStep;
            let vec1 = [ Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d]
            let vec2 = [ Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d]
            let pt1 = [ centerPt[0] + vec1[0], centerPt[1] + vec1[1] ]
            let pt2 = [ centerPt[0] + vec2[0], centerPt[1] + vec2[1] ]

            drawTriangle([pos[0],pos[1],pt1[0],pt1[1],pt2[0],pt2[1]]);
        }
    }
}