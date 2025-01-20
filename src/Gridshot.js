let time = 60;
let run_active = false;
let timeInterval;
let targets = []
let score = 0;
let scoreElement = document.getElementById("score");
let high_score = 0;

function gridshot_main() {
    setupWebGL();
    connectVariablesToGLSL()

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    document.addEventListener('keydown', function(event) {
        if(event.key === 'r') {
            start_run();
            console.log("reset");
        }
    });

    canvas.onmousedown=shoot;

    

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
    
}



function start_run() {
    end_run();
    run_active = true;
    time = 60;
    score = 0;
    scoreElement.innerHTML = "Score: " + score
    gl.clear(gl.COLOR_BUFFER_BIT);
    targets.push(new Circle([Math.random()*2 - 1, Math.random()*2 - 1], [1,1,1,1], 30, 20))
    targets.push(new Circle([Math.random()*2 - 1, Math.random()*2 - 1], [1,1,1,1], 30, 20))
    targets.push(new Circle([Math.random()*2 - 1, Math.random()*2 - 1], [1,1,1,1], 30, 20))
    targets.forEach((target) => target.render())
    timeInterval = window.setInterval(function() {
        if (time > 0) {
            time--;
            document.getElementById("time").innerHTML = "Timer : " + time;
        }
        if (time <= 0) {
            document.getElementById("time").innerHTML = "Timer : " + time;
            end_run();
        }
    }, 1000);
    
    document.getElementById("time").innerHTML = "Timer : " + time;
}

function shoot(event) {
    if(run_active) {
        check_hit(convertCoordinatesEventToGL(event))
    }
    
}

function check_hit(pos) {
    console.log(pos)
    for(let i = 0; i < targets.length; ++i) {
        if(Math.sqrt((pos[0] - targets[i].pos[0])**2 + (pos[1] - targets[i].pos[1])**2) < (targets[i].size/200)) {
            console.log("hit")
            targets.splice(i, 1);
            score++;
            scoreElement.innerHTML = "Score: " + score
            gl.clear(gl.COLOR_BUFFER_BIT);
            targets.push(new Circle([Math.random()*2 - 1, Math.random()*2 - 1], [1,1,1,1], 30, 20))
            targets.forEach((target) => target.render())
            break;
        }
    }
}

function end_run() {
    run_active = false;
    clearInterval(timeInterval)
    targets = []
    time = 0;
    if(score >= high_score) {
        high_score = score;
        document.getElementById("high_score").innerHTML = "High Score: " + high_score
    }
    
}