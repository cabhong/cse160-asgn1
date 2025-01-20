function drawMiku() {

    //Arms
    gl.uniform4f(u_FragColor, 0.94, 0.79, 0.64, 1);
    drawTriangle( [-0.25, 0.2, -0.3, 0.25, -0.6, -0.1 ])
    drawTriangle( [-0.25, 0.2, -0.45, -0.1, -0.6, -0.1 ])

    drawTriangle( [0.25, 0.2, 0.3, 0.25, 0.6, -0.1 ])
    drawTriangle( [0.25, 0.2, 0.45, -0.1, 0.6, -0.1 ])


    //Body
    gl.uniform4f(u_FragColor, normalizeColor(55), normalizeColor(59), normalizeColor(62), 1);
    drawTriangle( [-0.53, -0.6, -0.3, 0.3, 0.53, -0.6 ])
    drawTriangle( [-0.3, 0.3, 0.3, 0.3, 0.53, -0.6 ])

    gl.uniform4f(u_FragColor, normalizeColor(134), normalizeColor(206), normalizeColor(203), 1);
    drawTriangle( [-0.55, -0.7, -0.3, 0.3, 0.55, -0.7 ])
    drawTriangle( [-0.3, 0.3, 0.3, 0.3, 0.55, -0.7 ])

    gl.uniform4f(u_FragColor, normalizeColor(55), normalizeColor(59), normalizeColor(62), 1);
    drawTriangle( [-0.53, -0.6, -0.3, 0.3, 0.53, -0.6 ])
    drawTriangle( [-0.3, 0.3, 0.3, 0.3, 0.53, -0.6 ])

    gl.uniform4f(u_FragColor, normalizeColor(190), normalizeColor(200), normalizeColor(209), 1);
    drawTriangle( [-0.5, -0.5, -0.3, 0.3, 0.5, -0.5 ])
    drawTriangle( [-0.3, 0.3, 0.3, 0.3, 0.5, -0.5 ])

    gl.uniform4f(u_FragColor, normalizeColor(134), normalizeColor(206), normalizeColor(203), 1);
    drawTriangle( [-0.1, 0, 0, 0.3, 0.1, 0 ])
    drawTriangle( [-0.1, 0, 0, -0.5, 0.1, 0 ])

    let head = new Circle([0, 0.5],[0.94, 0.79, 0.64, 1], 80, 16)
    head.render()

    

    let hairMain = new Circle([0, 0.5],[normalizeColor(134), normalizeColor(206), normalizeColor(203), 1], 80, 16)
    hairMain.topHalf()

    gl.uniform4f(u_FragColor, 0.94, 0.79, 0.64, 1);
    drawTriangle( [-0.35, 0.5, -0.1, 0.7, 0, 0.5 ])
    drawTriangle( [0, 0.5, 0.1, 0.7, 0.3, 0.5 ])

    let outerLeftEye = new Circle([-0.16, 0.51],[normalizeColor(0), normalizeColor(0), normalizeColor(0), 1], 24, 16)
    outerLeftEye.bottomHalf()

    let leftEye = new Circle([-0.16, 0.5],[normalizeColor(19), normalizeColor(122), normalizeColor(127), 1], 20, 16)
    leftEye.bottomHalf()

    let leftEyeShine = new Circle([-0.23, 0.47],[normalizeColor(255), normalizeColor(255), normalizeColor(255), 1], 4, 16)
    leftEyeShine.render()

    let outerRightEye = new Circle([0.16, 0.51],[normalizeColor(0), normalizeColor(0), normalizeColor(0), 1], 24, 16)
    outerRightEye.bottomHalf()

    let rightEye = new Circle([0.16, 0.5],[normalizeColor(19), normalizeColor(122), normalizeColor(127), 1], 20, 16)
    rightEye.bottomHalf()

    let rightEyeShine = new Circle([0.09, 0.47],[normalizeColor(255), normalizeColor(255), normalizeColor(255), 1], 4, 16)
    rightEyeShine.render()

    let mouth = new Circle([0, 0.3],[normalizeColor(0), normalizeColor(0), normalizeColor(0), 1], 9, 16)
    mouth.bottomHalf()

    let mouthCover = new Circle([0, 0.32],[0.94, 0.79, 0.64, 1], 10, 16)
    mouthCover.bottomHalf()


    gl.uniform4f(u_FragColor, normalizeColor(134), normalizeColor(206), normalizeColor(203), 1);
    drawTriangle( [-0.4, 0.5, -0.42, 0.3, -0.2, 0.7 ])
    drawTriangle( [-0.2, 0.7, -0.3, 0.3, -0.4, 0.5 ])

    gl.uniform4f(u_FragColor, normalizeColor(134), normalizeColor(206), normalizeColor(203), 1);
    drawTriangle( [0.4, 0.5, 0.42, 0.3, 0.2, 0.7 ])
    drawTriangle( [0.2, 0.7, 0.3, 0.3, 0.4, 0.5 ])

    //More hair stuff

    drawTriangle( [-0.3, 0.5, -0.45, 0.8, -0.2, 0.7 ])

    drawTriangle( [-0.45, 0.9, -0.7, -0.4, -0.25, 0.8 ])
    drawTriangle( [-0.45, 0.9, -0.6, -0.4, -0.25, 0.8 ])

    drawTriangle( [0.45, 0.9, 0.7, -0.4, 0.25, 0.8 ])
    drawTriangle( [0.45, 0.9, 0.6, -0.4, 0.25, 0.8 ])

    //Hair ties

    gl.uniform4f(u_FragColor, normalizeColor(255), normalizeColor(40), normalizeColor(133), 1);
    drawTriangle( [0.3, 0.84, 0.35, 0.6, 0.25, 0.8 ])
    drawTriangle( [0.3, 0.84, 0.35, 0.6, 0.4, 0.6 ])

    gl.uniform4f(u_FragColor, normalizeColor(255), normalizeColor(40), normalizeColor(133), 1);
    drawTriangle( [-0.3, 0.84, -0.35, 0.6, -0.25, 0.8 ])
    drawTriangle( [-0.3, 0.84, -0.35, 0.6, -0.4, 0.6 ])


    

    let innerLeftFoot = new Circle([-0.3, -0.74],[normalizeColor(55), normalizeColor(59), normalizeColor(62), 1], 40, 16)
    innerLeftFoot.render()

    let leftFoot = new Circle([-0.3, -0.74],[normalizeColor(19), normalizeColor(122), normalizeColor(127), 1], 35, 16)
    leftFoot.render()

    let innerRightFoot = new Circle([0.3, -0.74],[normalizeColor(55), normalizeColor(59), normalizeColor(62), 1], 40, 16)
    innerRightFoot.render()

    let rightFoot = new Circle([0.3, -0.74],[normalizeColor(19), normalizeColor(122), normalizeColor(127), 1], 35, 16)
    rightFoot.render()

    

    
}

function normalizeColor(value) {
    return value/255
}